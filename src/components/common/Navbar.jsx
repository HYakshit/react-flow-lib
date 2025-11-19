import { Link } from "react-router-dom";
import {
  Undo2,
  Redo2,
  RotateCcw,
  Home,
  Save,
  Folder,
  ArrowLeft,
  ArrowRight,
  Settings,
  Sun,
  Moon,
  Edit3,
} from "lucide-react";

export const Navbar = ({ onUndo, onRedo, onReset, canUndo, canRedo }) => {
  return (
    <div className="w-full px-4 py-2 bg-white rounded-2xl shadow flex items-center justify-between">
      {/* LEFT SIDE — Logo + Icons */}
      <div className="flex items-center gap-4">
        <Link to="/" className="text-xl font-bold">
          <Home size={26} className="text-black" />
        </Link>

        <div className="flex items-center gap-3 text-gray-600">
          <Save size={20} />
          <Folder size={20} />
          <ArrowLeft size={20} />
          <ArrowRight size={20} />
        </div>
      </div>

      {/* CENTER — Folder Path */}
      <div className="hidden md:flex items-center gap-1 text-gray-700">
        <span className="font-medium">Folder Name</span>
        <span>/</span>
        <span className="font-semibold">Untitled</span>
        <span className="cursor-pointer">▼</span>
      </div>

      {/* RIGHT SIDE — Language + Icons */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 text-gray-700 cursor-pointer">
          EN <span>▼</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Undo */}
          <button
            onClick={onUndo}
            disabled={!canUndo}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-40"
            title="Undo"
          >
            <Undo2 size={18} />
          </button>

          {/* Redo */}
          <button
            onClick={onRedo}
            disabled={!canRedo}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-40"
            title="Redo"
          >
            <Redo2 size={18} />
          </button>

          {/* Reset */}
          <button
            onClick={onReset}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-red-100 text-red-600"
            title="Reset"
          >
            <RotateCcw size={18} />
          </button>

          {/* Edit mode */}
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700">
            <Edit3 size={18} />
          </button>

          {/* Light mode */}
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
            <Sun size={18} />
          </button>

          {/* Night mode */}
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
            <Moon size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
