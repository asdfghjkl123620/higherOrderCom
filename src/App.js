import React, { Component } from 'react';
import RecommendationsContainer from "./RecommendationsContainer";
import logo from "./carrot.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="//ingenious.agency" target="_blank" rel="noopener noreferrer">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        
        <h1 className="App-title">高階組件</h1>
      </header>
      <RecommendationsContainer/>
    </div>
  );
}

export default App;
