import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link
          to={"/create"}
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Create Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
