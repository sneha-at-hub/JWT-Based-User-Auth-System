import React from 'react';
import Sidebar from './sidebar'; // Import the Sidebar component
import SignupForm2 from './AdminSignup';
import AppHeader from './Components/AppHeader';

import { useLocation } from 'react-router-dom';

const AdminPage = () => {
  const location = useLocation();
  const { adminName } = location.state || {};

  return (
    <div>
      <AppHeader />
      <div style={{ display: 'flex', marginTop: '20px' }}>
        {/* Sidebar component with admin's name */}
        <div style={{ flex: '0 0 20%', marginRight: '20px' }}>
          <Sidebar adminName={adminName} />
        </div>
        
        {/* Main content */}
        <div style={{ flex: '1' }}>

          {/* Assuming you want to display the admin's name */}
          <SignupForm2 />
          {/* You can include any additional content or components here */}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
