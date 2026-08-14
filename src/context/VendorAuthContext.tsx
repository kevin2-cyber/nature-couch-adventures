import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { vendorAuthApi } from "@/lib/endpoints";
import type { Staff } from "@/lib/types";

const STORAGE_KEY = "canteen.vendorStaff";

interface VendorAuthContextValue {
  staff: Staff | null;
  login: (username: string, password: string) => Promise<Staff>;
  logout: () => Promise<void>;
}

const VendorAuthContext = createContext<VendorAuthContextValue | undefined>(undefined);

export function VendorAuthProvider({ children }: { children: ReactNode }) {
  const [staff, setStaff] = useState<Staff | null>(() => {
    // No GET /api/vendor/account/me exists on the backend, so we optimistically
    // trust the last successful login for display purposes. The session cookie
    // (or its absence) remains the real source of truth: any 401 from a vendor
    // endpoint clears this via the event listener below.
    const cached = sessionStorage.getItem(STORAGE_KEY);
    return cached ? (JSON.parse(cached) as Staff) : null;
  });

  useEffect(() => {
    const clear = () => {
      setStaff(null);
      sessionStorage.removeItem(STORAGE_KEY);
    };
    window.addEventListener("vendor-unauthorized", clear);
    return () => window.removeEventListener("vendor-unauthorized", clear);
  }, []);

  const login = useCallback(async (username: string, password: string) => {
    const result = await vendorAuthApi.login({ username, password });
    setStaff(result);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(result));
    return result;
  }, []);

  const logout = useCallback(async () => {
    try {
      await vendorAuthApi.logout();
    } finally {
      setStaff(null);
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  return <VendorAuthContext.Provider value={{ staff, login, logout }}>{children}</VendorAuthContext.Provider>;
}

export function useVendorAuth() {
  const context = useContext(VendorAuthContext);
  if (!context) throw new Error("useVendorAuth must be used within a VendorAuthProvider");
  return context;
}
