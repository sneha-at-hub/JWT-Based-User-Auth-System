import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBox, faClipboardList, faUsers, faPlus, faAngleDown, faUserCog, faUserPlus, faUserCircle, faSignOutAlt, faStoreAlt, faSeedling, faUserFriends } from '@fortawesome/free-solid-svg-icons'; // Added new icons
import './Sidebar.css'; // Importing CSS file for styling
import logo from './uss.png';

const Sidebar = ({ adminName }) => {
  const [title, setTitle] = useState('Admin Dashboard');
  const [showAdminMenu, setShowAdminMenu] = useState(false);
  const location = useLocation();

  const handleItemClick = (newTitle) => {
    setTitle(newTitle);
  };

  const toggleAdminMenu = () => {
    setShowAdminMenu(!showAdminMenu);
  };

  const handleLogout = () => {
    // Perform logout actions here (e.g., clear local storage, reset session, etc.)
    // After logout, redirect the user to the login page
    window.location.href = '/login'; // Redirect to the login page
  };

  // Check if the current path contains '/create' or '/admins'
  const isCreateOrAdmins = location.pathname.includes('/create') || location.pathname.includes('/admins');

  return (
    <div className="sidebar">
      <img src={logo} alt="logo" style={{ height: '100px', marginLeft: '20px', borderRadius: '8px' }} />
      <ul>
        <li className={location.pathname === '/dashboard' ? 'active' : ''} onClick={() => handleItemClick('Dashboard')}>
          
          
          <Link to={`/dashboard?adminName=${encodeURIComponent(adminName)}`}>
            <FontAwesomeIcon icon={faChartBar} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className={location.pathname === '/products' ? 'active' : ''} onClick={() => handleItemClick('Products')}>
          <Link to={`/products?adminName=${encodeURIComponent(adminName)}`}>
            <FontAwesomeIcon icon={faBox} />
            <span>Products</span>
          </Link>
        </li>
        <li className={location.pathname === '/orders' ? 'active' : ''} onClick={() => handleItemClick('Orders')}>
          <Link to={`/orders?adminName=${encodeURIComponent(adminName)}`}>
            <FontAwesomeIcon icon={faClipboardList} />
            <span>Orders</span>
          </Link>
        </li>
        <li className={location.pathname === '/farmer' ? 'active' : ''} onClick={() => handleItemClick('Farmers')}>
          <Link to={`/farmer?adminName=${encodeURIComponent(adminName)}`}>
            <FontAwesomeIcon icon={faSeedling} /> {/* Changed to faSeedling */}
            <span>Farmers</span>
          </Link>
        </li>
        <li className={location.pathname === '/customers' ? 'active' : ''} onClick={() => handleItemClick('Customers')}>
          <Link to={`/customers?adminName=${encodeURIComponent(adminName)}`}>
            <FontAwesomeIcon icon={faUserFriends} /> {/* Changed to faUserFriends */}
            <span>Customers</span>
          </Link>
        </li>
        <li className="admin-dropdown" onClick={toggleAdminMenu}>
          <div>
            <FontAwesomeIcon icon={faUserCog} style={{ marginRight: '14px' }} />
            <span style={{ fontSize: '14px', marginRight: '10px' }}>Admin Management</span>
            <FontAwesomeIcon icon={faAngleDown} className={showAdminMenu ? 'icon-rotate' : ''} />
          </div>
        </li>

        {showAdminMenu || isCreateOrAdmins ? ( // Show submenu if showAdminMenu is true or if the current path contains '/create' or '/admins'
          <li>
            <ul className="submenu">
              <li className={location.pathname === '/admins' ? 'active' : ''} onClick={() => handleItemClick('Admins')}>
                <Link to={`/admins?adminName=${encodeURIComponent(adminName)}`}>
                  <FontAwesomeIcon icon={faUserCircle} /> {/* Changed to faUserCircle */}
                  <span>Admins</span>
                </Link>
              </li>
              <li className={location.pathname === '/create' ? 'active' : ''} onClick={() => handleItemClick('Create')}>
                <Link to={`/create?adminName=${encodeURIComponent(adminName)}`}>
                  <FontAwesomeIcon icon={faUserPlus} />
                  <span>Create</span>
                </Link>
              </li>
            </ul>
          </li>
        ) : null}
        
<li onClick={handleLogout} className="logout-button">
  <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
  <span>Logout</span>
</li>

      </ul>
    </div>
  );
};

export default Sidebar;
