import { create } from "zustand";

import { ZERO_ADDRESS } from "../constants";
import type { EthAddress } from "../types.ts";

interface BoardStore {
  boardAddress: EthAddress;
  setBoardAddress: (address: EthAddress) => void;
}

export const useBoardStore = create<BoardStore>((set) => ({
  boardAddress: ZERO_ADDRESS,
  setBoardAddress: (address) => set({ boardAddress: address }),
}));
