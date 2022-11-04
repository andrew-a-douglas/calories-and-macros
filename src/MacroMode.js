import './App.css';
import { useEffect } from 'react';

function MacroMode(props) {

  let mealsArray = [2,3,4,5,6,7,8]; //must be numbers.

  const mapArray = (arr, proteinGrams, carbGrams, fatGrams, totalCals) => {
    return arr.map(item => <p key={item}>{item} Meals a Day might look like: {Math.round(proteinGrams / item) + 'P'}/{Math.round(carbGrams / item) + 'C'}/{Math.round(fatGrams / item) + 'F'} = {Math.round(totalCals / item) + 'cal'}</p>)
  }

  const handleChangeProteinGrams = (event) => {
    props.setProteinGrams(() => event.target.value);
  }

  const handleChangeCarbGrams = (event) => {
    props.setCarbGrams(() => event.target.value);
  }
  const handleChangeFatGrams = (event) => {
    props.setFatGrams(() => event.target.value);
  }

  useEffect(() => {
    props.setFatPercentage((props.fatGrams * 9) / props.totalCals * 100);
    props.setTotalCals((props.fatGrams * 9) + (props.carbGrams * 4) + (props.proteinGrams * 4));
    props.setCarbPercentage((props.carbGrams * 4) / props.totalCals * 100);
    props.setProteinPercentage((props.proteinGrams * 4) / props.totalCals * 100);

  }, [props]);


  return (
    <div className="MacroMode">
      <div className='macros'>
        <div className='protein'>
          <label htmlFor='protein'>Protein Grams</label>
          <input id='protein' placeholder='Protein Grams' type='number' value={Math.round(props.proteinGrams)} onChange={handleChangeProteinGrams} />
          <p>Protein Calories are {Math.round(props.proteinGrams * 4)}</p>
          <p>({Math.round(props.proteinPercentage)}%)</p>
        </div>
        <div className='carb'>
          <label htmlFor='carb'>Carb Grams</label>
          <input id='carb' placeholder='Carb Grams' type='number' value={Math.round(props.carbGrams)} onChange={handleChangeCarbGrams} />
          <p>Carb Calories: {Math.round(props.carbGrams * 4)}</p>
          <p>({Math.round(props.carbPercentage)}%)</p>
        </div>
        <div className='fat'>
          <label htmlFor='fat'>Fat Grams</label>
          <input id='fat' placeholder='Fat Grams' type='number' value={Math.round(props.fatGrams)} onChange={handleChangeFatGrams} />
          <p>Fat Calories: {Math.round(props.fatGrams * 9)}</p>
          <p>({Math.round(props.fatPercentage)}%)</p>
        </div> 
      </div>
      <div className='totals'>
        <p>Total Calories: {Math.round(props.totalCals)}</p>
      </div>
      <div className='meals'>
        {mapArray(mealsArray, props.proteinGrams, props.carbGrams, props.fatGrams, props.totalCals)}
      </div>
    </div>
  );
}

export default MacroMode;