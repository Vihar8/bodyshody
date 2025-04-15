import Head from 'next/head';
import styles from '../workout/WorkoutPlan.module.css'; // Ensure to create this CSS file
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WorkoutPlan() {
  return (
    <>
      <Head>
        <title>Workout Plans</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Workout Plans</h1>


        <section>
          <h2 className={styles.subtitle}>1. Beginners Workout Plan</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Day</th>
                <th>Workout</th>
                <th>Sets x Reps</th>
              </tr>
            </thead>
            <tbody>
              {/* Monday */}
              <tr>
                <td>Monday</td>
                <td>
                  Upper Body Strength
                  <ul>
                    <li>Bench Press</li>
                    <li>Bent Over Rows</li>
                    <li>Overhead Press</li>
                    <li>Bicep Curls</li>
                    <li>Tricep Dips</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>4 x 8-10</li>
                    <li>3 x 10-12</li>
                    <li>3 x 10-12</li>
                    <li>3 x 12-15</li>
                    <li>3 x 12-15</li>
                  </ul>
                </td>
              </tr>
              {/* Tuesday */}
              <tr>
                <td>Tuesday</td>
                <td>
                  Cardio and Core
                  <ul>
                    <li>30 min moderate-intensity cardio</li>
                    <li>Plank</li>
                    <li>Russian Twists</li>
                    <li>Leg Raises</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>30 min</li>
                    <li>3 x 60 sec</li>
                    <li>3 x 20 (10 each side)</li>
                    <li>3 x 15</li>
                  </ul>
                </td>
              </tr>
              {/* Wednesday */}
              <tr>
                <td>Wednesday</td>
                <td>Rest Day</td>
                <td>-</td>
              </tr>
              {/* Thursday */}
              <tr>
                <td>Thursday</td>
                <td>
                  Lower Body Strength
                  <ul>
                    <li>Squats</li>
                    <li>Deadlifts</li>
                    <li>Lunges</li>
                    <li>Leg Press</li>
                    <li>Calf Raises</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>4 x 8-10</li>
                    <li>3 x 10-12</li>
                    <li>3 x 12-15 (each leg)</li>
                    <li>3 x 12-15</li>
                    <li>3 x 15-20</li>
                  </ul>
                </td>
              </tr>
              {/* Friday */}
              <tr>
                <td>Friday</td>
                <td>
                  Cardio and HIIT
                  <ul>
                    <li>20 min HIIT</li>
                    <li>20 min steady-state cardio</li>
                    <li>Jumping Jacks</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>20 min</li>
                    <li>20 min</li>
                    <li>3 x 1 min</li>
                  </ul>
                </td>
              </tr>
              {/* Saturday */}
              <tr>
                <td>Saturday</td>
                <td>
                  Full Body Circuit
                  <ul>
                    <li>Push-ups</li>
                    <li>Bodyweight Squats</li>
                    <li>Pull-ups or Lat Pulldowns</li>
                    <li>Plank</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>3 x 15</li>
                    <li>3 x 20</li>
                    <li>3 x 10-12</li>
                    <li>3 x 60 sec</li>
                  </ul>
                </td>
              </tr>
              {/* Sunday */}
              <tr>
                <td>Sunday</td>
                <td>Rest Day or Active Recovery</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className={styles.subtitle}>2. Intermediate Workout Plan</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Day</th>
                <th>Workout</th>
                <th>Sets x Reps</th>
              </tr>
            </thead>
            <tbody>
              {/* Monday */}
              <tr>
                <td>Monday</td>
                <td>
                  Chest and Triceps
                  <ul>
                    <li>Barbell Bench Press</li>
                    <li>Incline Dumbbell Press</li>
                    <li>Cable Flyes</li>
                    <li>Tricep Rope Pushdowns</li>
                    <li>Overhead Tricep Extension</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>3 x 10-12</li>
                    <li>3 x 8-10</li>
                    <li>3 x 10-12</li>
                    <li>3 x 10-12</li>
                    <li>3 x 30 sec</li>
                  </ul>
                </td>
              </tr>
              {/* tuesday */}
              <tr>
                <td>Tuesday</td>
                <td>
                  Back and Biceps
                  <ul>
                    <li>Deadlifts</li>
                    <li>Lat Pulldowns</li>
                    <li>Barbell Rows</li>
                    <li>Hammer Curls</li>
                    <li>Preacher Curls</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>30 min</li>
                    <li>3 x 15</li>
                    <li>3 x 15</li>
                    <li>4 x 10-12</li>
                    <li>3 x 12-15</li>
                  </ul>
                </td>
              </tr>
              {/* Wednesday */}
              <tr>
                <td>Wednesday</td>
                <td>Active Recovery or Rest Day</td>
                <td></td>
              </tr>
              {/* thursday */}
              <tr>
                <td>Thursday</td>
                <td>
                  Legs and Shoulders
                  <ul>
                    <li>Squats</li>
                    <li> Leg Press</li>
                    <li>Tricep DipsLunges</li>
                    <li>Shoulder Press</li>
                    <li>Lateral Raises</li>
                    <li>Face Pulls</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>3 x 10-12</li>
                    <li>3 x 10-12</li>
                    <li>3 x 10-12</li>
                    <li>20-30 min</li>
                    <li>3 x 12-15</li>
                    <li>3 x 12-15</li>
                  </ul>
                </td>
              </tr>
              {/* Friday */}
              <tr>
                <td>Friday</td>
                <td>
                  Cardio and Core
                  <ul>
                    <li> 30 minutes of moderate-intensity cardio</li>
                    <li> Plank</li>
                    <li>Russian Twists</li>
                    <li>Hanging Leg Raises</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li></li>
                    <li>3 x 10-12</li>
                    <li>3 x 10-12</li>
                    <li>3 x 10-12 (each leg)</li>
                    <li>20-30 min</li>
                  </ul>
                </td>
              </tr>
              {/* Saturday */}
              <tr>
                <td>Saturday</td>
                <td>
                  Full Body Hypertrophy
                  <ul>
                    <li> 3 Dumbbell Bench Press</li>
                    <li>  Pull-ups or Lat Pulldowns</li>
                    <li>Leg Extensions</li>
                    <li>seated Dumbbell Shoulder Press</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li></li>
                    <li>3 x 10-12</li>
                    <li>3 x 10-12</li>
                    <li>3 x 10-12 </li>
                    <li>3 x 10-12</li>
                  </ul>
                </td>
              </tr>
              {/* Sunday */}
              <tr>
                <td>Sunday</td>
                <td>Active Recovery or Rest Day</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2 className={styles.subtitle}>3. Advanced Workout Plan</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Day</th>
                <th>Workout</th>
                <th>Sets x Reps</th>
              </tr>
            </thead>
            <tbody>
              {/* Monday */}
              <tr>
                <td>Monday</td>
                <td>
                  Heavy Compound Movements
                  <ul>
                    <li>Squats</li>
                    <li>Deadlifts</li>
                    <li>Bench Press</li>
                    <li>Bent Over Rows</li>
                    <li>Overhead Press</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>5 x 5</li>
                    <li>5 x 5</li>
                    <li>5 x 5</li>
                    <li>4 x 6-8</li>
                    <li>4 x 6-8</li>
                  </ul>
                </td>
              </tr>
              {/* Tuesday */}
              <tr>
                <td>Tuesday</td>
                <td>
                  Hypertrophy Focus - Upper Body
                  <ul>
                    <li>Incline Dumbbell Press</li>
                    <li>Pull-ups</li>
                    <li>Pendlay Rows</li>
                    <li>Dumbbell Shoulder Press</li>
                    <li>Tricep Dips</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>4 x 8-10</li>
                    <li>4 x 8-10</li>
                    <li>4 x 8-10</li>
                    <li>4 x 10-12</li>
                    <li>3 x 12-15</li>
                  </ul>
                </td>
              </tr>
              {/* Wednesday */}
              <tr>
                <td>Wednesday</td>
                <td>Active Recovery or Rest Day</td>
                <td></td>
              </tr>
              {/* Thursday */}
              <tr>
                <td>Thursday</td>
                <td>
                  Power and Speed Training
                  <ul>
                    <li>Power Cleans</li>
                    <li>Box Jumps</li>
                    <li>Medicine Ball Throws</li>
                    <li>Sprints (30 seconds)</li>
                    <li>Plank Variations</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>5 x 3</li>
                    <li>4 x 8</li>
                    <li>3 x 10</li>
                    <li>8 x 30 sec (rest 60 sec)</li>
                    <li>3 x 1 minute</li>
                  </ul>
                </td>
              </tr>
              {/* Friday */}
              <tr>
                <td>Friday</td>
                <td>
                  Hypertrophy Focus - Lower Body
                  <ul>
                    <li>Front Squats</li>
                    <li>Romanian Deadlifts</li>
                    <li>Bulgarian Split Squats</li>
                    <li>Leg Press</li>
                    <li>Calf Raises</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>4 x 8-10</li>
                    <li>4 x 8-10</li>
                    <li>3 x 12-15 (each leg)</li>
                    <li>3 x 12-15</li>
                    <li>4 x 15-20</li>
                  </ul>
                </td>
              </tr>
              {/* Saturday */}
              <tr>
                <td>Saturday</td>
                <td>Strength and Endurance</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <Footer />
    </>
  );
}