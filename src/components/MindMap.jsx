import { useContext } from "react";
import { MindMapContext } from "../context/MindMapContext";
import MindNode from "./MindNode";

export default function MindMap() {
  const { graph, svgRef, zoom } = useContext(MindMapContext);

  return (
    <svg
      ref={svgRef}
      className="w-full h-full"
      style={{
        transform: `scale(${zoom})`,
        transformOrigin: "center center",
        transition: "transform 0.3s ease"
      }}
    >
      {graph.edges.map((e) => {
        const a = graph.nodes.find((n) => n.id === e.from);
        const b = graph.nodes.find((n) => n.id === e.to);
        return (
          <line
            key={e.from + e.to}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={document.documentElement.classList.contains("dark") ? "#94a3b8" : "#64748b"}
            strokeWidth="2"
          />
        );
      })}

      {graph.nodes.map((n) => (
        <MindNode key={n.id} node={n} />
      ))}
    </svg>
  );
};