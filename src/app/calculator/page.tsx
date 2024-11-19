'use client'
import React, { useState } from 'react';
import styles from './calculator.module.css'; // Importing CSS for the calculator
import Navbar from '../components/Navbar';

const Calculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);

    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [activity, setActivity] = useState(1.2);
    const [calories, setCalories] = useState(null);

    // BMI Calculation
    const calculateBmi = (e: React.FormEvent) => {
        e.preventDefault();
        if (height && weight) {
            const bmiValue = (weight / (height * height)).toFixed(2);
            setBmi(bmiValue);
        }
    };

    // Calorie Needs Calculation (Mifflin-St Jeor Equation)
    const calculateCalories = (e: React.FormEvente) => {
        e.preventDefault();
        if (age && weight && height) {
            let bmr;
            if (gender === 'male') {
                bmr = 10 * weight + 6.25 * height * 100 - 5 * age + 5;
            } else {
                bmr = 10 * weight + 6.25 * height * 100 - 5 * age - 161;
            }
            const dailyCalories = (bmr * activity).toFixed(0);
            setCalories(dailyCalories);
        }
    };

    return (
        <div className="container">
            {/* Navbar */}
            <Navbar />

            <div className="form-container">
                {/* BMI Calculator */}
                <form className={styles['form']} onSubmit={calculateBmi}>
                    <h1 className={styles['form-title']}>BMI Calculator</h1>

                    <div className={styles['input-container']}>
                        <label htmlFor="height">Height (m):</label>
                        <input
                            type="number"
                            id="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            step="0.01"
                            placeholder="Enter height in meters"
                            required
                            className={styles['input']}
                        />
                    </div>

                    <div className={styles['input-container']}>
                        <label htmlFor="weight">Weight (kg):</label>
                        <input
                            type="number"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="Enter weight in kilograms"
                            required
                            className={styles['input']}
                        />
                    </div>

                    <button type="submit" className={styles['submit-btn']}>Calculate</button>

                    {bmi && (
                        <div className={styles['result']}>
                            <h3>Your BMI: {bmi}</h3>
                            <p>{bmi < 18.5 ? 'Underweight' : bmi < 24.9 ? 'Normal weight' : 'Overweight'}</p>
                        </div>
                    )}
                </form>

                {/* Calorie Needs Calculator */}
                <form className={styles['form']} onSubmit={calculateCalories}>
                    <h1 className={styles['form-title']}>Calorie Needs Calculator</h1>

                    <div className={styles['input-container']}>
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Enter your age"
                            required
                            className={styles['input']}
                        />
                    </div>

                    <div className={styles['input-container']}>
                        <label htmlFor="weight">Weight (kg):</label>
                        <input
                            type="number"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="Enter your weight"
                            required
                            className={styles['input']}
                        />
                    </div>

                    <div className={styles['input-container']}>
                        <label htmlFor="height">Height (cm):</label>
                        <input
                            type="number"
                            id="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            placeholder="Enter your height"
                            required
                            className={styles['input']}
                        />
                    </div>

                    <div className={styles['input-container']}>
                        <label htmlFor="gender">Gender:</label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className={styles['input']}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className={styles['input-container']}>
                        <label htmlFor="activity">Activity Level:</label>
                        <select
                            id="activity"
                            value={activity}
                            onChange={(e) => setActivity(e.target.value)}
                            className={styles['input']}
                        >
                            <option value="1.2">Sedentary</option>
                            <option value="1.375">Lightly Active</option>
                            <option value="1.55">Moderately Active</option>
                            <option value="1.725">Very Active</option>
                            <option value="1.9">Super Active</option>
                        </select>
                    </div>

                    <button type="submit" className={styles['submit-btn']}>Calculate</button>

                    {calories && (
                        <div className={styles['result']}>
                            <h3>Your Daily Calorie Needs: {calories} kcal</h3>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Calculator;
