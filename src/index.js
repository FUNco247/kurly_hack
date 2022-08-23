import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ModalProvider } from "styled-react-modal";
import App from "./App";
import styled from "styled-components";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});

const ModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background-color: rgba(190, 191, 192, 0.7);
`;

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalProvider backgroundComponent={ModalBackground}>
        <App />
      </ModalProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
