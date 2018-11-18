import React, { Component } from 'react';
import Header from '../Header';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Dashboard from '../Dashboard';
import Status from '../Status';
import SubHeader from '../SubHeader';
import DashboardAll from '../DashboardAll';

const App = () => (
  <div className='app'>
    <Header />
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/about" component={AboutView} />
        <Route exact path="/dashboard" component={DashboardView} />
        <Route exact path="/status" component={StatusView} />
        <Route exact path="/dashboardall" component={DashboardAllView} />
      </div>
    </BrowserRouter>
  </div>
);

const HomeView = () => (
  <div className='home'>
    <Home />
  </div>
);

const AboutView = () => (
  <div className='about'>
    <About />
  </div>
);

const DashboardView = () => (
  <div className='dashboard'>
    <SubHeader />
    <Dashboard />
  </div>
);

const DashboardAllView = () => (
  <div className='dashboardAll'>
    <SubHeader />
    <DashboardAll />
  </div>
);

const StatusView = () => (
  <div className='status'>
    <Status />
  </div>
);

export default App;
