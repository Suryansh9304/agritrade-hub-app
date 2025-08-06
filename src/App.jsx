import React, { useState } from 'react';
import Login from './components/login/Login.jsx';
import Home from './components/home/Home.jsx';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
