// pages/exercises/quads.js

import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineCheckCircle } from "react-icons/ai";

const quadsExercises = [
  {
    title: "Barbell Squat",
    difficulty: "Advanced",
    image: "https://via.placeholder.com/600", // Replace with your image URL
    steps: [
      "Stand with your feet shoulder-width apart, with a barbell resting on your upper back.",
      "Lower your body by bending your knees and hips, keeping your back straight.",
      "Push through your heels to return to the starting position.",
    ],
  },
  {
    title: "Leg Press",
    difficulty: "Intermediate",
    image: "https://via.placeholder.com/600", // Replace with your image URL
    steps: [
      "Sit on the leg press machine with your feet placed shoulder-width apart on the platform.",
      "Push the platform upward to fully extend your legs.",
      "Slowly lower the platform by bending your knees to a 90-degree angle.",
      "Push the platform back up to the starting position.",
    ],
  },
  {
    title: "Lunges",
    difficulty: "Intermediate",
    image: "https://via.placeholder.com/600", // Replace with your image URL
    steps: [
      "Stand upright with your feet hip-width apart, holding dumbbells in both hands.",
      "Take a step forward with one leg and lower your hips until both knees are at 90-degree angles.",
      "Push back up to the starting position and repeat on the other side.",
    ],
  },
];

const QuadsExercises = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {quadsExercises.map((exercise, index) => (
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
                <img
                  src={exercise.image}
                  alt={exercise.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
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
  );
};

export default QuadsExercises;
