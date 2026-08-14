import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { accountApi, customerAuthApi } from "@/lib/endpoints";
import type { Customer } from "@/lib/types";

interface CustomerAuthContextValue {
  customer: Customer | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<Customer>;
  register: (input: { fullName: string; email: string; phone: string; password: string }) => Promise<Customer>;
  logout: () => Promise<void>;
}

const CustomerAuthContext = createContext<CustomerAuthContextValue | undefined>(undefined);

export function CustomerAuthProvider({ children }: { children: ReactNode }) {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    accountApi
      .me()
      .then(setCustomer)
      .catch(() => setCustomer(null))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const clear = () => setCustomer(null);
    window.addEventListener("customer-unauthorized", clear);
    return () => window.removeEventListener("customer-unauthorized", clear);
  }, []);

  const login = useCallback(async (username: string, password: string) => {
    const result = await customerAuthApi.login({ username, password });
    setCustomer(result);
    return result;
  }, []);

  const register = useCallback(
    async (input: { fullName: string; email: string; phone: string; password: string }) => {
      const result = await customerAuthApi.register(input);
      // Registration does not start a session - the caller sends the user to log in.
      return result;
    },
    [],
  );

  const logout = useCallback(async () => {
    try {
      await customerAuthApi.logout();
    } finally {
      setCustomer(null);
    }
  }, []);

  return (
    <CustomerAuthContext.Provider value={{ customer, loading, login, register, logout }}>
      {children}
    </CustomerAuthContext.Provider>
  );
}

export function useCustomerAuth() {
  const context = useContext(CustomerAuthContext);
  if (!context) throw new Error("useCustomerAuth must be used within a CustomerAuthProvider");
  return context;
}
