import { Link } from "react-router-dom";
import { Undo2, Redo2, RotateCcw } from "lucide-react";

export const Navbar = ({ onUndo, onRedo, onReset, canUndo, canRedo }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Flowchart Editor
        </Link>
      </div>
      <div className="flex-none gap-2">
        <button
          onClick={onUndo}
          disabled={!canUndo}
          className="btn btn-sm btn-ghost"
          title="Undo (Ctrl+Z)"
        >
          <Undo2 size={18} />
          <span className="hidden sm:inline">Undo</span>
        </button>
        <button
          onClick={onRedo}
          disabled={!canRedo}
          className="btn btn-sm btn-ghost"
          title="Redo (Ctrl+Y)"
        >
          <Redo2 size={18} />
          <span className="hidden sm:inline">Redo</span>
        </button>
        <div className="divider divider-horizontal mx-1"></div>
        <button
          onClick={onReset}
          className="btn btn-sm btn-ghost btn-error"
          title="Reset - Clear all nodes, edges, and history"
        >
          <RotateCcw size={18} />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>
    </div>
  );
};
