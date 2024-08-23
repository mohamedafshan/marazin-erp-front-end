import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import $ from 'jquery'; // Import jQuery
import './sidebar.css'; // Import your CSS file

const Sidebar = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  useEffect(() => {
    function init() {
      $("#sidebar-menu a").on("click", function (e) {
        if ($(this).parent().hasClass("submenu")) {
          e.preventDefault();
        }

        if (!$(this).hasClass("subdrop")) {
          $("ul", $(this).parents("ul:first")).slideUp(350);
          $("a", $(this).parents("ul:first")).removeClass("subdrop");
          $(this).next("ul").slideDown(350);
          $(this).addClass("subdrop");
        } else {
          $(this).removeClass("subdrop");
          $(this).next("ul").slideUp(350);
        }
      });

      $("#sidebar-menu ul li.submenu a.active")
        .parents("li:last")
        .children("a:first")
        .addClass("active")
        .trigger("click");

      // Add sidebar overlay on body
      $("body").append('<div class="sidebar-overlay"></div>');

      // Mobile button click event
      $(document).on("click", "#mobile_btn", function () {
        $(".main-wrapper").toggleClass("slide-nav");
        $(".sidebar-overlay").toggleClass("opened");
        $("html").toggleClass("menu-opened");
        return false;
      });

      // Toggle password visibility
      if ($(".toggle-password").length > 0) {
        $(document).on("click", ".toggle-password", function () {
          $(this).toggleClass("feather-eye feather-eye-off");
          var input = $(".pass-input");
          if (input.attr("type") === "password") {
            input.attr("type", "text");
          } else {
            input.attr("type", "password");
          }
        });
      }
    }

    init();

    // Cleanup function to remove event listeners
    return () => {
      $("#sidebar-menu a").off("click");
      $(document).off("click", "#mobile_btn");
      $(document).off("click", ".toggle-password");
    };
  }, []);

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
                  <Link to="/users" className={isActive("/users")}>
                    Users
                  </Link>
                </li>
                <li>
                  <Link to="/roles" className={isActive("/roles")}>
                    Roles
                  </Link>
                </li>
                <li>
                  <Link to="/sales-commission" className={isActive("/sales-commission")}>
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
                  <Link to="/supplier" className={isActive("/supplier")}>
                    Supplier
                  </Link>
                </li>
                <li>
                  <Link to="/customer" className={isActive("/customer")}>
                    Customers
                  </Link>
                </li>
                <li>
                  <Link to="/customer-group" className={isActive("/customer-group")}>
                    Customer Groups
                  </Link>
                </li>
                <li>
                  <Link to="/import-contact" className={isActive("/import-contact")}>
                    Import Contacts
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`submenu ${openSubmenu === "products" ? "active" : ""}`}>
              <Link to="#" onClick={() => toggleSubmenu("products")}>
                <i className="fas fa-cogs"></i> <span>Products</span>
                <span className="menu-arrow"></span>
              </Link>
              <ul style={{ display: openSubmenu === "products" ? "block" : "none" }}>
                <li>
                  <Link to="/products" className={isActive("/products")}>
                    List Products
                  </Link>
                </li>
                <li>
                  <Link to="/addproduct" className={isActive("/addproduct")}>
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link to="/update-price" className={isActive("/update-price")}>
                    Update Price
                  </Link>
                </li>
                <li>
                  <Link to="/print-label" className={isActive("/print-label")}>
                    Print Label
                  </Link>
                </li>
                <li>
                  <Link to="/variation" className={isActive("/variation")}>
                    Variation
                  </Link>
                </li>
                <li>
                  <Link to="/Variationtitle" className={isActive("/Variationtitle")}>
                    Variation Title
                  </Link>
                </li>
                <li>
                  <Link to="/import-products" className={isActive("/import-products")}>
                    Import Products
                  </Link>
                </li>
                <li>
                  <Link to="/import-opening-stock" className={isActive("/import-opening-stock")}>
                    Import Opening Stock
                  </Link>
                </li>
                <li>
                  <Link to="/selling-price-group" className={isActive("/selling-price-group")}>
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
                  <Link to="/brand" className={isActive("/brand")}>
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

            <li className={`submenu ${openSubmenu === "purchase" ? "active" : ""}`}>
              <Link to="#" onClick={() => toggleSubmenu("purchase")}>
                <i className="fas fa-chalkboard-teacher"></i> <span>Purchase</span>
                <span className="menu-arrow"></span>
              </Link>
              <ul style={{ display: openSubmenu === "purchase" ? "block" : "none" }}>
                <li>
                  <Link to="/purchase" className={isActive("/purchase")}>
                    Purchase
                  </Link>
                </li>
                <li>
                  <Link to="/add-purchase" className={isActive("/add-purchase")}>
                    Add Purchase
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
};

export default Sidebar;
