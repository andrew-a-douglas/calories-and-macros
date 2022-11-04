import './App.css';
import MacroMode from './MacroMode';
import React, { useState, useEffect } from 'react';
import PercentageMode from './PercentageMode';
import EC from './EC';

function App(props) {

  const [mode, setMode] = useState('');
  const handleModeChange = (event) => {
    setMode(event.target.id);
  }

  const [bodyWeight, setBodyWeight] = useState(200);
  const handleChangeBodyWeight = (event) => {
    setBodyWeight(event.target.value);
  }

  const [activity, setActivity] = useState(700);
  const handleChangeActivity = (event) => {
    setActivity(event.target.value);
  }

  useEffect(() => {
    setProteinGrams(bodyWeight*(activity/1000));
  },[activity,bodyWeight]);

  const [step, setStep] = useState(1);
  const handleNextClick = () => {
    setStep(prev => prev + 1);
  }
  const handlePrevClick = () => {
      setStep(prev => prev - 1);
  }

  const [totalCals, setTotalCals] = useState(2000);
  const [fatPercentage, setFatPercentage] = useState(30);
  const [proteinPercentage, setProteinPercentage] = useState(30);
  const [carbPercentage, setCarbPercentage] = useState(40);
  const [proteinGrams, setProteinGrams] = useState(150);
  const [carbGrams, setCarbGrams] = useState(200);
  const [fatGrams, setFatGrams] = useState(66);

  

  
  
  

  return (
    <div className="App">
      <h1>Calories and Macros</h1>
      <h2>A totally mediocre app by Andrew Douglas</h2>
      <div className='mode-select' onChange={handleModeChange}>
        <input type="radio" id="macro" name="mode-select" value={mode} />
        <label htmlFor="macro">Macro-Mode</label>
        <input type="radio" id="percentage" name="mode-select" value={mode} />
        <label htmlFor="percentage">Percentage-Mode</label>
        <input type="radio" id="ec" name="mode-select" value={mode} />
        <label htmlFor="ec">E.C.</label>
      </div>
      
      {mode==='macro' && <MacroMode totalCals={totalCals} setTotalCals={setTotalCals} carbGrams={carbGrams} proteinGrams={proteinGrams} fatGrams={fatGrams} carbPercentage={carbPercentage} fatPercentage={fatPercentage} proteinPercentage={proteinPercentage} setCarbGrams={setCarbGrams} setProteinGrams={setProteinGrams} setFatGrams={setFatGrams} setCarbPercentage={setCarbPercentage} setFatPercentage={setFatPercentage} setProteinPercentage={setProteinPercentage} />}
      {mode==='percentage' && <PercentageMode totalCals={totalCals} setTotalCals={setTotalCals} carbGrams={carbGrams} proteinGrams={proteinGrams} fatGrams={fatGrams} carbPercentage={carbPercentage} fatPercentage={fatPercentage} proteinPercentage={proteinPercentage} setCarbGrams={setCarbGrams} setProteinGrams={setProteinGrams} setFatGrams={setFatGrams} setCarbPercentage={setCarbPercentage} setFatPercentage={setFatPercentage} setProteinPercentage={setProteinPercentage} />}
      {mode==='ec' && <EC handleModeChange={handleModeChange} bodyWeight={bodyWeight} activity={activity} step={step} handleChangeBodyWeight={handleChangeBodyWeight} handleNextClick={handleNextClick} handleChangeActivity={handleChangeActivity} handlePrevClick={handlePrevClick} setProteinGrams={setProteinGrams} proteinGrams={proteinGrams} />}
      <div className='spacer'></div>
    </div>
    
  );
}

export default App;
