import './App.css';
import { useState } from 'react';

function App(props) {
  const [proteinGrams, setProteinGrams] = useState(0);
  const [carbGrams, setCarbGrams] = useState(0);
  const [fatGrams, setFatGrams] = useState(0);

  let proteinCals = proteinGrams * 4;
  let carbCals = carbGrams * 4;
  let fatCals = fatGrams * 9;
  let totalCals = proteinCals + carbCals + fatCals;

  const handleChangeProteinGrams = (event) => {
    setProteinGrams(() => event.target.value);
  }

  const handleChangeCarbGrams = (event) => {
    setCarbGrams(() => event.target.value);
  }

  const handleChangeFatGrams = (event) => {
    setFatGrams(() => event.target.value);
  }


  return (
    <div className="App">
      <h1>Calories and Macros</h1>
      <div className='macros'>
        <div className='protein'>
          <input placeholder='Protein Grams' type='number' value={proteinGrams} onChange={handleChangeProteinGrams} />
          <p>Protein Calories are {proteinCals}</p>
          <p>({Math.round(proteinCals / totalCals * 100)}%)</p>
        </div>
        <div className='carb'>
          <input placeholder='Carb Grams' type='number' value={carbGrams} onChange={handleChangeCarbGrams} />
          <p>Carb Calories are {carbCals}</p>
          <p>({Math.round(carbCals / totalCals * 100)}%)</p>
        </div>
        <div className='fat'>
          <input placeholder='Fat Grams' type='number' value={fatGrams} onChange={handleChangeFatGrams} />
          <p>Fat Calories are {fatCals}</p>
          <p>({Math.round(fatCals / totalCals * 100)}%)</p>
        </div> 
      </div>
      <div className='totals'>
        <p>Total Calories are {totalCals}</p>
      </div>
      
    </div>
  );
}

export default App;
