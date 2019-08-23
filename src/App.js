import React, { useEffect, Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Landing/Navbar';
import ZainAli from './components/ZainAli/ZainAli';
import WhatIOffer from './components/WhatIOffer/WhatIOffer';
import HappyClients from './components/Clients/HappyClients';

function App() {
  const alertUnderConstruction = () => {
    alert('Website is under construction! But you can view it');
  };
  useEffect(() => {
    alertUnderConstruction();
  }, []);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <ZainAli />
        <WhatIOffer />
        <HappyClients />
      </Fragment>
    </Router>
  );
}

export default App;
