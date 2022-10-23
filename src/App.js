import React from "react";
import { Route, Routes } from "react-router-dom";

import Wrapper from "./hoc/PageWrapper";

// import Contact from "./pages/contact";
import OurProducts from "./pages/ourProducts";
import OurServices from "./pages/ourServices";
import Landing from "./pages/Landing";
import Products from "./pages/Products";

import "./App.css";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="/" element={<Landing />} />
        <Route
          path="/landing1"
          element={
            <div>
              <OurProducts />
              <OurServices />
            </div>
          }
        />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  return <RouterComponent />;
};

export default App;
