import React, { useState } from 'react'
import {
  BsPersonCircle,
  BsJustify,
} from "react-icons/bs";
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar.js';
// import { useDispatch } from 'react-redux';

const Navbar = () => {
//   const dispatch=useDispatch()
//   const navigate=useNavigate()
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };

  return (
    <>
      <header className="header">
        <div className="menu-icon-header">
          <BsJustify className="icons" onClick={OpenSidebar} />
        </div>
        <div className="header-left">
          <Link to="/admin">
            <h3>Dashboard</h3>
          </Link>
        </div>
        <div className="header-right">
          {/* {!isAuth ? (
            <BsPersonCircle className="icons" />
          ) : (
            <div className="icon-btn-logout-div" onClick={handleLogout}>
              {" "}
              <BsPersonCircle className="icons" />
              <button className="btn-logout">{name}</button>
            </div>
          )} */}
             <BsPersonCircle className="icons" />
        </div>
      </header>
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
    </>
  );
};

export default Navbar