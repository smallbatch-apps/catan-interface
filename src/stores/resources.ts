import { create } from "zustand";
import { ZERO_ADDRESS } from "../constants";
import type { EthAddress } from "../types.ts";

interface ResourcesStore {
  resourcesAddress: EthAddress;
  setResourcesAddress: (address: EthAddress) => void;
}

export const useResourcesStore = create<ResourcesStore>((set) => ({
  resourcesAddress: ZERO_ADDRESS,
  setResourcesAddress: (address) => set({ resourcesAddress: address }),
}));
