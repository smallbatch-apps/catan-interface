import { ResourceTypes } from "../constants";
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
  const hexContent = hex.hasRobber ? "👮" : <RollNumber roll={hex.roll} />;
  return (
    <div className="hex-wrapper">
      {hexContent}
      {hexDecoration(hex)}
      <div className={hexClass}></div>
    </div>
  );
}

function RollNumber({ roll }: { roll: number }) {
  if (!roll) return <></>;
  return (
    <div
      className={`roll-number ${roll === 8 || roll === 6 ? "critical" : ""}`}
    >
      {roll}
    </div>
  );
}

function hexDecoration(hex: HexType) {
  if (hex.resourceType === ResourceTypes.Desert) {
    return drawDesertHex();
  } else if (hex.resourceType === ResourceTypes.Wood) {
    return drawForestHex();
  } else if (hex.resourceType === ResourceTypes.Brick) {
    return drawBrickHex();
  } else if (hex.resourceType === ResourceTypes.Sheep) {
    return drawSheepHex();
  } else if (hex.resourceType === ResourceTypes.Wheat) {
    return drawWheatHex();
  } else if (hex.resourceType === ResourceTypes.Stone) {
    return drawStoneHex();
  }
}

const drawDesertHex = () => {
  return (
    <div className="hex-decoration">
      <i className="hex-icon fa-duotone fa-solid fa-cactus background2 col-1"></i>
      <i className="hex-icon fa-duotone fa-solid fa-cactus foreground col-3"></i>
      <i className="hex-icon fa-duotone fa-solid fa-skull-cow foreground col-4"></i>
      <i className="hex-icon fa-duotone fa-solid fa-cactus background col-5"></i>
    </div>
  );
};

const drawForestHex = () => {
  return (
    <div className="hex-decoration">
      <i className="hex-icon fa-duotone fa-solid fa-tree closeup col-3"></i>
      <i className="hex-icon fa-duotone fa-solid fa-trees background2 col-1"></i>
      <i className="hex-icon fa-duotone fa-solid fa-tree background2 col-3"></i>
      <i className="hex-icon fa-duotone fa-solid fa-trees background2 col-2_5 up-5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-trees background2 col-2 down-5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-tree-deciduous background2 col-4"></i>
      <i className="hex-icon fa-duotone fa-solid fa-trees background col-1_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-tree background col-2 up-5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-trees foreground col-3"></i>
      <i className="hex-icon fa-duotone fa-solid fa-tree-deciduous foreground col-1_5 down-5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-tree foreground col-4"></i>
      <i className="hex-icon fa-duotone fa-solid fa-tree-deciduous background col-4 down-5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-trees background col-5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-tree background2 col-4_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-tree background2 col-5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-tree background3 col-2 up-5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-tree background3 col-3_5 up-10"></i>
      <i className="hex-icon fa-duotone fa-solid fa-tree background3 col-3_5 down-5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-tree background3 col-2_5 up-10"></i>
      <i className="hex-icon fa-duotone fa-solid fa-tree background3 col-3"></i>
      <i className="hex-icon fa-duotone fa-solid fa-trees background3 col-4"></i>
    </div>
  );
};

const drawBrickHex = () => {
  return (
    <div className="hex-decoration">
      <i className="hex-icon fa-duotone fa-solid fa-block-brick foreground col-1_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-block-brick background2 col-2"></i>
      <i className="hex-icon fa-duotone fa-solid fa-block-brick background col-4_5"></i>

      <i className="hex-icon fa-duotone fa-solid fa-mound closeup col-3"></i>
      <i className="hex-icon fa-duotone fa-solid fa-mound foreground col-4"></i>
      <i className="hex-icon fa-duotone fa-solid fa-mound background2 col-4_5 down-5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-mound background col-2"></i>
      <i className="hex-icon fa-duotone fa-solid fa-mound background3 col-3"></i>
      <i className="hex-icon fa-duotone fa-solid fa-mound background2 col-1_5"></i>

      <i className="hex-icon fa-duotone fa-solid fa-bulldozer background2 col-4"></i>
    </div>
  );
};

const drawSheepHex = () => {
  return (
    <div className="hex-decoration">
      <i className="hex-icon fa-duotone fa-solid fa-sheep foreground col-1_5 down-10"></i>
      <i className="hex-icon fa-duotone fa-solid fa-sheep background2 col-2 flip"></i>
      <i className="hex-icon fa-duotone fa-solid fa-sheep background col-4_5 up-10"></i>
      <i className="hex-icon fa-duotone fa-solid fa-sheep foreground col-4_5 flip"></i>
    </div>
  );
};

const drawWheatHex = () => {
  return (
    <div className="hex-decoration">
      <i className="hex-icon fa-duotone fa-solid fa-wheat background3 col-1_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat background3 col-2"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat background3 col-1_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat background3 col-2"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat background3 col-2_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat background3 col-3"></i>

      <i className="hex-icon fa-duotone fa-solid fa-wheat background2 col-1"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat background2 col-1_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat background2 col-2"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat background2 col-2_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat background2 col-3"></i>

      <i className="hex-icon fa-duotone fa-solid fa-wheat background col-1"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat background col-1_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat background col-2"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat background col-1_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat background col-2_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat background col-3"></i>

      <i className="hex-icon fa-duotone fa-solid fa-wheat foreground col-1"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat foreground col-1_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat foreground col-2"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat foreground col-1_5"></i>

      <i className="hex-icon fa-duotone fa-solid fa-tractor closeup col-2_5 up-5"></i>

      <i className="hex-icon fa-duotone fa-solid fa-wheat background2 col-2"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat background col-4_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat foreground col-5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-wheat foreground col-4_5"></i>
    </div>
  );
};

const drawStoneHex = () => {
  return (
    <div className="hex-decoration">
      <i className="hex-icon fa-duotone fa-solid fa-mountain background3 col-1 down-5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-mountain background2 col-1_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-mountain background col-2"></i>
      <i className="hex-icon fa-duotone fa-solid fa-mountain background col-1_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-mountain foreground col-2_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-mountain closeup col-3_5 up-10"></i>

      <i className="hex-icon fa-duotone fa-solid fa-mountain background3 col-4"></i>
      <i className="hex-icon fa-duotone fa-solid fa-mountains background2 col-4_5"></i>
      <i className="hex-icon fa-duotone fa-solid fa-mountains background col-5 down-5"></i>

      <i className="hex-icon fa-duotone fa-solid fa-mountain background2 col-3 up-5"></i>
    </div>
  );
};

// function getRandomPosition() {
//   // Maybe you want to stay away from edges
//   const x = Math.floor(Math.random() * 1500 + 150); // 150-1650%
//   const y = Math.floor(Math.random() * 1500 + 150); // 150-1650%
//   return `${x}% ${y}%`;
// }
