import './App.css';
import { useState } from 'react';

function MacroMode(props) {
  const [proteinGrams, setProteinGrams] = useState(160);
  const [carbGrams, setCarbGrams] = useState(210);
  const [fatGrams, setFatGrams] = useState(71);

  let proteinCals = proteinGrams * 4;
  let carbCals = carbGrams * 4;
  let fatCals = fatGrams * 9;
  let totalCals = proteinCals + carbCals + fatCals;
  let mealsArray = [2,3,4,5,6,7,8]; //must be numbers.

  const mapArray = (arr, proteinGrams, carbGrams, fatGrams, totalCals) => {
    return arr.map(item => <p key={item}>{item} Meals a Day might look like: {Math.round(proteinGrams / item) + 'P'}/{Math.round(carbGrams / item) + 'C'}/{Math.round(fatGrams / item) + 'F'} = {Math.round(totalCals / item) + 'cal'}</p>)
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
    <div className="MacroMode">
      <div className='macros'>
        <div className='protein'>
          <label htmlFor='protein'>Protein Grams</label>
          <input id='protein' placeholder='Protein Grams' type='number' value={proteinGrams} onChange={handleChangeProteinGrams} />
          <p>Protein Calories are {proteinCals}</p>
          <p>({Math.round(proteinCals / totalCals * 100)}%)</p>
        </div>
        <div className='carb'>
          <label htmlFor='carb'>Carb Grams</label>
          <input id='carb' placeholder='Carb Grams' type='number' value={carbGrams} onChange={handleChangeCarbGrams} />
          <p>Carb Calories: {carbCals}</p>
          <p>({Math.round(carbCals / totalCals * 100)}%)</p>
        </div>
        <div className='fat'>
          <label htmlFor='fat'>Fat Grams</label>
          <input id='fat' placeholder='Fat Grams' type='number' value={fatGrams} onChange={handleChangeFatGrams} />
          <p>Fat Calories: {fatCals}</p>
          <p>({Math.round(fatCals / totalCals * 100)}%)</p>
        </div> 
      </div>
      <div className='totals'>
        <p>Total Calories: {totalCals}</p>
      </div>
      <div className='meals'>
        {mapArray(mealsArray, proteinGrams, carbGrams, fatGrams, totalCals)}
      </div>
      
    </div>
  );
}

export default MacroMode;