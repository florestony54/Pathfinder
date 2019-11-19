import React from 'react';
import './App.css';
import Grid from "./components/Grid" 
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Grid />
      </div>
    </div>
  );
}

export default App;
