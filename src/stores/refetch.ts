import { create } from "zustand";
import { QueryObserverResult } from "@tanstack/react-query";

import { BaseError } from "viem";

type RefetchResult = () => Promise<QueryObserverResult<unknown, BaseError>>;

type RefetchFunctions = {
  players: RefetchResult | null;
  nodes: RefetchResult | null;
  roads: RefetchResult | null;
  hexes: RefetchResult | null;
  harbors: RefetchResult | null;
};

interface RefetchStore {
  refetch: RefetchFunctions;
  setRefetch: (newFunctions: Partial<RefetchFunctions>) => void;
}

export const useRefetchStore = create<RefetchStore>((set, get) => ({
  refetch: {
    players: null,
    nodes: null,
    roads: null,
    hexes: null,
    harbors: null,
  } as RefetchFunctions,

  setRefetch: (newFunctions) =>
    set({
      refetch: { ...get().refetch, ...newFunctions },
    }),
}));
