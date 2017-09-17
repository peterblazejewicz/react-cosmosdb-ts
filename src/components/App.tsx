import './App.css';
import React, { SFC } from 'react';
import Heroes from './Heroes';

const App: SFC = () => (
  <div>
    <h1>Heroes</h1>
    <div className="header-bar" />
    <Heroes />
  </div>
);

export default App;
