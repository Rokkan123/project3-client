import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="flex justify-between bg-zinc-800">
      <div className="center gap-20 p-4">
        <Link to="/">
          <h1 className="text-yellow-400 drop-shadow-[0_8.2px_5.2px_rgba(0,0,0,0.8)] text-3xl font-Insignia Regular">
            HELLDIVERS STRATAGEM REVIEW{" "}
          </h1>
        </Link>
        <Link to="/stratagems" className="links">
          STRATAGEMS
        </Link>
        <Link to="/about" className="links">
          about
        </Link>
      </div>

      {user && user.isAdmin && (
        <div className="center">
          <Link className="btn" to="/stratagems/add">
            Create a STRATAGEM
          </Link>
        </div>
      )}

      {user ? (
        <div className="center gap-4 p-4">
          <button onClick={logout} className="btn">
            logout
          </button>
        </div>
      ) : (
        <div className="center gap-4 p-4">
          <Link to="/signup" className="btn">
            sign up
          </Link>
          <Link to="/login" className="btn">
            log in
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
