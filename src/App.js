import React from "react";
import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";

import Wrapper from "./hoc/PageWrapper";

import Contact from "./pages/contact";
import OurProducts from "./pages/ourProducts";
import OurServices from "./pages/ourServices";
import Landing from "./pages/Landing";

import "./App.css";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="/landing2" element={<Landing />} />
        <Route
          path="/landing1"
          element={
            <div>
              <OurProducts />
              <OurServices />
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    // <BrowserRouter>
    <RouterComponent />
    // </BrowserRouter>
  );
};

export default App;
