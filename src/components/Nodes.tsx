import { type NodeType } from "../types";

type Props = {
  nodes: NodeType[];
};

export default function Nodes({ nodes }: Props) {
  const nodesWithIds = nodes.map((node, index) => ({
    ...node,
    id: index.toString(16).padStart(2, "0"),
  }));

  return (
    <div id="nodes">
      {nodesWithIds.map((node) => (
        <div
          className={`node node-${node.id}`}
          id={node.id}
          key={node.connections}
        ></div>
      ))}
    </div>
  );
}
