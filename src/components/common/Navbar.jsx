import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Flowchart Editor
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/json-view">Json View</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
