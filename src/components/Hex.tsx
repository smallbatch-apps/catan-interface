import type { Hex as HexType } from "../types";

type Props = {
  hex: HexType;
};

const hexResourceType = [
  "",
  "sheep",
  "brick",
  "wood",
  "stone",
  "wheat",
  "desert",
];

export default function Hex({ hex }: Props) {
  const hexClass = `hex ${hexResourceType[hex.resourceType]}`;
  const hexBorderClass = `hex-border ${hexResourceType[hex.resourceType]}`;
  const hexContent = hex.hasRobber ? "👮" : <RollNumber roll={hex.roll} />;
  return (
    <div className="hex-wrapper">
      <div className={hexBorderClass}></div>
      <div className={hexClass}>{hexContent}</div>
    </div>
  );
}

function RollNumber({ roll }: { roll: number }) {
  return (
    <div
      className={`roll-number ${roll === 8 || roll === 6 ? "critical" : ""}`}
    >
      {roll}
    </div>
  );
}

// function getRandomPosition() {
//   // Maybe you want to stay away from edges
//   const x = Math.floor(Math.random() * 1500 + 150); // 150-1650%
//   const y = Math.floor(Math.random() * 1500 + 150); // 150-1650%
//   return `${x}% ${y}%`;
// }
