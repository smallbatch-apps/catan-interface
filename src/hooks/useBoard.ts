import { useEffect } from "react";
import { useReadContract, type UseReadContractReturnType } from "wagmi";
import type { RoadType, Hex as HexType, NodeType, PlayerType } from "../types";
import { useRefetchStore } from "../stores/refetch";

import boardAbi from "../abi/board.json";

export const useBoard = () => {
  const { setRefetch } = useRefetchStore();

  type PlayersReturnType = UseReadContractReturnType<
    typeof boardAbi,
    "getPlayers",
    PlayerType[]
  >;

  type HexesReturnType = UseReadContractReturnType<
    typeof boardAbi,
    "getAllHexes",
    HexType[]
  >;

  type NodesReturnType = UseReadContractReturnType<
    typeof boardAbi,
    "getAllNodes",
    NodeType[]
  >;

  type RoadsReturnType = UseReadContractReturnType<
    typeof boardAbi,
    "getAllRoads",
    RoadType[]
  >;

  const boardContract = {
    address: import.meta.env.VITE_BOARD_ADDRESS,
    abi: boardAbi,
  };

  const {
    data: players,
    isLoading: playersLoading,
    isError: playersError,
    refetch: refetchPlayers,
  } = useReadContract({
    ...boardContract,
    functionName: "getPlayers",
  }) as PlayersReturnType;

  const {
    data: hexArray,
    isLoading: hexesLoading,
    isError: hexesError,
    refetch: refetchHexes,
  } = useReadContract({
    ...boardContract,
    functionName: "getAllHexes",
  }) as HexesReturnType;

  // as {
  //   data: HexType[];
  //   isLoading: boolean;
  //   isError: boolean;
  //   refetch: () => void;
  // };

  const {
    data: nodes,
    isLoading: nodesLoading,
    isError: nodesError,
    refetch: refetchNodes,
  } = useReadContract({
    ...boardContract,
    functionName: "getAllNodes",
  }) as NodesReturnType;

  const {
    data: roads,
    isLoading: roadsLoading,
    isError: roadsError,
    refetch: refetchRoads,
  } = useReadContract({
    ...boardContract,
    functionName: "getAllRoads",
  }) as RoadsReturnType;

  useEffect(() => {
    setRefetch({
      players: refetchPlayers,
      nodes: refetchNodes,
      roads: refetchRoads,
      hexes: refetchHexes,
    });
  }, [refetchHexes, refetchNodes, refetchRoads, refetchPlayers]);

  return {
    players,
    playersLoading,
    playersError,
    hexArray,
    hexesLoading,
    hexesError,
    nodes,
    nodesLoading,
    nodesError,
    roads,
    roadsLoading,
    roadsError,
  };
};
