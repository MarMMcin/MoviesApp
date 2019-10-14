import React from "react";
import style from "../../Styles/Navbar.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className={style.navBar}>
        <Link className={style.navLink} to="/">
          <i className="fas fa-film"></i> FindYourMovie app
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
