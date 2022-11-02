import './App.css';
import MacroMode from './MacroMode';
import React, { useState } from 'react';
import PercentageMode from './PercentageMode';

function App(props) {

  const [mode, setMode] = useState('');

  const handleModeChange = (event) => {
    setMode(event.target.value);
  }

  return (
    <div className="App">
      <h1>Calories and Macros</h1>
      <div className='mode-select' onChange={handleModeChange}>
        <input type="radio" id="macro" name="mode-select" value="macro" />
        <label for="macro">Macro-Mode</label>
        <input type="radio" id="percentage" name="mode-select" value="percentage" />
        <label for="percentage">Percentage-Mode</label>
      </div>
      
      {mode==='macro' && <MacroMode />}
      {mode==='percentage' && <PercentageMode />}
      
    </div>
  );
}

export default App;
