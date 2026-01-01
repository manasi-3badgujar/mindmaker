import html2canvas from "html2canvas";

export async function exportPNG(svgElement, theme = "light") {
  if (!svgElement) return;

  // Capture the SVG's PARENT container (important!)
  const container = svgElement.parentElement;

  if (!container) {
    console.error("Export PNG failed: container not found");
    return;
  }

  try {
    const canvas = await html2canvas(container, {
      backgroundColor: theme === "dark" ? "#020617" : "#f8fafc",
      scale: 2, // higher resolution
      useCORS: true
    });

    const link = document.createElement("a");
    link.download = "mindmap.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (err) {
    console.error("Export PNG failed:", err);
  }
};