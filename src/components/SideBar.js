import React from 'react';
import { Link } from 'react-router-dom';
import { SideBarData } from './SidebarData';

function SideBar() {
  return (
    <nav className="sidebar">
      <ul className="sidebar-list">
        {SideBarData.map((item, index) => (
          <li key={index} className="sidebar-item">
            <Link to={item.link} className="sidebar-link">
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-title">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideBar;
