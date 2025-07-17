import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Login />} />
      
    </Routes>
  </BrowserRouter>
)
