// pages/exercises/trapsmiddle.js

import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Image from "next/image";

const trapsMiddleExercises = [
  {
    title: "Dumbbell Rear Delt Row Side",
    difficulty: "Intermediate",
    video: "./Dumbbells-dumbbell-rear-delt-row-side.mp4", // Path to your video file
    steps: [
      "Sit on a bench with a dumbbell in each hand, palms facing each other, and slightly bend your knees.",
      "Lean forward at the waist, keeping your back straight, and hold the dumbbells with your arms extended toward the floor.",
      "Pull the dumbbells toward your torso, focusing on squeezing your shoulder blades together. Keep your elbows wide.",
      "Slowly lower the dumbbells back to the starting position, maintaining control and proper form.",
      "Repeat the movement for the desired number of repetitions, focusing on engaging the rear delts."
    ],
  },
  {
    title: "Dumbbell Row Bilateral Side",
    difficulty: "Intermediate",
    video: "./Dumbbells-dumbbell-row-bilateral-side.mp4", // Path to your video file
    steps: [
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with your palms facing each other.",
      "Hinge at the hips, keeping a neutral spine, and slightly bend your knees while extending your arms straight toward the ground.",
      "Pull both dumbbells toward your torso, focusing on using your back muscles to perform the movement. Keep your elbows close to your body.",
      "Slowly return the dumbbells to the starting position, maintaining control throughout the movement.",
      "Repeat for the desired number of repetitions, ensuring that your back remains straight and core engaged."
    ],
  },
  {
    title: "Dumbbell Silverback Shrug Side",
    difficulty: "Advanced",
    video: "./Dumbbells-dumbbell-silverback-shrug-side.mp4", // Path to your video file
    steps: [
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with your arms fully extended at your sides.",
      "Engage your core and keep your chest up as you shrug both shoulders upward, aiming to touch your ears with your shoulders.",
      "Pause briefly at the top of the movement, squeezing your traps, then lower the dumbbells back to the starting position.",
      "Repeat the movement for the desired number of repetitions, focusing on control and engaging the traps throughout."
    ],
  },
  
];

const TrapsMiddleExercises = () => {
  return (
    <>
    <div className="min-h-screen bg-white text-black">
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {trapsMiddleExercises.map((exercise, index) => (
            <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6 py-4 flex justify-between items-center">
                <h2 className="text-3xl font-bold">{exercise.title}</h2>
                <div className="px-3 py-1 text-sm rounded-full bg-gray-500 text-white shadow-md">
                  {exercise.difficulty}
                </div>
              </div>

             
                {/* Video Section */}
                <div className="relative group">
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-auto sm:max-h-48 md:max-h-64 lg:max-h-80 object-cover transition-transform duration-300   rounded-lg"
                  >
                    <source src={exercise.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg"></div>
                </div>


              {/* Steps Section */}
              <div className="px-6 py-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  How to Perform
                </h3>
                <ol className="list-none space-y-4">
                  {exercise.steps.map((step, stepIndex) => (
                    <li
                    key={stepIndex}
                    className="flex items-start gap-4 text-gray-800"
                    >
                      <AiOutlineCheckCircle className="text-green-500 text-2xl" />
                      <p className="leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
          </>
  );
};

export default TrapsMiddleExercises;
