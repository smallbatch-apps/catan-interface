import { createConfig, http } from "wagmi";
import { polygon, anvil } from "wagmi/chains";
import { injected } from "wagmi/connectors";

const targetChain = import.meta.env.DEV ? anvil : polygon;

export const config = createConfig({
  chains: [targetChain],
  connectors: [injected()],
  transports: {
    [polygon.id]: http(),
    [anvil.id]: http(),
  },
});
