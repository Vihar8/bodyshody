// pages/exercises/calves.js

import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const calvesExercises = [
  {
    title: "Standing Calf Raise",
    difficulty: "Novice",
    video: "/calfraises.mp4", // Path to your video file
    steps: [
      "Stand with your feet shoulder-width apart, with the balls of your feet on a raised surface.",
      "Raise your heels, lifting your body up.",
      "Lower your heels back down slowly.",
    ],
  },
  {
    title: "Seated Calf Raise",
    difficulty: "Intermediate",
    video: "/seatedcalf.mp4", // Path to your video file
    steps: [
      "Sit on a bench with your feet on a raised surface.",
      "Place a weight on your knees to add resistance.",
      "Raise your heels as high as possible, then lower them slowly.",
    ],
  },
];

const CalvesExercises = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-black">
        <main className="py-12 px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {calvesExercises.map((exercise, index) => (
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
                    className="w-full h-64 object-cover transition-transform duration-300  "
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

export default CalvesExercises;
