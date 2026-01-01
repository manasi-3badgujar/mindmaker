import { useContext, useState } from "react";
import { MindMapContext } from "../context/MindMapContext";

export default function MindNode({ node }) {
  const { selectNode } = useContext(MindMapContext);
  const [hover, setHover] = useState(false);
  const isDark = document.documentElement.classList.contains("dark");

  const MAX_WIDTH = 160;
  const CHAR_WIDTH = 7;
  const LINE_HEIGHT = 16;

  const text = node.title || "";
  const estimatedWidth = Math.min(
    MAX_WIDTH,
    Math.max(70, text.length * CHAR_WIDTH)
  );

  const lines = Math.ceil((text.length * CHAR_WIDTH) / estimatedWidth);
  const height = Math.max(44, lines * LINE_HEIGHT + 20);

  const colors = [
    isDark ? "#60a5fa" : "#93c5fd",
    isDark ? "#4ade80" : "#86efac",
    isDark ? "#fbbf24" : "#fde68a",
    isDark ? "#c084fc" : "#e9d5ff",
    isDark ? "#fb7185" : "#fecaca"
  ];

  const fill = colors[Math.min(node.depth ?? 0, colors.length - 1)];

  return (
    <g
      transform={`translate(${node.x},${node.y})`}
      onClick={() => selectNode(node.id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ cursor: "pointer" }}
    >
      <ellipse
        rx={estimatedWidth / 2 + 14}
        ry={height / 2 + 10}
        fill={fill}
        stroke={isDark ? "#e5e7eb" : "#1e3a8a"}
        strokeWidth="3"
      />

      {/* NODE TEXT */}
      <foreignObject
        x={-estimatedWidth / 2}
        y={-height / 2}
        width={estimatedWidth}
        height={height}
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className="flex items-center justify-center h-full text-center text-xs font-semibold px-2"
          style={{ pointerEvents: "none", color: "#020617" }}
        >
          {text}
        </div>
      </foreignObject>

      {/* HOVER TOOLTIP */}
      {hover && node.summary && (
        <foreignObject
          x={estimatedWidth / 2 + 10}
          y={-20}
          width={200}
          height={80}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            className="bg-slate-900 text-white text-xs rounded-md px-2 py-1 shadow-lg"
          >
            {node.summary}
          </div>
        </foreignObject>
      )}
    </g>
  );
};