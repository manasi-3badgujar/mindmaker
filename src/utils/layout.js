export function radialLayout(root) {
  const nodes = [];
  const edges = [];

  const BASE_RADIUS = 120;
  const TEXT_FACTOR = 7;
  const LEVEL_GAP = 60;

  const measureNode = (node) => {
    const text = node.title || "";
    const words = text.split(" ");
    const maxLine = Math.max(...words.map(w => w.length));
    return {
      width: Math.max(90, maxLine * TEXT_FACTOR),
      height: Math.max(50, words.length * 18)
    };
  };

  function walk(node, depth, angleStart, angleEnd, parent) {
    const angle = (angleStart + angleEnd) / 2;
    const size = measureNode(node);

    const radius =
      depth * BASE_RADIUS +
      depth * (size.width / 2) +
      depth * LEVEL_GAP;

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    nodes.push({
      ...node,
      x,
      y,
      depth,          // ✅ REQUIRED FOR COLORS
      width: size.width,
      height: size.height
    });

    if (parent) {
      edges.push({ from: parent.id, to: node.id });
    }

    if (!node.expanded || !node.children?.length) return;

    const slice = (angleEnd - angleStart) / node.children.length;

    node.children.forEach((child, i) => {
      walk(
        child,
        depth + 1,
        angleStart + slice * i,
        angleStart + slice * (i + 1),
        node
      );
    });
  }

  walk(root, 0, 0, Math.PI * 2, null);

  return { nodes, edges };
};