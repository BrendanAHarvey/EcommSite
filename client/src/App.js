import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Main />
    </div>
  );
}

export default App;
