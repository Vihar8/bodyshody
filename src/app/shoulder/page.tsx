// pages/exercises/shoulder.js

import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Footer from "../components/Footer";
import Image from "next/image";

const shoulderExercises = [
  {
    title: "Dumbbell Front Raise",
    difficulty: "Intermediate",
    image: "/Dumbbell-Front-Raise.gif", // Path to your GIF file
    steps: [
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.",
      "With a slight bend in your elbows, raise the dumbbells in front of you to shoulder height.",
      "Lower the dumbbells back to the starting position, maintaining control throughout.",
      "Repeat for the desired number of repetitions."
    ],
  },
  {
    title: "Dumbbell Lateral Raise",
    difficulty: "Intermediate",
    image: "/Dumbbell-Lateral-Raise.gif", // Path to your GIF file
    steps: [
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.",
      "With a slight bend in your elbows, raise the dumbbells to the side until they reach shoulder height.",
      "Lower the dumbbells back to the starting position, maintaining control.",
      "Repeat for the desired number of repetitions."
    ],
  },
  {
    title: "Dumbbell Swing",
    difficulty: "Advanced",
    image: "/Dumbbell-Swing.gif", // Path to your GIF file
    steps: [
      "Stand with your feet slightly wider than shoulder-width apart, holding a dumbbell with both hands in front of your body.",
      "Hinge at the hips and swing the dumbbell back between your legs, then explosively thrust your hips forward to swing the dumbbell up to chest height.",
      "Control the dumbbell as it swings back down, maintaining a fluid motion.",
      "Repeat the movement for the desired number of repetitions."
    ],
  }
];

const ShoulderExercises = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        <main className="py-12 px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {shoulderExercises.map((exercise, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6 py-4 flex justify-between items-center">
                  <h2 className="text-2xl sm:text-3xl font-bold">{exercise.title}</h2>
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
                    width={600} // Set width
                    height={256} // Set height
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

export default ShoulderExercises;
