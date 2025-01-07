import { create } from "zustand";
import type { Roll, EthAddress } from "../types";
import { BoardMode, BoardStatus } from "../constants";

interface GameplayState {
  currentRoll: Roll | null;
  currentPlayer: EthAddress | null;
  boardStatus: BoardStatus;
  mode: BoardMode;

  setRoll: (roll: Roll | null) => void;
  setBoardStatus: (status: BoardStatus) => void;
  setCurrentPlayer: (address: EthAddress) => void;
  setMode: (mode: BoardMode) => void;
}

export const useGameplayStore = create<GameplayState>((set) => ({
  currentRoll: null,
  currentPlayer: null,
  boardStatus: BoardStatus.NoBoard,
  mode: BoardMode.NotActive,

  setRoll: (roll) => set({ currentRoll: roll }),
  setBoardStatus: (status) => set({ boardStatus: status }),
  setCurrentPlayer: (address) => set({ currentPlayer: address }),
  setMode: (mode) => set({ mode }),
}));
