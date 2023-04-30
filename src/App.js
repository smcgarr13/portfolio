import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
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
        <Routes>
          <Route path='/aboutMe' element={ <AboutMe /> } />
          <Route path='/portfolio' element={ <Portfolio /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/resume' element={ <Resume /> } />
          <Route path='*' element={ <AboutMe /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
