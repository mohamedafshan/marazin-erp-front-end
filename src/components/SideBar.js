import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main Menu</span>
            </li>
            <li className={`submenu ${openSubmenu === "dashboard" ? "active" : ""}`}>
              <a href="#" onClick={() => toggleSubmenu("dashboard")}>
                <i className="feather-grid"></i> <span> Dashboard</span>{" "}
                <span className="menu-arrow"></span>
              </a>
              {openSubmenu === "dashboard" && (
                <ul>
                  <li>
                    <Link to="/admin-dashboard" className="active">
                      Admin Dashboard
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className={`submenu ${openSubmenu === "students" ? "active" : ""}`}>
              <a href="#" onClick={() => toggleSubmenu("students")}>
                <i className="fas fa-graduation-cap"></i> <span> Students</span>{" "}
                <span className="menu-arrow"></span>
              </a>
              {openSubmenu === "students" && (
                <ul>
                  <li>
                    <Link to="/students">Student List</Link>
                  </li>
                  <li>
                    <Link to="/student-details">Student View</Link>
                  </li>
                  <li>
                    <Link to="/add-student">Student Add</Link>
                  </li>
                  <li>
                    <Link to="/edit-student">Student Edit</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className={`submenu ${openSubmenu === "teachers" ? "active" : ""}`}>
              <a href="#" onClick={() => toggleSubmenu("teachers")}>
                <i className="fas fa-chalkboard-teacher"></i> <span> Teachers</span>{" "}
                <span className="menu-arrow"></span>
              </a>
              {openSubmenu === "teachers" && (
                <ul>
                  <li>
                    <Link to="/teachers">Teacher List</Link>
                  </li>
                  <li>
                    <Link to="/teacher-details">Teacher View</Link>
                  </li>
                  <li>
                    <Link to="/add-teacher">Teacher Add</Link>
                  </li>
                  <li>
                    <Link to="/edit-teacher">Teacher Edit</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Add more submenus similarly */}
          </ul>
        </div>
      </div>
    </div>
  );
}
