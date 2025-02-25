import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GlobalProvider } from "./context/GlobalState.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </GlobalProvider>
  </StrictMode>
);
