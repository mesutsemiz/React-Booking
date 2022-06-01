import React from 'react';
import './style.css';
import Home from "./pages/home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}
