import { useContext, useState, useEffect } from "react";
import { MindMapContext } from "../context/MindMapContext";

export default function Sidebar() {
  const { selectedNode, updateNode } = useContext(MindMapContext);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  /* sync local state when selection changes */
  useEffect(() => {
    if (selectedNode) {
      setTitle(selectedNode.title || "");
      setSummary(selectedNode.summary || "");
      setIsEditing(false); // reset mode on node change
    }
  }, [selectedNode]);

  if (!selectedNode) {
    return (
      <aside className="w-96 p-5 bg-slate-200 dark:bg-slate-800">
        <p className="opacity-60">Select a node</p>
      </aside>
    );
  }

  const save = () => {
    updateNode(selectedNode.id, { title, summary });
    setIsEditing(false);
  };

  const cancel = () => {
    setTitle(selectedNode.title || "");
    setSummary(selectedNode.summary || "");
    setIsEditing(false);
  };

  return (
    <aside
      className="
        w-96 p-5
        bg-slate-200 dark:bg-slate-800
        text-slate-900 dark:text-slate-100
        border-l border-black/10 dark:border-white/10
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs uppercase opacity-60">
          Node Details
        </div>

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-xs px-2 py-1 rounded bg-indigo-600 text-white"
          >
            Edit
          </button>
        )}
      </div>

      {/* TITLE */}
      {!isEditing ? (
        <h2 className="text-xl font-bold mb-2">
          {selectedNode.title}
        </h2>
      ) : (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
            w-full mb-3 px-2 py-1 rounded
            border text-sm
            bg-white dark:bg-slate-900
          "
        />
      )}

      {/* SUMMARY */}
      {!isEditing ? (
        <p className="text-sm leading-relaxed whitespace-pre-wrap opacity-90">
          {selectedNode.summary || "No summary available."}
        </p>
      ) : (
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows={6}
          className="
            w-full px-2 py-1 rounded
            border text-sm
            bg-white dark:bg-slate-900
          "
        />
      )}

      {/* ACTIONS */}
      {isEditing && (
        <div className="mt-4 flex gap-2">
          <button
            onClick={save}
            className="btn bg-emerald-600"
          >
            Save
          </button>
          <button
            onClick={cancel}
            className="btn bg-slate-500"
          >
            Cancel
          </button>
        </div>
      )}
    </aside>
  );
};