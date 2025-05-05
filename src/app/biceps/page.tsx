// pages/exercises/biceps.js

import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Image from "next/image";

const bicepsExercises = [
  {
    title: "Barbell Curl",
    difficulty: "Novice",
    image: "/Dumbbell-Curl.gif", // Replace with your image URL
    steps: [
      "Stand tall holding a barbell with palms facing upwards.",
      "Curl the barbell towards your chest while contracting your biceps.",
      "Slowly lower the barbell back to the starting position.",
    ],
  },
  {
    title: "Dumbbell Hammer Curl",
    difficulty: "Intermediate",
    image: "/Dumbbell-Hammer-Curl.gif", // Replace with your image URL
    steps: [
      "Hold a dumbbell in each hand with your palms facing each other.",
      "Curl the dumbbells towards your shoulders while keeping your elbows still.",
      "Slowly lower the dumbbells back down to the starting position.",
    ],
  },
  {
    title: "Dumbbell Reverse Curl",
    difficulty: "Intermediate",
    image: "/Dumbbell-Reverse-Curl.gif", // Replace with your image URL
    steps: [
      "Hold a dumbbell in each hand with your palms facing down (pronated grip).",
      "Curl the dumbbells towards your shoulders while keeping your elbows still.",
      "Slowly lower the dumbbells back down to the starting position.",
    ],
  },
];

const BicepsExercises = () => {
  return (
      <>
    <div className="min-h-screen bg-white text-black">
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {bicepsExercises.map((exercise, index) => (
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

              {/* Image Section */}
              <div className="relative group">
              <Image
                    src={exercise.image}
                    alt={exercise.title}
                    className="w-full h-64 object-cover transition-transform duration-300  "
                    width={400}
                    height={300}
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

export default BicepsExercises;
