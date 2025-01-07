import { Color, ResourceTypes, HarborTypes } from "./constants";
import { type UseReadContractReturnType } from "wagmi";
import boardAbi from "./abi/board.json";

export type Hex = {
  resourceType: ResourceTypes;
  hasRobber: boolean;
  roll: number;
};

export type RoadType = {
  id: string;
  playerAddress: string;
  direction?: string;
};

export type Harbor = {
  roadId: string;
  type: HarborTypes;
};

export enum NodeStatus {
  Unclaimed,
  Claimed,
  Robbed,
}

export type NodeType = {
  id?: string;
  status: NodeStatus;
  playerAddress: string;
  connections: string;
};

export type PlayerType = {
  ethAddress: string;
  color: Color;
  name: string;
  victoryPoints: number;
  privateVictoryPoints: number;
  roadCount: number;
  settlementCount: number;
  cityCount: number;
};

export interface Roll {
  total: number;
  die1: number;
  die2: number;
}

export type EthAddress = `0x${string}`;

export type PlayersReturnType = UseReadContractReturnType<
  typeof boardAbi,
  "getPlayers",
  PlayerType[]
>;

export type HexesReturnType = UseReadContractReturnType<
  typeof boardAbi,
  "getAllHexes",
  Hex[]
>;

export type NodesReturnType = UseReadContractReturnType<
  typeof boardAbi,
  "getAllNodes",
  NodeType[]
>;

export type RoadsReturnType = UseReadContractReturnType<
  typeof boardAbi,
  "getAllRoads",
  RoadType[]
>;

export type HarborsReturnType = UseReadContractReturnType<
  typeof boardAbi,
  "getAllHarbors",
  HarborType[]
>;
