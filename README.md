# 🧠 Interactive Mindmap UI

An **interactive, data-driven Mindmap application** built with React that visualizes hierarchical data in a clear and intuitive way.  
The project emphasizes **clean architecture**, **robust interactions**, and **maintainable frontend design**.

---

## ✨ Overview

This application renders a **dynamic mindmap** from structured data and allows users to explore, interact with, and edit nodes directly in the UI.

The mindmap supports:
- Hierarchical visualization (parent → child)
- Smooth exploration through expand/collapse
- Contextual information via hover tooltips
- Detailed insights through a sidebar panel
- Inline editing of node information
- View controls such as zoom, reset, and fit-to-view
- Exporting the visualization as a PNG

The implementation focuses on **correctness, clarity, and UX quality**, rather than over-engineering.

---

## 🛠️ Technologies Used

- **React (Vite)**  
  Component-based frontend framework with fast development and build times.

- **JavaScript (ES6+)**  
  Modern JavaScript features for clean, readable logic.

- **SVG**  
  Used for rendering nodes and edges with precise layout and scalability.

- **Tailwind CSS**  
  Utility-first CSS framework for consistent styling and dark/light theming.

- **HTML5 APIs**  
  Used for DOM manipulation and exporting the visualization.

---

## 📦 Libraries Used (and Why)

- **React Context API**  
  Centralized state management for the mindmap structure, selection, zoom, and interactions.

- **html2canvas**  
  Reliable export of the rendered mindmap to PNG, including SVG and embedded HTML content.

- **Tailwind CSS**  
  Enables rapid UI development with consistent spacing, colors, and responsive design.

---

## 🚀 Features

- Fully **data-driven** mindmap generated from JSON
- Expand and collapse nodes via intuitive click interaction
- Hover tooltips showing short node summaries
- Sidebar displaying detailed node information
- Inline editing of node title and summary (state-only)
- Zoom in / zoom out controls
- Reset / fit-to-view functionality
- Expand all / collapse all actions
- Export the current mindmap view as a PNG image
- Dark / light theme support

---

## 📊 Data-Driven Design

The mindmap is **not hardcoded**.

- All nodes and relationships are defined in `mindmap.json`
- Adding a new node in JSON automatically renders it in the UI
- Updating text in JSON updates the UI without code changes
- Changing hierarchy updates the visualization structure automatically

> **The UI is a direct reflection of the data.**

---

## 🧩 Architecture

The project follows a clean, scalable structure:

src/
├── components/ # UI rendering (MindMap, MindNode, Sidebar, Toolbar)
├── context/ # Global state and business logic
├── data/ # JSON data source
├── utils/ # Layout, fit-view, and export helpers


### Architectural Principles
- Single source of truth for application state
- Clear separation of data, logic, and presentation
- Reusable, testable utility functions
- Minimal coupling between components

---

## 📝 Notes & Assumptions

- Inline editing updates **in-memory state only** (no backend by design)
- Persistence (localStorage or API) can be added easily due to clean architecture
- Hover highlighting is intentionally minimal to avoid UI clutter
- The UI prioritizes **clarity and usability** over pixel-perfect replication

---

## 📄 Documentation & Demo

- 📘 **Detailed documentation** (architecture, data flow, screenshots):  
  `Documentation.pdf`

- 🎥 **Demo video** (showing interactions, editing, reset, and export):  
  *(Link provided in documentation)*

---

## ✅ Summary

This project demonstrates:
- Strong frontend fundamentals
- Thoughtful handling of interactive visualizations
- Clean, maintainable code structure
- Effective data-driven UI design

It is well-suited for **technical evaluation, internships, and frontend interviews**.

---