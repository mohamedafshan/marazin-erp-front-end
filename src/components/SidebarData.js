import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap, faBuilding, faClipboard } from '@fortawesome/free-solid-svg-icons';

export const SideBarData = [
  {
    title: "Dashboard",
    icon: <FontAwesomeIcon icon={faHome} />,
    subNav: [
      { title: "Admin Dashboard", link: "/admin-dashboard" },
      { title: "Teacher Dashboard", link: "/teacher-dashboard" },
      { title: "Student Dashboard", link: "/student-dashboard" }
    ]
  },
  {
    title: "User Management",
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    subNav: [
      { title: "Users", link: "/users" },
      { title: "Roles", link: "/roles" },
      { title: "Sales Commissions", link: "/sales-commission" }
    ]
  },
  {
    title: "Products",
    icon: <FontAwesomeIcon icon={faBuilding} />,
    subNav: [
      { title: "List Products", link: "/list-products" },
      { title: "Add Product", link: "/add-product" },
      // Add more product-related routes here
    ]
  },
  {
    title: "Purchases",
    icon: <FontAwesomeIcon icon={faClipboard} />,
    subNav: [
      { title: "List Purchases", link: "/list-purchases" },
      { title: "Add Purchases", link: "/add-purchase" },
      // Add more purchase-related routes here
    ]
  }
  // Add more sections as needed
];
