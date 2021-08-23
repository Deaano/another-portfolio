import React from 'react';
import Header from './compnents/Header'
import HeaderButton from './compnents/HeaderButton'
import About from './compnents/About'
import Projects from './compnents/Projects'
import Contact from './compnents/Contact.jsx'
import './App.css'

// My First React Project was my portfolio :)

function App() {
  return (
    <div>
      <Header />
      <HeaderButton />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
