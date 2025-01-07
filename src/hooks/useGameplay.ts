import { useGameplayStore } from "../stores/gameplay.ts";
import { useAccount } from "wagmi";

import { ZERO_ADDRESS, BoardMode } from "../constants";

export const useGameplay = () => {
  const { address: myAddress } = useAccount();
  const { currentRoll, currentPlayer, mode, boardStatus } = useGameplayStore();

  // Derived values
  const isCurrentPlayer = myAddress === currentPlayer;
  const isActive = currentPlayer !== ZERO_ADDRESS;
  const canRoll = isCurrentPlayer && !currentRoll;
  const isSelecting = mode !== BoardMode.NotActive;

  return {
    // Raw state
    currentRoll,
    currentPlayer,
    boardStatus,
    mode,
    myAddress,

    // Derived state
    isCurrentPlayer,
    isActive,
    canRoll,
    isSelecting,

    // Useful type guards/checks
    isSelectingRoad: mode === BoardMode.SelectRoad,
    isSelectingSettlement: mode === BoardMode.SelectSettlement,
    isSelectingCity: mode === BoardMode.SelectCity,
  };
};
