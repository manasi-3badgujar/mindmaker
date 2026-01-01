import { MindMapProvider } from "./context/MindMapContext";
import { ThemeProvider } from "./context/ThemeContext";
import MindMap from "./components/MindMap";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";

export default function App() {
  return (
    <ThemeProvider>
      <MindMapProvider>
        <div className="flex h-full bg-slate-100 dark:bg-slate-900
                        text-slate-900 dark:text-white transition-colors">
          <div className="flex-1 relative">
            <Toolbar />
            <MindMap />
          </div>
          <Sidebar />
        </div>
      </MindMapProvider>
    </ThemeProvider>
  );
};