import './App.css';
import { useState } from 'react';

function App(props) {
  const [proteinGrams, setProteinGrams] = useState(160);
  const [carbGrams, setCarbGrams] = useState(210);
  const [fatGrams, setFatGrams] = useState(71);

  let proteinCals = proteinGrams * 4;
  let carbCals = carbGrams * 4;
  let fatCals = fatGrams * 9;
  let totalCals = proteinCals + carbCals + fatCals;
  let mealsArray = [2,3,4,5,6,7,8];

  const mapArray = (arr) => {
    arr.map(item => console.log('test'))
  }

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
      <div className='meals'>
        <p>3 Meals a Day might look like: {Math.round(proteinGrams / 3) + 'P'}/{Math.round(carbGrams / 3) + 'C'}/{Math.round(fatGrams / 3) + 'F'} = {Math.round(totalCals / 3) + 'cal'}</p>
        <p>4 Meals a Day might look like: {Math.round(proteinGrams / 4) + 'P'}/{Math.round(carbGrams / 4) + 'C'}/{Math.round(fatGrams / 4) + 'F'} = {Math.round(totalCals / 4) + 'cal'}</p>
        <p>5 Meals a Day might look like: {Math.round(proteinGrams / 5) + 'P'}/{Math.round(carbGrams / 5) + 'C'}/{Math.round(fatGrams / 5) + 'F'} = {Math.round(totalCals / 5) + 'cal'}</p>
        <p>6 Meals a Day might look like: {Math.round(proteinGrams / 6) + 'P'}/{Math.round(carbGrams / 6) + 'C'}/{Math.round(fatGrams / 6) + 'F'} = {Math.round(totalCals / 6) + 'cal'}</p>
        {mapArray(mealsArray)}
      </div>
      
    </div>
  );
}

export default App;
