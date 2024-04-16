import React from 'react';
import Main from './Main';
import Oni from './Oni';
import Yokai from './Yokai';
import Kami from './Kami';
import './App.css';

function App() {
  return (
    <div>
      <div className="app-container">
        <Main />
        <Oni />
        <Yokai />
        <Kami />
      </div>
    </div>
  );
}

export default App;
