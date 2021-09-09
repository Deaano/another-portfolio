import React from 'react';
import Header from './components/Header'
import HeaderButton from './components/HeaderButton'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact.jsx'
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
