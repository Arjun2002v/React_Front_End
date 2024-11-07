import React from "react";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="nav-container">
        <Link to="/dice" className="navs">
          Dice
        </Link>
        <Link to="/trafficlight" className="navs">
          Traffic
        </Link>
        <Link to="/todo" className="navs">
          Todo
        </Link>
        <Link to="/image" className="navs">
          Image
        </Link>
        <Link to="/digital" className="navs">
          Digital
        </Link>
        <Link to="/login" className="navs">
          Login
        </Link>
        <Link to="/modal" className="navs">
          Modal
        </Link>
        <Link to="/tabs" className="navs">
          Tabs
        </Link>
        <Link to="/pagination" className="navs">
          Pagination
        </Link>
        <Link to="/accordian" className="navs">
          Accordian
        </Link>
        <Link to="/radio" className="navs">
          Radio
        </Link>
        <Link to="/timer" className="navs">
          Timer
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default Nav;
