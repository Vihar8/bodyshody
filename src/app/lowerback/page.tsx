// pages/exercises/lowerback.js

import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Image from "next/image";

const lowerBackExercises = [
  {
    title: "Deadlift",
    difficulty: "Advanced",
    video: "/profile-shot-of-fit-man-performing-seated-cable-row-on-cable-crossover-machine-sportsman-sits-on.mp4", // Path to your video file
    steps: [
      "Stand with feet shoulder-width apart and grip the barbell.",
      "Hinge at your hips to lift the barbell while keeping your back straight.",
      "Lower the barbell back down, maintaining proper posture.",
    ],
  },
  {
    title: "Hyperextensions",
    difficulty: "Novice",
    video: "/bodybuilder-performs-a-back-extension-exercise-on-a-roman-chair-a-sporty-man-trains-lower-back.mp4", // Path to your video file
    steps: [
      "Lie face down on a hyperextension bench.",
      "Bend forward at the waist and then slowly lift your upper body back up.",
      "Lower slowly and repeat.",
    ],
  },
  {
    title: "Seated Cable Row",
    difficulty: "Intermediate",
    video: "/profile-shot-of-fit-man-performing-seated-cable-row-on-cable-crossover-machine-sportsman-sits-on.mp4", // Path to your video file
    steps: [
      "Sit at the cable row machine with your feet flat on the platform.",
      "Grab the handle with both hands and keep your back straight.",
      "Pull the handle towards your torso, squeezing your shoulder blades together.",
      "Slowly release the handle back to the starting position.",
    ],
  },
  {
    title: "Pull Weight Exercise",
    difficulty: "Intermediate",
    video: "/black-man-training-back-muscle-doing-pulls-weight-exercise-in-a-gym-athlete-do-workout-in-simulator.mp4", // Path to your video file
    steps: [
      "Position yourself on the machine with your feet flat and hands gripping the handles.",
      "Pull the weight down smoothly, focusing on engaging your lower back muscles.",
      "Release the weight back up in a controlled manner.",
      "Repeat for the desired number of repetitions.",
    ],
  },
];

const LowerBackExercises = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-black">
        <main className="py-12 px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {lowerBackExercises.map((exercise, index) => (
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
                    className="w-full h-64 object-cover transition-transform duration-300  "
                  >
                    <source src={exercise.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
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

export default LowerBackExercises;
