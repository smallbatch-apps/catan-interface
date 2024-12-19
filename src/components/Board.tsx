import Hex from "./Hex";
import { type Hex as HexType } from "../types";

const hexArray: HexType[] = [
  // {
  //   resourceType: 6,
  //   roll: 0,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 5,
  //   roll: 8,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 4,
  //   roll: 9,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 1,
  //   roll: 9,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 3,
  //   roll: 5,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 5,
  //   roll: 10,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 5,
  //   roll: 8,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 5,
  //   roll: 10,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 1,
  //   roll: 5,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 2,
  //   roll: 11,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 1,
  //   roll: 12,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 3,
  //   roll: 6,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 3,
  //   roll: 3,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 2,
  //   roll: 4,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 1,
  //   roll: 2,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 3,
  //   roll: 3,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 4,
  //   roll: 4,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 2,
  //   roll: 11,
  //   hasRobber: false,
  // },
  // {
  //   resourceType: 4,
  //   roll: 6,
  //   hasRobber: false,
  // },
  {
    resourceType: 2,
    roll: 2,
    hasRobber: false,
  },
  {
    resourceType: 2,
    roll: 8,
    hasRobber: false,
  },
  {
    resourceType: 5,
    roll: 9,
    hasRobber: false,
  },
  {
    resourceType: 1,
    roll: 9,
    hasRobber: false,
  },
  {
    resourceType: 3,
    roll: 10,
    hasRobber: false,
  },
  {
    resourceType: 3,
    roll: 5,
    hasRobber: false,
  },
  {
    resourceType: 4,
    roll: 10,
    hasRobber: false,
  },
  {
    resourceType: 4,
    roll: 5,
    hasRobber: false,
  },
  {
    resourceType: 4,
    roll: 4,
    hasRobber: false,
  },
  {
    resourceType: 1,
    roll: 12,
    hasRobber: false,
  },
  {
    resourceType: 6,
    roll: 0,
    hasRobber: false,
  },
  {
    resourceType: 5,
    roll: 8,
    hasRobber: false,
  },
  {
    resourceType: 3,
    roll: 3,
    hasRobber: false,
  },
  {
    resourceType: 2,
    roll: 11,
    hasRobber: false,
  },
  {
    resourceType: 3,
    roll: 6,
    hasRobber: false,
  },
  {
    resourceType: 1,
    roll: 4,
    hasRobber: false,
  },
  {
    resourceType: 1,
    roll: 6,
    hasRobber: false,
  },
  {
    resourceType: 5,
    roll: 11,
    hasRobber: false,
  },
  {
    resourceType: 5,
    roll: 3,
    hasRobber: false,
  },
];

export default function Board() {
  return (
    <div className="board">
      <div className="hex-row">
        <Hex hex={hexArray[0]} />
        <Hex hex={hexArray[1]} />
        <Hex hex={hexArray[2]} />
      </div>
      <div className="hex-row">
        <Hex hex={hexArray[3]} />
        <Hex hex={hexArray[4]} />
        <Hex hex={hexArray[5]} />
        <Hex hex={hexArray[6]} />
      </div>
      <div className="hex-row">
        <Hex hex={hexArray[7]} />
        <Hex hex={hexArray[8]} />
        <Hex hex={hexArray[9]} />
        <Hex hex={hexArray[10]} />
        <Hex hex={hexArray[11]} />
      </div>
      <div className="hex-row">
        <Hex hex={hexArray[12]} />
        <Hex hex={hexArray[13]} />
        <Hex hex={hexArray[14]} />
        <Hex hex={hexArray[15]} />
      </div>
      <div className="hex-row">
        <Hex hex={hexArray[16]} />
        <Hex hex={hexArray[17]} />
        <Hex hex={hexArray[18]} />
      </div>
    </div>
  );
}
