import React from 'react';
import '../styles/Sidebar.css'; // Adjust the path if necessary

function SideNavBar({ isOpen, closeSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={closeSidebar}>&times;</button>
      <div className="sidebar-profile">
        <img src="/path-to-profile.jpg" alt="Profile" className="sidebar-profile-image" />
        <h3>Joy Mitchell</h3>
      </div>
      <div className="sidebar-menu">
        <a href="#">Templates</a>
        <a href="#">Categories</a>
        <a href="#">Analytics</a>
        <a href="#">Settings</a>
        {/* Add more links as needed */}
      </div>
      <div className="sidebar-footer">
        <p>Good Consistency</p>
      </div>
    </div>
  );
}

export default SideNavBar;
