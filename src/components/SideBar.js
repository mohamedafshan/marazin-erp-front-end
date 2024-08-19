import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
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
              <Link to="#" onClick={() => toggleSubmenu("dashboard")}>
                <i className="feather-grid"></i> <span>Dashboard</span>
                <span className="menu-arrow"></span>
              </Link>
              <ul style={{ display: openSubmenu === "dashboard" ? "block" : "none" }}>
                <li>
                  <Link to="/admin-dashboard" className={isActive("/admin-dashboard")}>
                    Admin Dashboard
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`submenu ${openSubmenu === "usermanagement" ? "active" : ""}`}>
              <Link to="#" onClick={() => toggleSubmenu("usermanagement")}>
                <i className="fas fa-graduation-cap"></i> <span>User Management</span>
                <span className="menu-arrow"></span> 
              </Link>
              <ul style={{ display: openSubmenu === "usermanagement" ? "block" : "none" }}>
                <li>
                  <Link to="/students" className={isActive("/students")}>
                    Users
                  </Link>
                </li>
                <li>
                  <Link to="/student-details" className={isActive("/student-details")}>
                    Roles
                  </Link>
                </li>
                <li>
                  <Link to="/add-student" className={isActive("/add-student")}>
                    Sales Commissions Agents
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`submenu ${openSubmenu === "contacts" ? "active" : ""}`}>
              <Link to="#" onClick={() => toggleSubmenu("contacts")}>
                <i className="fas fa-chalkboard-teacher"></i> <span>Contacts</span>
                <span className="menu-arrow"></span>
              </Link>
              <ul style={{ display: openSubmenu === "contacts" ? "block" : "none" }}>
                <li>
                  <Link to="/teachers" className={isActive("/teachers")}>
                    Supplier
                  </Link>
                </li>
                <li>
                  <Link to="/teacher-details" className={isActive("/teacher-details")}>
                    Customers
                  </Link>
                </li>
                <li>
                  <Link to="/add-teacher" className={isActive("/add-teacher")}>
                    Customer Groups
                  </Link>
                </li>
                <li>
                  <Link to="/edit-teacher" className={isActive("/edit-teacher")}>
                    Import Contacts
                  </Link>
                </li>
              </ul>
            </li>
            {/* Add more submenus similarly */}
          </ul>
        </div>
      </div>
    </div>
  );
}
