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
                    Sales Commissions
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

            <li className={`submenu ${openSubmenu === "products" ? "active" : ""}`}>
              <Link to="#" onClick={() => toggleSubmenu("products")}>
                <i className="fas fa-chalkboard-teacher"></i> <span>products</span>
                <span className="menu-arrow"></span>
              </Link>
              <ul style={{ display: openSubmenu === "products" ? "block" : "none" }}>
                <li>
                  <Link to="/listproduct" className={isActive("/listproduct")}>
                    List products
                  </Link>
                </li>
                <li>
                  <Link to="/addproduct" className={isActive("/addproduct")}>
                    Add product
                  </Link>
                </li>
                <li>
                  <Link to="/updateprice" className={isActive("/updateprice")}>
                    Update Price
                  </Link>
                </li>
                <li>
                  <Link to="/printlabel" className={isActive("/printlabel")}>
                    Print Label
                  </Link>
                </li>
                <li>
                  <Link to="/Variation" className={isActive("/Variation")}>
                    Variation
                  </Link>
                </li>
                <li>
                  <Link to="/Variationtitle" className={isActive("/Variationtitle")}>
                    Variation Title
                  </Link>
                </li>
                <li>
                  <Link to="/importProducts" className={isActive("/importProducts")}>
                    Import Products
                  </Link>
                </li>
                <li>
                  <Link to="/importOpeningStock" className={isActive("/importOpeningStock")}>
                    Import Opening Stock
                  </Link>
                </li>
                <li>
                  <Link to="/sellingpricegroup" className={isActive("/sellingpricegroup")}>
                    Selling Price Group
                  </Link>
                </li>
                <li>
                  <Link to="/unit" className={isActive("/unit")}>
                   Unit
                  </Link>
                </li>
                <li>
                  <Link to="/maincategory" className={isActive("/maincategory")}>
                    Main Category
                  </Link>
                </li>
                <li>
                  <Link to="/subcategory" className={isActive("/subcategory")}>
                    Sub Category
                  </Link>
                </li>
                <li>
                  <Link to="/brands" className={isActive("/brands")}>
                    Brands
                  </Link>
                </li>
                <li>
                  <Link to="/list-warranties" className={isActive("/list-warranties")}>
                    Warranty
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
