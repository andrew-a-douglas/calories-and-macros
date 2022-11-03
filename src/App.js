import './App.css';
import MacroMode from './MacroMode';
import React, { useState } from 'react';
import PercentageMode from './PercentageMode';
import EC from './EC';

function App(props) {

  const [mode, setMode] = useState('');

  const handleModeChange = (event) => {
    setMode(event.target.value);
  }

  return (
    <div className="App">
      <h1>Calories and Macros</h1>
      <h2>A totally mediocre app by Andrew Douglas</h2>
      <div className='mode-select' onChange={handleModeChange}>
        <input type="radio" id="macro" name="mode-select" value="macro" />
        <label htmlFor="macro">Macro-Mode</label>
        <input type="radio" id="percentage" name="mode-select" value="percentage" />
        <label htmlFor="percentage">Percentage-Mode</label>
        <input type="radio" id="ec" name="mode-select" value="ec" />
        <label htmlFor="ec">E.C.</label>
      </div>
      
      {mode==='macro' && <MacroMode />}
      {mode==='percentage' && <PercentageMode />}
      {mode==='ec' && <EC />}
      <div className='spacer'></div>
    </div>
    
  );
}

export default App;
