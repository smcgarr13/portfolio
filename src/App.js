import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <header />
        <Navigation />
        <Routes>
          <Route path='/' exact component={ AboutMe } />
          <Route path='/portfolio' component={ Portfolio } />
          <Route path='/contact' component={ Contact } />
          <Route path='/resume' component={ Resume } />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
