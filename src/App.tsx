import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import About from './components/About';
import Login from './components/Login';
import Contact from './components/Contact'; 
import Courses from './components/Courses';
import Box from '@mui/material/Box';
// import Profile from './components/Profile';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <Router>
    <AuthProvider>
 
      <Header />
      <Box sx={{ pt: 3 }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Courses" element={<Courses />} />
        </Routes>
      </Box>
   
    </AuthProvider>
    </Router>
  );
};

export default App;
