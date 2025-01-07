export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export enum Color {
  Red,
  Yellow,
  Blue,
  White,
}

export const colorNames = {
  [Color.Red]: "red",
  [Color.Yellow]: "yellow",
  [Color.Blue]: "blue",
  [Color.White]: "white",
};

export enum ResourceTypes {
  Unknown,
  Sheep,
  Brick,
  Wood,
  Stone,
  Wheat,
  Desert,
}

export enum BoardMode {
  NotActive,
  Rolling,
  SelectRoad,
  SelectSettlement,
  SelectCity,
}

export enum BoardStatus {
  NoBoard,
  FindingPlayers,
  InitialPlacement,
  Active,
  GameOver,
}

export enum HarborTypes {
  None,
  Sheep,
  Brick,
  Wood,
  Stone,
  Wheat,
  Generic,
}
