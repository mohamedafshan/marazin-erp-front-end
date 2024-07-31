import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SideBarData } from './SidebarData';
import './sidebarstyle.css';

function SideBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <nav className="sidebar">
      <ul className="sidebar-list">
        {SideBarData.map((item, index) => (
          <li key={index} className={`sidebar-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="sidebar-link" onClick={() => handleToggle(index)}>
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-title">{item.title}</span>
              {item.subNav && <span className="menu-arrow">{activeIndex === index ? '-' : '+'}</span>}
            </div>
            {item.subNav && activeIndex === index && (
              <ul className="sidebar-sublist">
                {item.subNav.map((subItem, subIndex) => (
                  <li key={subIndex} className="sidebar-subitem">
                    <Link to={subItem.link} className="sidebar-sublink">{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideBar;
