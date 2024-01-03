import React, { useState, useEffect } from "react";
import './assets/css/tailwind.css';
import './assets/scss/tailwind.scss';

import './assets/scss/icons.scss';

import {
  Route,
  Routes
} from "react-router-dom";


import HomePage from "./pages/index.js";
import Loader from "./component/Loader";

export default function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute('dir', 'ltr');
    handleRouteChange();
  }, []);


  // Route change method
  const handleRouteChange = () => {
    setLoading(false);
  }

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );

}
