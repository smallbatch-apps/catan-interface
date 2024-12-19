export type Hex = {
  resourceType: ResourceTypes;
  hasRobber: boolean;
  roll: number;
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
