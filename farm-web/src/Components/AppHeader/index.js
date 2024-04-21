import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import gg from '../../uss.png'; // Adjust the path to point to the root directory
import logo from '../../uss.png'; // Adjust the path to point to the root directory

function AppHeader() {
    return (
        <div className="AppHeader" style={{ backgroundColor: '#fff', padding: '10px', display: 'flex', alignItems: 'center' }}>
         
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faBell} style={{ marginRight: '20px', cursor: 'pointer', fontSize: '24px', color: '#6C757D' }} />
                <div style={{ position: 'relative', marginRight: '20px' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: '-5px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5733', border: '2px solid #F8F9FA' }}></div>
                    <img src={gg} alt="avatar" style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
                </div>
            </div>
        </div>
    );
}

export default AppHeader;
