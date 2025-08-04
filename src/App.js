import logo from './logo.svg';
import './css/App.css';
import React from 'react';

// Importing the BuzzwordGen component
import BuzzwordGen from './components/Buzzwordgen';

function App() {
  return (
    <div className="App">
      <BuzzwordGen />
    </div>
  );
}

export default App;
