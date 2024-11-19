'use client'
import { useState } from 'react';

export default function CalorieCalculator() {
  const [gender, setGender] = useState('Male');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('Basal Metabolic Rate (BMR)');
  const [calories, setCalories] = useState(null);

  const calculateCalories = (e) => {
    e.preventDefault();
    if (age && height && weight) {
      const bmr = gender === 'Male'
        ? 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)
        : 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
      setCalories(bmr.toFixed(2));
    }
  };

  return (
    <div className="calorie-calculator">
      <h2>Calorie Needing Calculator</h2>
      <form onSubmit={calculateCalories}>
        <div className="gender-selection">
          <label>
            <input
              type="radio"
              value="Male"
              checked={gender === 'Male'}
              onChange={() => setGender('Male')}
            /> Male
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              checked={gender === 'Female'}
              onChange={() => setGender('Female')}
            /> Female
          </label>
        </div>
        <input
          type="number"
          placeholder="Age (15-80 years)"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="input-field"
        />
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
        <select
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="select-field"
        >
          <option>Basal Metabolic Rate (BMR)</option>
          {/* Add other activity levels here */}
        </select>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <div className="calorie-result">
        YOUR CALORIE NEEDING = {calories ? calories : '[Not Entered]'}
      </div>
      <div className="guidelines">
        <h3>Guidelines:</h3>
        <ul>
          <li>To Lose Weight: Take 250-500 minus your calorie needing.</li>
          <li>To Maintain: Take 0-200 minus or 0-200 plus your calorie needing.</li>
          <li>To Gain Weight: Take 250-500 plus your calorie needing.</li>
        </ul>
      </div>
    </div>
  );
}
