import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Item from './components/Item';
import HomePage from './components/Homepage';
import Registration from './components/Registration';
import PrivateRoute from './authentication/PrivateRoute';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/Item" element={<PrivateRoute><Item /></PrivateRoute>} />
          {/* <Route path="/item/:id" element={<Item />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
