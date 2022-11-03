import './App.css';

import { useState, useEffect } from 'react';

function PercentageMode(props) {
    const [totalCals, setTotalCals] = useState(2000);
    const [fatPercentage, setFatPercentage] = useState(30);
    const [proteinPercentage, setProteinPercentage] = useState(30);
    const [carbPercentage, setCarbPercentage] = useState(40);
    const [warning, setWarning] = useState({})

    let proteinGrams = totalCals * (proteinPercentage/100) / 4;
    let carbGrams = totalCals * (carbPercentage/100) / 4;
    let fatGrams = totalCals * (fatPercentage/100) / 9;
    let mealsArray = [2,3,4,5,6,7,8]; //must be numbers.

    const handleChangeProteinPercentage = (event) => {
        setProteinPercentage(event.target.value);
    }

    const handleChangeCarbPercentage = (event) => {
        setCarbPercentage(event.target.value);
    }

    const handleChangeFatPercentage = (event) => {
        setFatPercentage(event.target.value);
    }

    const handleChangeTotalCals = (event) => {
        setTotalCals(event.target.value);
    }

    useEffect(() => {
        let percentageTotal = Number(fatPercentage)+Number(carbPercentage)+Number(proteinPercentage);
        if(percentageTotal === 100) {
            setWarning({});
        } else {
            setWarning({ backgroundColor: 'pink'});
        }

    }, [fatPercentage,carbPercentage,proteinPercentage]);
        



    const mapArray = (arr, proteinGrams, carbGrams, fatGrams, totalCals) => {
        return arr.map(item => <p key={item}>{item} Meals a Day might look like: {Math.round(proteinGrams / item) + 'P'}/{Math.round(carbGrams / item) + 'C'}/{Math.round(fatGrams / item) + 'F'} = {Math.round(totalCals / item) + 'cal'}</p>)
    }

    return (
        <div className="MacroMode">
        <div className='macros'>
            <div className='protein'>
                <label htmlFor='protein'>Protein Percentage</label>
                <input id='protein' style={warning} type='number' value={proteinPercentage} onChange={handleChangeProteinPercentage} min="0" max="100" />
                <p>Protein Grams: {Math.round(proteinGrams)}</p>
                <p>Protein Calories: {Math.round(proteinGrams * 4)}</p>

            </div>
            <div className='carb'>
                <label htmlFor='carb'>Carb Percentage</label>
                <input id='carb' style={warning} type='number' value={carbPercentage} onChange={handleChangeCarbPercentage} min="0" max="100" />
                <p>Carb Grams: {Math.round(carbGrams)}</p>
                <p>Carb Calories: {Math.round(carbGrams * 4)}</p>

            </div>
            <div className='fat'>
                <label htmlFor='fat'>Fat Percentage</label>
                <input id='fat' style={warning} type='number' value={fatPercentage} onChange={handleChangeFatPercentage} min="0" max="100" />
                <p>Fat Grams: {Math.round(fatGrams)}</p>
                <p>Fat Calories: {Math.round(fatGrams * 9)}</p>

            </div> 
        </div>
        <div className='totals'>
            <label htmlFor='total-cals'>Total Calories: </label>
            <input id='total-cals' type='number' value={totalCals} onChange={handleChangeTotalCals} min="0" />
        </div>
        <div className='meals'>
            {mapArray(mealsArray, proteinGrams, carbGrams, fatGrams, totalCals)}
        </div>
        
        </div>
    );
    }

    export default PercentageMode;