'use client';
import { useState } from 'react';
import Head from 'next/head';


export default function WorkoutPlan() {
  // Define a type for the keys of workout plans
  type WorkoutPlanKeys = keyof typeof workoutPlans;

  const [activeTab, setActiveTab] = useState<WorkoutPlanKeys>("beginner"); // Specify the type for activeTab

  const workoutPlans = {
    beginner: {
      title: "Beginner Workout Plan",
      description: "Perfect for those new to fitness. Focus on building foundational strength and proper form.",
      schedule: [
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
    <div className="min-h-screen text-white">
      <Head>
        <title>Fitness Journey | Workout Plans</title>
        <meta name="description" content="Customized workout plans for all fitness levels" />
      </Head>
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black">Workout Plans</h1>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Choose a workout plan that matches your fitness level and goals. Each plan is designed to help you progress steadily and achieve optimal results.
          </p>
        </div>

        {/* Tabs for workout levels */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg overflow-hidden">
            {Object.keys(workoutPlans).map((level) => (
              <button
                key={level}
                onClick={() => setActiveTab(level as WorkoutPlanKeys)}
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
      </main>    
    </div>
  );
}