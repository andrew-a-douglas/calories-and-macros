import './App.css';

import { useState, useEffect } from 'react';

function EC(props) {
    const [bodyWeight, setBodyWeight] = useState(200);
    const [activity, setActivity] = useState(700);
    const [step, setStep] = useState(1);

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

    const displayJsx = (stepNum) => {
        if(stepNum === 1) {
            return(
                <div className='ec-step-1'>
                    <h2>Step 1: Enter Your Body Weight</h2>
                    <p>Enter your current body-weight, unless you are 20 pounds or more away from your target weight. In that case, use your target weight as the protein amount will likely feel insurmountable. </p>
                    <label htmlFor='bodyWeight'>Body Weight</label>
                    <input id='bodyWeight' type='number' value={bodyWeight} onChange={handleChangeBodyWeight} min="0" max="1000" />
                    <button onClick={handleNextClick}>Next</button>
                </div>
            );
        }
        if(stepNum === 2) {
            return(
                <div className='ec-step-2'>
                    <h2>Step 2: Activity Level</h2>
                    <p>If you have a significant amount of weight to lose, enter your goal weight.</p>
                    
                    <div className="activity-slider">
                        <label htmlFor='activity'>Small, little muscle, sedentary</label>
                        <input id='activity' type='range' value={activity} onChange={handleChangeActivity} min="700" max="1000" />
                        <label htmlFor='activity'>Large, muscled, very active</label>
                    </div>
                    
                    <button onClick={handlePrevClick}>Prev</button>
                    <button onClick={handleNextClick}>Next</button>
                </div>
            );
        }
        if(stepNum === 3) {
            return(
                <div className='ec-step-3'>
                    <h2>Step 3: Eat This Amount of Protein...</h2>
                    <p>{Math.round(bodyWeight * (activity/1000))} Grams</p>
                    <p>Input this into Macro-Mode and/or Percentage-Mode to determine your daily macros and caloric goals</p>
                    
                    <button onClick={handlePrevClick}>Prev</button>
                </div>
            );
        }
        
    }

    return (
        <div className="EC">

            {displayJsx(step)}
        
        </div>
    );
    }

    export default EC;