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
        <Link to="/sidebar" className="navs">
          Sidebar
        </Link>
        <Link to="/grid" className="navs">
          Grid
        </Link>
        <Link to="/tic" className="navs">
          Tic
        </Link>
        <Link to="/click" className="navs">
          Click
        </Link>
        <Link to="/memory" className="navs">
          Memory
        </Link>
        <Link to="/Check" className="navs">
          CheckBox
        </Link>
        <Link to="/transfer" className="navs">
          Transfer List
        </Link>
        <Link to="/typeclick" className="navs">
          Type&Click
        </Link>
        <Link to="/tic" className="navs">
          Tic-Tac-Toe
        </Link>
        <Link to="/useSwr" className="navs">
          UseSwr
        </Link>
        <Link to="/star" className="navs">
          Star
        </Link>
        <Link to="/form" className="navs">
          Form
        </Link>
        <Link to="/scroll" className="navs">
          scroll
        </Link>

        <Outlet />
      </div>
    </div>
  );
};

export default Nav;
