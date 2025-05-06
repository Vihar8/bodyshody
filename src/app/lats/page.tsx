// pages/exercises/lats.js

import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Image from "next/image";

const latsExercises = [
  {
    title: "Barbell Rows",
    difficulty: "Intermediate",
    video: "/stock-footage-fitness-weightlifting-man-training-bent-over-row-or-barbell-row-fit-male-athlete-strength-training.mp4", // Replace with your video URL
    steps: [
      "Grip the bar with palms facing away from you and arms shoulder-width apart.",
      "Pull your chin above the bar and lower back down with control.",
    ],
  },
  {
    title: "Lat Pulldown",
    difficulty: "Novice",
    video: "/stock-footage-seoul-south-korea-caucasian-natural-bodybuilder-man-doing-cable-v-grip-lat.mp4", // Replace with your video URL
    steps: [
      "Sit at the machine and grab the bar with your hands wider than shoulder-width.",
      "Pull the bar down to your chest, squeezing your shoulder blades together.",
      "Slowly release the bar back up.",
    ],
  },
  {
    title: "Dumbbell Row",
    difficulty: "Intermediate",
    video: "/stock-footage-dumbbell-row-fit-man-in-gym-doing-strength-training-exercises-for-back-powerful-workout-healthy.mp4", // Path to your video file
    steps: [
      "Place one knee and hand on a bench for support, with the other foot flat on the floor.",
      "Grip a dumbbell with the free hand, keeping your back flat and core engaged.",
      "Pull the dumbbell up towards your torso, squeezing your shoulder blade at the top.",
      "Lower the dumbbell back down slowly and repeat.",
    ],
  },
  {
    title: "Machine Lat Pulldown",
    difficulty: "Novice",
    video: "/machinelat.mp4", // Path to your video file
    steps: [
      "Sit on the machine with your feet flat on the floor and your thighs secured under the pads.",
      "Grip the bar with your hands wider than shoulder-width and pull it down towards your chest.",
      "Focus on squeezing your shoulder blades together as you pull the bar down.",
      "Slowly release the bar back to the starting position.",
    ],
  },
];

const LatsExercises = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-black">
        <main className="py-12 px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {latsExercises.map((exercise, index) => (
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
                    src={exercise.video}
                    autoPlay
                    loop
                    muted
                    className="w-full h-64 object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>

                {/* Steps Section */}
                <div className="px-6 py-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">
                    How to Perform
                  </h3>
                  <ol className="list-none space-y-4">
                    {exercise.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-4 text-gray-800">
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

export default LatsExercises;
