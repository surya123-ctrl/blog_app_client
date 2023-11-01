import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">Blog-App</div>
        <div className="link">
          <Link className="link" to="?cat=art">
            <h6>Art</h6>
          </Link>
          <Link className="link" to="?cat=science">
            <h6>Science</h6>
          </Link>
          <Link className="link" to="?cat=technology">
            <h6>Technology</h6>
          </Link>
          <Link className="link" to="?cat=cinema">
            <h6>Cinema</h6>
          </Link>
          <Link className="link" to="?cat=design">
            <h6>Design</h6>
          </Link>
          <Link className="link" to="?cat=food">
            <h6>Food</h6>
          </Link>
          <span className="link main-link">Surya</span>
          <span className="link main-link">Logout</span>
          <span className="write main-link">
            <Link className="link main-link" to="/write">
              Create Post
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
