import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <h1>Nav</h1>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/apidata"}>
            <li>API Data</li>
          </Link>
          <Link to={"/details"}>
            <li>Details</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
