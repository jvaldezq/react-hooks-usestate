import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Raptor',
    year: '2022',
    color: 'Red'
  })

  const updateCarColor = () => {
    setCar(previousState => ({...previousState, color: 'Green'}))
  }

  return (
    <div className="App">
      <h1>React Hooks | useState</h1>
      {/* string, boolean, number */}
      <div className='block_1'>
        <button onClick={() => setNumber(1)}>Assign #1</button>
        <span>{number}</span>
        <button onClick={() => setNumber(2)}>Assign #2</button>
      </div>
      {/* Objects and Arrays */}
      <div className='block_2'>
        <div>
          <h2>Car</h2>
          <ul>
            <li><strong>{car.brand}</strong></li>
            <li>{car.model}</li>
            <li>{car.year}</li>
            <li><strong>{car.color}</strong></li>
          </ul>
        </div>
        <div className='block_3'>
        <button onClick={updateCarColor}>Change color to green</button>
        <button onClick={() => setCar(previousState => ({...previousState, brand: 'BMW'}))}> Change brand to BMW</button>
      </div>
      </div>
    </div>
  );
}

export default App;
