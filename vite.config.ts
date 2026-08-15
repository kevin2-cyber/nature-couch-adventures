import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// Dev server proxies /api to the Spring Boot backend so the browser sees
// same-origin requests - avoids CORS and cross-site cookie issues with the
// JSESSIONID the backend relies on for auth.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      "/images": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});
