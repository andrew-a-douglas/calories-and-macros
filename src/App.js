import './App.css';
import { useState } from 'react';

function App(props) {
  const {calories, setCalories} = useState(null);


  return (
    <div className="App">
      <h1>Calories and Macros</h1>
      <input placeholder='Calories' type='text' value={calories} />
    </div>
  );
}

export default App;
