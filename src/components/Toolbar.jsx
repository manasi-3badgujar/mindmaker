import { useContext } from "react";
import { MindMapContext } from "../context/MindMapContext";
import { ThemeContext } from "../context/ThemeContext";
import { exportPNG } from "../utils/exportPNG";
import { exportJSON } from "../utils/exportJSON";
import data from "../data/mindmap.json";

export default function Toolbar() {
  const {
    expandAll,
    collapseAll,
    zoomIn,
    zoomOut,
    reset,
    svgRef
  } = useContext(MindMapContext);

  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div className="absolute top-4 left-4 z-10 flex gap-2 flex-wrap
      bg-slate-900/80 dark:bg-slate-900/90 backdrop-blur
      p-3 rounded-lg border border-white/10
    ">
      <button onClick={expandAll} className="btn bg-emerald-600">Expand</button>
      <button onClick={collapseAll} className="btn bg-rose-600">Collapse</button>

      <button onClick={zoomIn} className="btn bg-sky-600">+</button>
      <button onClick={zoomOut} className="btn bg-sky-600">−</button>

      <button onClick={reset} className="btn bg-slate-600">Resize</button>

      <button
        onClick={() => exportPNG(svgRef.current, isDark ? "dark" : "light")}
        className="btn bg-orange-600"
      >
        Export PNG
      </button>

      <button
        onClick={() => exportJSON(data)}
        className="btn bg-pink-600"
      >
        Export JSON
      </button>

      <button
        onClick={toggleTheme}
        className="btn bg-slate-700"
      >
        {isDark ? "🌙" : "☀️"}
      </button>
    </div>
  );
};