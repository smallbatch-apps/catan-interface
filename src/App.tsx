import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./wagmi.ts";

import "./App.css";
import Board from "./components/Board";
import Connect from "./components/Connect";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // because who needs fresh data anyway
      retry: 1, // one retry is plenty, living life on the edge
      staleTime: 5 * 60 * 1000, // 5 minutes, or "eventually consistent"
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <Connect />
        <Board />
      </WagmiProvider>
    </QueryClientProvider>
  );
}

export default App;
