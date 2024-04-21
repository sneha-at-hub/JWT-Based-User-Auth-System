import React from 'react';
import { useLocation } from 'react-router-dom';

const FarmerLanding = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const farmerName = params.get('name');

    return (
        <div>
            <h1>Hello, {farmerName}!</h1>
            <p>Welcome to the Farmer's Landing Page</p>
            {/* Add other content of the farmer's landing page here */}
        </div>
    );
};

export default FarmerLanding;
