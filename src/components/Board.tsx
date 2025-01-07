import Hex from "./Hex";
import Shoreline from "./Shoreline";
import Nodes from "./Nodes";
import Roads from "./Roads";
import Controls from "./Controls";
import { useBoard } from "../hooks/useBoard";

export default function Board() {
  const {
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
  } = useBoard();

  if (!players) {
    return <div>No players</div>;
  }

  if (hexesLoading || nodesLoading || playersLoading || roadsLoading) {
    return <div>Loading...</div>;
  }
  if (hexesError || nodesError || playersError || roadsError) {
    return <div>Error</div>;
  }

  return (
    <div id="outer-container">
      <div id="board" className="board blue">
        <Shoreline />

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
        <Nodes nodes={nodes} />
        <Roads roads={roads} />
      </div>
      <Controls players={players} />
    </div>
  );
}
