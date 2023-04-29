import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

// import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Navigation />
        <Routes>
          <Route path='/' element={ <AboutMe /> } />
          <Route path='/portfolio' element={ <Portfolio /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/resume' element={ <Resume /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
