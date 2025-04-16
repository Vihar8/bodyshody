// import Head from 'next/head';
// import styles from '../workout/WorkoutPlan.module.css'; // Ensure to create this CSS file
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function WorkoutPlan() {
//   return (
//     <>
//       <Head>
//         <title>Workout Plans</title>
//       </Head>
//       <Navbar />
//       <div className={styles.container}>
//         <h1 className={styles.title}>Workout Plans</h1>


//         <section>
//           <h2 className={styles.subtitle}>1. Beginners Workout Plan</h2>
//           <table className={styles.table}>
//             <thead>
//               <tr>
//                 <th>Day</th>
//                 <th>Workout</th>
//                 <th>Sets x Reps</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Monday */}
//               <tr>
//                 <td>Monday</td>
//                 <td>
//                   Upper Body Strength
//                   <ul>
//                     <li>Bench Press</li>
//                     <li>Bent Over Rows</li>
//                     <li>Overhead Press</li>
//                     <li>Bicep Curls</li>
//                     <li>Tricep Dips</li>
//                   </ul>
//                 </td>
//                 <td>
//                   <ul>
//                     <li>4 x 8-10</li>
//                     <li>3 x 10-12</li>
//                     <li>3 x 10-12</li>
//                     <li>3 x 12-15</li>
//                     <li>3 x 12-15</li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Tuesday */}
//               <tr>
//                 <td>Tuesday</td>
//                 <td>
//                   Cardio and Core
//                   <ul>
//                     <li>30 min moderate-intensity cardio</li>
//                     <li>Plank</li>
//                     <li>Russian Twists</li>
//                     <li>Leg Raises</li>
//                   </ul>
//                 </td>
//                 <td>
//                   <ul>
//                     <li>30 min</li>
//                     <li>3 x 60 sec</li>
//                     <li>3 x 20 (10 each side)</li>
//                     <li>3 x 15</li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Wednesday */}
//               <tr>
//                 <td>Wednesday</td>
//                 <td>Rest Day</td>
//                 <td>-</td>
//               </tr>
//               {/* Thursday */}
//               <tr>
//                 <td>Thursday</td>
//                 <td>
//                   Lower Body Strength
//                   <ul>
//                     <li>Squats</li>
//                     <li>Deadlifts</li>
//                     <li>Lunges</li>
//                     <li>Leg Press</li>
//                     <li>Calf Raises</li>
//                   </ul>
//                 </td>
//                 <td>
//                   <ul>
//                     <li>4 x 8-10</li>
//                     <li>3 x 10-12</li>
//                     <li>3 x 12-15 (each leg)</li>
//                     <li>3 x 12-15</li>
//                     <li>3 x 15-20</li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Friday */}
//               <tr>
//                 <td>Friday</td>
//                 <td>
//                   Cardio and HIIT
//                   <ul>
//                     <li>20 min HIIT</li>
//                     <li>20 min steady-state cardio</li>
//                     <li>Jumping Jacks</li>
//                   </ul>
//                 </td>
//                 <td>
//                   <ul>
//                     <li>20 min</li>
//                     <li>20 min</li>
//                     <li>3 x 1 min</li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Saturday */}
//               <tr>
//                 <td>Saturday</td>
//                 <td>
//                   Full Body Circuit
//                   <ul>
//                     <li>Push-ups</li>
//                     <li>Bodyweight Squats</li>
//                     <li>Pull-ups or Lat Pulldowns</li>
//                     <li>Plank</li>
//                   </ul>
//                 </td>
//                 <td>
//                   <ul>
//                     <li>3 x 15</li>
//                     <li>3 x 20</li>
//                     <li>3 x 10-12</li>
//                     <li>3 x 60 sec</li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Sunday */}
//               <tr>
//                 <td>Sunday</td>
//                 <td>Rest Day or Active Recovery</td>
//                 <td>-</td>
//               </tr>
//             </tbody>
//           </table>
//         </section>

//         <section>
//           <h2 className={styles.subtitle}>2. Intermediate Workout Plan</h2>
//           <table className={styles.table}>
//             <thead>
//               <tr>
//                 <th>Day</th>
//                 <th>Workout</th>
//                 <th>Sets x Reps</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Monday */}
//               <tr>
//                 <td>Monday</td>
//                 <td>
//                   Chest and Triceps
//                   <ul>
//                     <li>Barbell Bench Press</li>
//                     <li>Incline Dumbbell Press</li>
//                     <li>Cable Flyes</li>
//                     <li>Tricep Rope Pushdowns</li>
//                     <li>Overhead Tricep Extension</li>
//                   </ul>
//                 </td>
//                 <td>
//                   <ul>
//                     <li>3 x 10-12</li>
//                     <li>3 x 8-10</li>
//                     <li>3 x 10-12</li>
//                     <li>3 x 10-12</li>
//                     <li>3 x 30 sec</li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* tuesday */}
//               <tr>
//                 <td>Tuesday</td>
//                 <td>
//                   Back and Biceps
//                   <ul>
//                     <li>Deadlifts</li>
//                     <li>Lat Pulldowns</li>
//                     <li>Barbell Rows</li>
//                     <li>Hammer Curls</li>
//                     <li>Preacher Curls</li>
//                   </ul>
//                 </td>
//                 <td>
//                   <ul>
//                     <li>30 min</li>
//                     <li>3 x 15</li>
//                     <li>3 x 15</li>
//                     <li>4 x 10-12</li>
//                     <li>3 x 12-15</li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Wednesday */}
//               <tr>
//                 <td>Wednesday</td>
//                 <td>Active Recovery or Rest Day</td>
//                 <td></td>
//               </tr>
//               {/* thursday */}
//               <tr>
//                 <td>Thursday</td>
//                 <td>
//                   Legs and Shoulders
//                   <ul>
//                     <li>Squats</li>
//                     <li> Leg Press</li>
//                     <li>Tricep DipsLunges</li>
//                     <li>Shoulder Press</li>
//                     <li>Lateral Raises</li>
//                     <li>Face Pulls</li>
//                   </ul>
//                 </td>
//                 <td>
//                   <ul>
//                     <li>3 x 10-12</li>
//                     <li>3 x 10-12</li>
//                     <li>3 x 10-12</li>
//                     <li>20-30 min</li>
//                     <li>3 x 12-15</li>
//                     <li>3 x 12-15</li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Friday */}
//               <tr>
//                 <td>Friday</td>
//                 <td>
//                   Cardio and Core
//                   <ul>
//                     <li> 30 minutes of moderate-intensity cardio</li>
//                     <li> Plank</li>
//                     <li>Russian Twists</li>
//                     <li>Hanging Leg Raises</li>
//                   </ul>
//                 </td>
//                 <td>
//                   <ul>
//                     <li></li>
//                     <li>3 x 10-12</li>
//                     <li>3 x 10-12</li>
//                     <li>3 x 10-12 (each leg)</li>
//                     <li>20-30 min</li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Saturday */}
//               <tr>
//                 <td>Saturday</td>
//                 <td>
//                   Full Body Hypertrophy
//                   <ul>
//                     <li> 3 Dumbbell Bench Press</li>
//                     <li>  Pull-ups or Lat Pulldowns</li>
//                     <li>Leg Extensions</li>
//                     <li>seated Dumbbell Shoulder Press</li>
//                   </ul>
//                 </td>
//                 <td>
//                   <ul>
//                     <li></li>
//                     <li>3 x 10-12</li>
//                     <li>3 x 10-12</li>
//                     <li>3 x 10-12 </li>
//                     <li>3 x 10-12</li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Sunday */}
//               <tr>
//                 <td>Sunday</td>
//                 <td>Active Recovery or Rest Day</td>
//                 <td></td>
//               </tr>
//             </tbody>
//           </table>
//         </section>
//         <section>
//           <h2 className={styles.subtitle}>3. Advanced Workout Plan</h2>
//           <table className={styles.table}>
//             <thead>
//               <tr>
//                 <th>Day</th>
//                 <th>Workout</th>
//                 <th>Sets x Reps</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Monday */}
//               <tr>
//                 <td>Monday</td>
//                 <td>
//                   Heavy Compound Movements
//                   <ul>
//                     <li>Squats</li>
//                     <li>Deadlifts</li>
//                     <li>Bench Press</li>
//                     <li>Bent Over Rows</li>
//                     <li>Overhead Press</li>
//                   </ul>
//                 </td>
//                 <td>
//                   <ul>
//                     <li>5 x 5</li>
//                     <li>5 x 5</li>
//                     <li>5 x 5</li>
//                     <li>4 x 6-8</li>
//                     <li>4 x 6-8</li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Tuesday */}
//               <tr>
//                 <td>Tuesday</td>
//                 <td>
//                   Hypertrophy Focus - Upper Body
//                   <ul>
//                     <li>Incline Dumbbell Press</li>
//                     <li>Pull-ups</li>
//                     <li>Pendlay Rows</li>
//                     <li>Dumbbell Shoulder Press</li>
//                     <li>Tricep Dips</li>
//                   </ul>
//                 </td>
//                 <td>
//                   <ul>
//                     <li>4 x 8-10</li>
//                     <li>4 x 8-10</li>
//                     <li>4 x 8-10</li>
//                     <li>4 x 10-12</li>
//                     <li>3 x 12-15</li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Wednesday */}
//               <tr>
//                 <td>Wednesday</td>
//                 <td>Active Recovery or Rest Day</td>
//                 <td></td>
//               </tr>
//               {/* Thursday */}
//               <tr>
//                 <td>Thursday</td>
//                 <td>
//                   Power and Speed Training
//                   <ul>
//                     <li>Power Cleans</li>
//                     <li>Box Jumps</li>
//                     <li>Medicine Ball Throws</li>
//                     <li>Sprints (30 seconds)</li>
//                     <li>Plank Variations</li>
//                   </ul>
//                 </td>
//                 <td>
//                   <ul>
//                     <li>5 x 3</li>
//                     <li>4 x 8</li>
//                     <li>3 x 10</li>
//                     <li>8 x 30 sec (rest 60 sec)</li>
//                     <li>3 x 1 minute</li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Friday */}
//               <tr>
//                 <td>Friday</td>
//                 <td>
//                   Hypertrophy Focus - Lower Body
//                   <ul>
//                     <li>Front Squats</li>
//                     <li>Romanian Deadlifts</li>
//                     <li>Bulgarian Split Squats</li>
//                     <li>Leg Press</li>
//                     <li>Calf Raises</li>
//                   </ul>
//                 </td>
//                 <td>
//                   <ul>
//                     <li>4 x 8-10</li>
//                     <li>4 x 8-10</li>
//                     <li>3 x 12-15 (each leg)</li>
//                     <li>3 x 12-15</li>
//                     <li>4 x 15-20</li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Saturday */}
//               <tr>
//                 <td>Saturday</td>
//                 <td>Strength and Endurance</td>
//                 <td></td>
//               </tr>
//             </tbody>
//           </table>
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// }|


'use client';
import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WorkoutPlan() {
  const [activeTab, setActiveTab] = useState("beginner");
  
  const workoutPlans = {
    beginner: {
      title: "Beginner Workout Plan",
      description: "Perfect for those new to fitness. Focus on building foundational strength and proper form.",
      schedule: [ 
        // Schedule data goes here (as previously specified)
        {
          day: "Monday",
          title: "Upper Body Strength",
          exercises: [
            { name: "Bench Press", sets: "4", reps: "8-10" },
            { name: "Bent Over Rows", sets: "3", reps: "10-12" },
            { name: "Overhead Press", sets: "3", reps: "10-12" },
            { name: "Bicep Curls", sets: "3", reps: "12-15" },
            { name: "Tricep Dips", sets: "3", reps: "12-15" }
          ]
        },
        {
          day: "Tuesday",
          title: "Cardio and Core",
          exercises: [
            { name: "30 min moderate-intensity cardio", sets: "", reps: "30 min" },
            { name: "Plank", sets: "3", reps: "60 sec" },
            { name: "Russian Twists", sets: "3", reps: "20 (10 each side)" },
            { name: "Leg Raises", sets: "3", reps: "15" }
          ]
        },
        {
          day: "Wednesday",
          title: "Rest Day",
          exercises: []
        },
        {
          day: "Thursday",
          title: "Lower Body Strength",
          exercises: [
            { name: "Squats", sets: "4", reps: "8-10" },
            { name: "Deadlifts", sets: "3", reps: "10-12" },
            { name: "Lunges", sets: "3", reps: "12-15 (each leg)" },
            { name: "Leg Press", sets: "3", reps: "12-15" },
            { name: "Calf Raises", sets: "3", reps: "15-20" }
          ]
        },
        {
          day: "Friday",
          title: "Cardio and HIIT",
          exercises: [
            { name: "20 min HIIT", sets: "", reps: "20 min" },
            { name: "20 min steady-state cardio", sets: "", reps: "20 min" },
            { name: "Jumping Jacks", sets: "3", reps: "1 min" }
          ]
        },
        {
          day: "Saturday",
          title: "Full Body Circuit",
          exercises: [
            { name: "Push-ups", sets: "3", reps: "15" },
            { name: "Bodyweight Squats", sets: "3", reps: "20" },
            { name: "Pull-ups or Lat Pulldowns", sets: "3", reps: "10-12" },
            { name: "Plank", sets: "3", reps: "60 sec" }
          ]
        },
        {
          day: "Sunday",
          title: "Rest Day or Active Recovery",
          exercises: []
        }
      ]
    },
    intermediate: {
      title: "Intermediate Workout Plan",
      description: "For those who have mastered the basics and want to push their fitness further.",
      schedule: [
        // Intermediate plan exercises (as previously specified)
        {
          day: "Monday",
          title: "Chest and Triceps",
          exercises: [
            { name: "Barbell Bench Press", sets: "3", reps: "10-12" },
            { name: "Incline Dumbbell Press", sets: "3", reps: "8-10" },
            { name: "Cable Flyes", sets: "3", reps: "10-12" },
            { name: "Tricep Rope Pushdowns", sets: "3", reps: "10-12" },
            { name: "Overhead Tricep Extension", sets: "3", reps: "30 sec" }
          ]
        },
        {
          day: "Tuesday",
          title: "Back and Biceps",
          exercises: [
            { name: "Deadlifts", sets: "", reps: "30 min" },
            { name: "Lat Pulldowns", sets: "3", reps: "15" },
            { name: "Barbell Rows", sets: "3", reps: "15" },
            { name: "Hammer Curls", sets: "4", reps: "10-12" },
            { name: "Preacher Curls", sets: "3", reps: "12-15" }
          ]
        },
        {
          day: "Wednesday",
          title: "Active Recovery or Rest Day",
          exercises: []
        },
        {
          day: "Thursday",
          title: "Legs and Shoulders",
          exercises: [
            { name: "Squats", sets: "3", reps: "10-12" },
            { name: "Leg Press", sets: "3", reps: "10-12" },
            { name: "Lunges", sets: "3", reps: "10-12" },
            { name: "Shoulder Press", sets: "", reps: "20-30 min" },
            { name: "Lateral Raises", sets: "3", reps: "12-15" },
            { name: "Face Pulls", sets: "3", reps: "12-15" }
          ]
        },
        {
          day: "Friday",
          title: "Cardio and Core",
          exercises: [
            { name: "30 minutes of moderate-intensity cardio", sets: "", reps: "" },
            { name: "Plank", sets: "3", reps: "10-12" },
            { name: "Russian Twists", sets: "3", reps: "10-12" },
            { name: "Hanging Leg Raises", sets: "3", reps: "10-12 (each leg)" }
          ]
        },
        {
          day: "Saturday",
          title: "Full Body Hypertrophy",
          exercises: [
            { name: "Dumbbell Bench Press", sets: "3", reps: "10-12" },
            { name: "Pull-ups or Lat Pulldowns", sets: "3", reps: "10-12" },
            { name: "Leg Extensions", sets: "3", reps: "10-12" },
            { name: "Seated Dumbbell Shoulder Press", sets: "3", reps: "10-12" }
          ]
        },
        {
          day: "Sunday",
          title: "Active Recovery or Rest Day",
          exercises: []
        }
      ]
    },
    advanced: {
      title: "Advanced Workout Plan",
      description: "Designed for experienced fitness enthusiasts looking to maximize strength and performance.",
      schedule: [
        // Advanced plan exercises (as previously specified)
        {
          day: "Monday",
          title: "Heavy Compound Movements",
          exercises: [
            { name: "Squats", sets: "5", reps: "5" },
            { name: "Deadlifts", sets: "5", reps: "5" },
            { name: "Bench Press", sets: "5", reps: "5" },
            { name: "Bent Over Rows", sets: "4", reps: "6-8" },
            { name: "Overhead Press", sets: "4", reps: "6-8" }
          ]
        },
        {
          day: "Tuesday",
          title: "Hypertrophy Focus - Upper Body",
          exercises: [
            { name: "Incline Dumbbell Press", sets: "4", reps: "8-10" },
            { name: "Pull-ups", sets: "4", reps: "8-10" },
            { name: "Pendlay Rows", sets: "4", reps: "8-10" },
            { name: "Dumbbell Shoulder Press", sets: "4", reps: "10-12" },
            { name: "Tricep Dips", sets: "3", reps: "12-15" }
          ]
        },
        {
          day: "Wednesday",
          title: "Active Recovery or Rest Day",
          exercises: []
        },
        {
          day: "Thursday",
          title: "Power and Speed Training",
          exercises: [
            { name: "Power Cleans", sets: "5", reps: "3" },
            { name: "Box Jumps", sets: "4", reps: "8" },
            { name: "Medicine Ball Throws", sets: "3", reps: "10" },
            { name: "Sprints (30 seconds)", sets: "8", reps: "30 sec (rest 60 sec)" },
            { name: "Plank Variations", sets: "3", reps: "1 minute" }
          ]
        },
        {
          day: "Friday",
          title: "Hypertrophy Focus - Lower Body",
          exercises: [
            { name: "Front Squats", sets: "4", reps: "8-10" },
            { name: "Romanian Deadlifts", sets: "4", reps: "8-10" },
            { name: "Bulgarian Split Squats", sets: "3", reps: "12-15 (each leg)" },
            { name: "Leg Press", sets: "3", reps: "12-15" },
            { name: "Calf Raises", sets: "4", reps: "15-20" }
          ]
        },
        {
          day: "Saturday",
          title: "Strength and Endurance",
          exercises: []
        },
        {
          day: "Sunday",
          title: "Rest Day",
          exercises: []
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Fitness Journey | Workout Plans</title>
        <meta name="description" content="Customized workout plans for all fitness levels" />
      </Head>
      
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Workout Plans</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose a workout plan that matches your fitness level and goals. Each plan is designed to help you progress steadily and achieve optimal results.
          </p>
        </div>

        {/* Tabs for workout levels */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg overflow-hidden">
            {Object.keys(workoutPlans).map((level) => (
              <button
                key={level}
                onClick={() => setActiveTab(level)}
                className={`px-6 py-3 font-medium transition-all ${
                  activeTab === level
                    ? "bg-green-400 text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Fitness Level Info */}
        <div className="mb-10 bg-gray-900 rounded-lg p-6 border-l-4 border-green-400">
          <h2 className="text-2xl font-bold mb-2">{workoutPlans[activeTab].title}</h2>
          <p className="text-gray-300">{workoutPlans[activeTab].description}</p>
        </div>

        {/* Weekly Schedule */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workoutPlans[activeTab].schedule.map((day, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div className="bg-green-400 text-black px-4 py-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold">{day.day}</h3>
                    <span className="text-sm font-medium bg-black text-white px-3 py-1 rounded-full">
                      {day.exercises.length > 0 ? "Training Day" : "Rest Day"}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h4 className="text-xl font-bold mb-4">{day.title}</h4>
                  
                  {day.exercises.length > 0 ? (
                    <div className="space-y-3">
                      {day.exercises.map((exercise, i) => (
                        <div key={i} className="flex items-center justify-between border-b border-gray-800 pb-2 last:border-0">
                          <div className="flex items-center">
                            <span className="h-6 w-6 rounded-full bg-green-400 text-black flex items-center justify-center text-xs font-bold mr-3">
                              {i + 1}
                            </span>
                            <span>{exercise.name}</span>
                          </div>
                          {(exercise.sets || exercise.reps) && (
                            <span className="text-green-400 text-sm font-medium">
                              {exercise.sets && `${exercise.sets} x `}{exercise.reps}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-20 text-gray-400">
                      <p>Take time to recover and rest</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Workout Tips */}
        <div className="mt-12 bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-green-400 text-black flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </span>
            Tips for Success
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-green-400 mb-2">Prioritize Form</h3>
              <p className="text-gray-300">Always focus on proper form over lifting heavier weights. This prevents injury and ensures you're targeting the right muscles.</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-green-400 mb-2">Progressive Overload</h3>
              <p className="text-gray-300">Gradually increase weight, reps, or sets over time to continue challenging your muscles and making progress.</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-green-400 mb-2">Rest & Recovery</h3>
              <p className="text-gray-300">Give your muscles time to recover between workouts. Quality sleep and proper nutrition are essential parts of your fitness journey.</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-green-400 mb-2">Stay Consistent</h3>
              <p className="text-gray-300">Consistency is key to seeing results. Stick to your workout plan and make adjustments as needed to fit your schedule.</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-12 bg-green-400 text-black p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Workout Plan?</h2>
          <p className="mb-6 max-w-2xl mx-auto">Our fitness experts can create a personalized workout plan tailored to your specific goals, fitness level, and schedule.</p>
          <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors">
            Get a Custom Plan
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}