import BMICalculator from '../components/BMICalculator';
import CalorieCalculator from '../components/CalorieCalculator';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
     <Navbar /> 
    <div className="main-container">
        
      <section className="bmi-section">
        <h1>BODY MASS INDEX (BMI)</h1>
        <p>Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Calculate your BMI to determine your goal.</p>
        <BMICalculator />
      </section>
      <section className="calorie-section">
        <h1>CALORIC NEEDS</h1>
        <p>The Calorie Calculator can be used to estimate the number of calories a person needs to consume each day. This calculator can also provide some simple guidelines for gaining or losing weight.</p>
        <CalorieCalculator />
      </section>
    </div>
    </>
  );
}
