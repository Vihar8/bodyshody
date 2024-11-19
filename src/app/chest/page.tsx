// pages/exercises/chest.js

import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Footer from "../components/Footer";

const chestExercises = [
  {
    title: "Barbell Bench Press",
    difficulty: "Intermediate",
    image: "https://via.placeholder.com/600", // Replace with your image URL
    steps: [
      "Lie on a bench and grip the barbell slightly wider than shoulder-width.",
      "Lower the barbell to your chest and push it back up, keeping your feet flat on the floor.",
    ],
  },
  {
    title: "Push-Ups",
    difficulty: "Novice",
    image: "https://via.placeholder.com/600", // Replace with your image URL
    steps: [
      "Start in a plank position with your hands placed slightly wider than shoulder-width.",
      "Lower your body towards the floor, keeping your elbows at a 45-degree angle.",
      "Push back up to the starting position.",
    ],
  },
];

const ChestExercises = () => {
  return (
    <>
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {chestExercises.map((exercise, index) => (
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
    <Footer />
    </>
  );
};

export default ChestExercises;
