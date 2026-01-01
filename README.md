# Interactive Mindmap UI

## Overview
This project implements an **interactive, data-driven Mindmap UI** using React.  
The application visualizes hierarchical data as a mindmap and supports rich interactions such as node expansion/collapse, hover tooltips, selection with a detail panel, inline editing, zooming, reset/fit-to-view, and PNG export.

The implementation focuses on **correctness, clarity, clean architecture, and maintainability**, rather than over-engineering.

---

## Technologies Used
- **React (Vite)** – Component-based UI and fast development workflow
- **JavaScript (ES6+)** – Core application logic
- **SVG** – Rendering nodes and edges with precise layout control
- **Tailwind CSS** – Utility-first styling and theming (dark/light)
- **HTML5 APIs** – Canvas export and DOM manipulation

---

## Libraries Used (and Why)
- **React Context API** – Centralized state management for the mindmap
- **html2canvas** – Reliable PNG export of SVG-based UI
- **Tailwind CSS** – Consistent UI styling without custom CSS overhead

---

## Features
- Data-driven mindmap generated entirely from JSON
- Expand / collapse nodes via click interaction
- Hover tooltip showing node summary
- Sidebar with detailed node information
- Inline editing of node title and summary (state-only)
- Zoom in / out
- Reset / Fit to view
- Expand all / Collapse all
- Export mindmap as PNG

---

## Data-Driven Design
The mindmap is **not hardcoded**.

- All nodes and hierarchy come from `mindmap.json`
- Adding or modifying nodes in JSON automatically updates the UI
- No UI logic changes are required when data changes

---

## Architecture
src/
├── components/ # UI rendering (MindMap, MindNode, Sidebar, Toolbar)
├── context/ # Global state and logic
├── data/ # JSON data source
├── utils/ # Layout, fit-view, export helpers


## Notes
- Inline editing updates **in-memory state only** (no backend)
- Persistence can be added easily due to clean architecture
- Focus is on clarity, correctness, and UX rather than pixel-perfect visuals

📄 Detailed project documentation is available in:
`Documentation.pdf`