export function fitView(svg, nodes) {
  if (!svg || !nodes.length) return;

  const xs = nodes.map(n => n.x);
  const ys = nodes.map(n => n.y);

  const TOOLBAR_HEIGHT = 80;
  const PADDING = 180;

  const minX = Math.min(...xs) - PADDING;
  const maxX = Math.max(...xs) + PADDING;
  const minY = Math.min(...ys) - PADDING - TOOLBAR_HEIGHT;
  const maxY = Math.max(...ys) + PADDING;

  const width = maxX - minX;
  const height = maxY - minY;

  svg.setAttribute(
    "viewBox",
    `${minX} ${minY} ${width} ${height}`
  );
};