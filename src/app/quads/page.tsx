// pages/exercises/quads.js

import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Footer from "../components/Footer";
import Image from "next/image";

const quadsExercises = [
  {
    title: "Dumbbell Bulgarian Split Squat",
    difficulty: "Intermediate",
    image: "/Dumbbell-Bulgarian-Split-Squat.gif", // Corrected path
    steps: [
      "Stand a few feet away from a bench, holding a dumbbell in each hand by your sides.",
      "Place one foot on the bench behind you, keeping the other foot firmly planted on the ground.",
      "Lower your body into a lunge position by bending both knees, ensuring your front knee doesn’t extend beyond your toes.",
      "Pause at the bottom, then press through your front heel to return to the starting position.",
      "Repeat the movement for the desired number of repetitions, then switch legs."
    ],
  },
  {
    title: "Dumbbell Front Rack Squat",
    difficulty: "Intermediate",
    image: "/Dumbbell-Front-Rack-Squat.gif", // Corrected path
    steps: [
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder level with your palms facing forward.",
      "Brace your core and squat down, keeping your chest up and your knees tracking over your toes.",
      "Lower yourself as deep as your mobility allows while maintaining an upright torso.",
      "Push through your heels and return to the starting position, fully extending your hips and knees.",
      "Repeat the movement for the desired number of repetitions."
    ],
  },
  {
    title: "Dumbbell Glute Bridge",
    difficulty: "Beginner",
    image: "/Dumbbell-Glute-Bridge.gif", // Corrected path
    steps: [
      "Lie on your back with your knees bent and feet flat on the floor, holding a dumbbell over your hips.",
      "Press through your heels and lift your hips towards the ceiling, squeezing your glutes at the top.",
      "Pause for a moment at the top, then slowly lower your hips back down to the floor.",
      "Repeat the movement for the desired number of repetitions, keeping your core engaged and your back neutral."
    ],
  }
];

const QuadsExercises = () => {
  return (
    <>
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
                  {exercise.image ? (
                    <Image
                      src={exercise.image}
                      alt={exercise.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      width={600} // Set width
                      height={256} // Set height
                    />
                  ) : (
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    >
                      <source src={exercise.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
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

export default QuadsExercises;
