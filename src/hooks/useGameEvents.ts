import { useWatchContractEvent } from "wagmi";

// import { useGameplayStore } from "../stores/gameplay.ts";
import { useBoardStore } from "../stores/board.ts";
// import { BoardMode } from "../constants.ts";
import boardAbi from "../abi/board.json";

export const useGameEvents = () => {
  // const setMode = useGameplayStore((state) => state.setMode);
  const contractAddress = useBoardStore((state) => state.boardAddress);

  useWatchContractEvent({
    address: contractAddress,
    abi: boardAbi,
    eventName: "GameStatusChanged",
    onLogs(logs) {
      console.log(logs);

      // const newStatus = logs.args.newStatus as BoardMode
      // setMode(newStatus)
    },
  });
};
