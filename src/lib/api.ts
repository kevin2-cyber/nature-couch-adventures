// Thin fetch wrapper around the Spring Boot API. Session-cookie auth means
// every request must carry credentials, and every error shape the backend
// can return (ApiError, field-validation map, or a bare 401/403 with no
// body) needs to collapse into one exception type the UI can render.

export class ApiRequestError extends Error {
  status: number;
  fieldErrors?: Record<string, string>;

  constructor(status: number, message: string, fieldErrors?: Record<string, string>) {
    super(message);
    this.name = "ApiRequestError";
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

const DEFAULT_MESSAGES: Record<number, string> = {
  401: "Please sign in to continue.",
  403: "You don't have permission to do that.",
  404: "We couldn't find that.",
  409: "That couldn't be completed - please refresh and try again.",
  500: "Something went wrong on our end. Please try again.",
};

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`/api${path}`, {
    ...options,
    credentials: "include",
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      Accept: "application/json",
      ...options.headers,
    },
  });

  if (response.status === 204) {
    return undefined as T;
  }

  const text = await response.text();
  const data = text ? JSON.parse(text) : undefined;

  if (!response.ok) {
    if (response.status === 401) {
      // Session expired or never existed - let the relevant auth context clear
      // its state (and any page relying on it redirect) without every call
      // site needing its own 401 handling.
      window.dispatchEvent(
        new CustomEvent(path.startsWith("/vendor") ? "vendor-unauthorized" : "customer-unauthorized"),
      );
    }
    if (data && typeof data === "object" && "error" in data) {
      throw new ApiRequestError(response.status, data.error as string);
    }
    if (data && typeof data === "object" && !("error" in data)) {
      // Field-validation errors: { fieldName: message }
      const fieldErrors = data as Record<string, string>;
      const firstMessage = Object.values(fieldErrors)[0];
      throw new ApiRequestError(response.status, firstMessage ?? "Please check the form and try again.", fieldErrors);
    }
    throw new ApiRequestError(response.status, DEFAULT_MESSAGES[response.status] ?? "Request failed.");
  }

  return data as T;
}

export const api = {
  get: <T>(path: string) => request<T>(path, { method: "GET" }),
  post: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: "POST", body: body !== undefined ? JSON.stringify(body) : undefined }),
  put: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: "PUT", body: body !== undefined ? JSON.stringify(body) : undefined }),
  patch: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: "PATCH", body: body !== undefined ? JSON.stringify(body) : undefined }),
};
