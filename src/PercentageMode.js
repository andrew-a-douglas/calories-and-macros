import './App.css';

import { useState, useEffect } from 'react';

function PercentageMode(props) {
    
    const [warning, setWarning] = useState({})
    useEffect(() => {
        let percentageTotal = Number(props.fatPercentage)+Number(props.carbPercentage)+Number(props.proteinPercentage);
        if(percentageTotal === 100) {
            setWarning({});
        } else {
            setWarning({ backgroundColor: 'pink'});
        }

    }, [props.fatPercentage,props.carbPercentage,props.proteinPercentage]);

    let mealsArray = [2,3,4,5,6,7,8]; //must be numbers.

    const handleChangeProteinPercentage = (event) => {
        props.setProteinPercentage(event.target.value);
    }
    const handleChangeCarbPercentage = (event) => {
        props.setCarbPercentage(event.target.value);
    }
    const handleChangeFatPercentage = (event) => {
        props.setFatPercentage(event.target.value);
    }
    const handleChangeTotalCals = (event) => {
        props.setTotalCals(event.target.value);
    }
    useEffect(() => {
        props.setFatGrams((props.fatPercentage/100) * props.totalCals / 9);
        //props.setTotalCals((props.fatGrams * 9) / (props.fatPercentage/100));
        props.setCarbGrams((props.carbPercentage/100) * props.totalCals / 4);
        props.setProteinGrams((props.proteinPercentage/100) * props.totalCals / 4);
    
      }, [props]);

    useEffect(() => {
        props.setTotalCals((props.fatGrams * 9) + (props.carbGrams * 4) + (props.proteinGrams * 4));
    }, [props.fatPercentage,props.carbPercentage,props.proteinPercentage]);

        



    const mapArray = (arr, proteinGrams, carbGrams, fatGrams, totalCals) => {
        return arr.map(item => <p key={item}>{item} Meals a Day might look like: {Math.round(proteinGrams / item) + 'P'}/{Math.round(carbGrams / item) + 'C'}/{Math.round(fatGrams / item) + 'F'} = {Math.round(totalCals / item) + 'cal'}</p>)
    }

    return (
        <div className="MacroMode">
        <div className='macros'>
            <div className='protein'>
                <label htmlFor='protein'>Protein Percentage</label>
                <input id='protein' style={warning} type='number' value={props.proteinPercentage} onChange={handleChangeProteinPercentage} min="0" max="100" />
                <p>Protein Grams: {Math.round(props.proteinGrams)}</p>
                <p>Protein Calories: {Math.round(props.proteinGrams * 4)}</p>

            </div>
            <div className='carb'>
                <label htmlFor='carb'>Carb Percentage</label>
                <input id='carb' style={warning} type='number' value={props.carbPercentage} onChange={handleChangeCarbPercentage} min="0" max="100" />
                <p>Carb Grams: {Math.round(props.carbGrams)}</p>
                <p>Carb Calories: {Math.round(props.carbGrams * 4)}</p>

            </div>
            <div className='fat'>
                <label htmlFor='fat'>Fat Percentage</label>
                <input id='fat' style={warning} type='number' value={props.fatPercentage} onChange={handleChangeFatPercentage} min="0" max="100" />
                <p>Fat Grams: {Math.round(props.fatGrams)}</p>
                <p>Fat Calories: {Math.round(props.fatGrams * 9)}</p>

            </div> 
        </div>
        <div className='totals'>
            <label htmlFor='total-cals'>Total Calories: </label>
            <input id='total-cals' type='number' value={props.totalCals} onChange={handleChangeTotalCals} min="0" />
        </div>
        <div className='meals'>
            {mapArray(mealsArray, props.proteinGrams, props.carbGrams, props.fatGrams, props.totalCals)}
        </div>
        
        </div>
    );
    }

    export default PercentageMode;