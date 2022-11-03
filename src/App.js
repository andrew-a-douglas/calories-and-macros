import './App.css';
import MacroMode from './MacroMode';
import React, { useState } from 'react';
import PercentageMode from './PercentageMode';
import EC from './EC';

function App(props) {

  const [mode, setMode] = useState('');
  const [bodyWeight, setBodyWeight] = useState(200);
  const [activity, setActivity] = useState(700);
  const [step, setStep] = useState(1);

  const handleModeChange = (event) => {
    setMode(event.target.value);
  }

  const handleChangeBodyWeight = (event) => {
      setBodyWeight(event.target.value);
  }
  const handleChangeActivity = (event) => {
      setActivity(event.target.value);
  }

  const handleNextClick = () => {
      setStep(prev => prev + 1);
  }
  const handlePrevClick = () => {
      setStep(prev => prev - 1);
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
      {mode==='ec' && <EC bodyWeight={bodyWeight} activity={activity} step={step} handleChangeBodyWeight={handleChangeBodyWeight} handleNextClick={handleNextClick} handleChangeActivity={handleChangeActivity} handlePrevClick={handlePrevClick}  />}
      <div className='spacer'></div>
    </div>
    
  );
}

export default App;
