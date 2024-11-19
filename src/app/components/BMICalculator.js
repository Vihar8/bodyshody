'use client'
import { useState } from 'react';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <form onSubmit={calculateBMI}>
        <input
          type="number"
          placeholder="Centimeters"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Kilograms"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <div className="bmi-result">
        YOUR BMI = {bmi ? bmi : '[Not Entered]'}
      </div>
      <div className="bmi-categories">
        <h3>BMI Categories:</h3>
        <ul>
          <li>Underweight: BMI &lt; 18.5 (Gain weight)</li>
          <li>Normal weight: 18.5 ≤ BMI &lt; 24.9 (Maintain)</li>
          <li>Overweight: BMI &gt; 24.9 (Loss weight)</li>
        </ul>
      </div>
    </div>
  );
}
