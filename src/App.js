

import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import "./App.css";
import Contact from './pages/contact';
import OurProducts from './pages/ourProducts';
import OurServices from './pages/ourServices';

const App = () => {
  return (
    <div>
       <OurProducts />
        <OurServices/>
    </div>
  )
}

export default App
