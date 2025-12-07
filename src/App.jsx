import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Layouts
import DashboardLayout from './layouts/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';


// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact'; 
import About from './pages/About';    
import Dashboard from './pages/Dashboard';
import Analyze from './pages/Analyze';
import Templates from './pages/Templates';
import History from './pages/History';
import Profile from './pages/Profile';
import Builder from './pages/Builder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/about" element={<About />} />     

        {/* PRIVATE ROUTES */}
        <Route path="/" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analyze" element={<Analyze />} />
          <Route path="templates-view" element={<Templates />} />
          <Route path="history" element={<History />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/builder" element={
          <ProtectedRoute>
            <Builder />
          </ProtectedRoute>
        } />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;