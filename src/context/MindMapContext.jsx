import {
  createContext,
  useMemo,
  useRef,
  useState,
  useEffect
} from "react";
import data from "../data/mindmap.json";
import { radialLayout } from "../utils/layout";
import { fitView } from "../utils/fitView";

export const MindMapContext = createContext(null);

/* -------------------- helpers -------------------- */

const clone = (v) => JSON.parse(JSON.stringify(v));

const findNode = (node, id) => {
  if (!node) return null;
  if (node.id === id) return node;
  for (const c of node.children || []) {
    const found = findNode(c, id);
    if (found) return found;
  }
  return null;
};

const setAllExpanded = (node, value) => {
  node.expanded = value;
  node.children?.forEach((c) => setAllExpanded(c, value));
};

/* -------------------- provider -------------------- */

export function MindMapProvider({ children }) {
  const createInitialTree = () => {
    const t = clone(data);
    setAllExpanded(t, false);
    t.expanded = false; 
    return t;
  };

  const [tree, setTree] = useState(createInitialTree);
  const [selectedId, setSelectedId] = useState(null);
  const [zoom, setZoom] = useState(1);

  const svgRef = useRef(null);

  const graph = useMemo(() => radialLayout(tree), [tree]);
  const selectedNode = selectedId ? findNode(tree, selectedId) : null;

  /* -------------------- initial fit (center once) -------------------- */
  useEffect(() => {
    if (!svgRef.current || !graph.nodes.length) return;
    fitView(svgRef.current, graph.nodes);
    // run once only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* -------------------- interactions -------------------- */

  // click node
  const selectNode = (id) => {
    setTree((prev) => {
      const next = clone(prev);
      const node = findNode(next, id);

      if (!node) return prev;

      // click same node again → collapse / expand children
      if (id === selectedId && node.children?.length) {
        node.expanded = !node.expanded;
      }

      return next;
    });

    setSelectedId(id);
  };

  // expand entire tree
  const expandAll = () => {
    const t = clone(tree);
    setAllExpanded(t, true);
    setTree(t);

    requestAnimationFrame(() =>
      fitView(svgRef.current, radialLayout(t).nodes)
    );
  };

  // collapse to root only
  const collapseAll = () => {
    const t = createInitialTree();
    setTree(t);
    setSelectedId(null);

    requestAnimationFrame(() =>
      fitView(svgRef.current, radialLayout(t).nodes)
    );
  };

  // reset = fit view + reset zoom ONLY
  const reset = () => {
    setZoom(1);

    requestAnimationFrame(() => {
      if (!svgRef.current) return;
      fitView(svgRef.current, graph.nodes);
    });
  };

  /* -------------------- editing -------------------- */

  // controlled updates from Sidebar
  const updateNode = (id, fields) => {
    setTree((prev) => {
      const next = clone(prev);
      const node = findNode(next, id);
      if (node) Object.assign(node, fields);
      return next;
    });
  };

  /* -------------------- zoom -------------------- */

  const zoomIn = () => setZoom((z) => Math.min(z + 0.2, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.2, 0.4));

  /* -------------------- context value -------------------- */

  return (
    <MindMapContext.Provider
      value={{
        graph,
        svgRef,
        zoom,
        zoomIn,
        zoomOut,
        reset,
        expandAll,
        collapseAll,
        selectNode,
        selectedNode,
        updateNode
      }}
    >
      {children}
    </MindMapContext.Provider>
  );
};