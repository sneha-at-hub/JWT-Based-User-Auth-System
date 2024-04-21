import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './Signup';
import Login from './Login';
import Sidebar from './sidebar';
import RegistrationForm1 from './farmersignup';
import AdminPage from './AdminPage';
import Landing from './Landing';
import FarmerLanding from './farmerlanding';
import "./App.css";
import Dashboard from './Pages/Dashboard/index';
import AdminPage1 from './Admins';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<RegistrationForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/farmer_signup" element={<RegistrationForm1 />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/create" element={<AdminPage />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/page" element={<AdminPage1 />} />
            <Route path="/farmerlanding" element={<FarmerLanding />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;