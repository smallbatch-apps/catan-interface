import { type RoadType } from "../types";
import { allPossibleRoads } from "../data";
import { ZERO_ADDRESS } from "../constants";

type Props = {
  roads: RoadType[];
};

export default function Roads({ roads }: Props) {
  const mergedRoads = allPossibleRoads.map((road) => {
    const realRoad = roads.find((r) => r.id === road.id);
    if (realRoad) return { ...road, ...realRoad };
    return road;
  });
  const active = false;
  return (
    <div id="roads" className={active ? "active" : ""}>
      {mergedRoads.map(({ id, direction, playerAddress }) => (
        <div
          className={`road road-${id} ${direction} ${
            playerAddress === ZERO_ADDRESS ? "unowned" : "occupied"
          }`}
          key={id}
        />
      ))}
    </div>
  );
}
