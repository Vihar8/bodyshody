// pages/exercises/chest.js

import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Footer from "../components/Footer";
import Image from "next/image";

const chestExercises = [
  {
    title: "Dumbbell Bench Press",
    difficulty: "Intermediate",
    image: "/Dumbbell-Bench-Press.gif", // Replace with your image URL
    steps: [
      "Lie flat on a bench with a dumbbell in each hand, resting on your thighs.",
      "Use your thighs to help push the dumbbells up, then press the dumbbells straight above your chest with your palms facing forward.",
      "Lower the dumbbells slowly until your upper arms are parallel to the ground.",
      "Press the dumbbells back up to the starting position.",
    ],
  },
  {
    title: "Dumbbell Incline Bench Press",
    difficulty: "Intermediate",
    image: "/Dumbbell-Incline-Bench Press.gif", // Replace with your image URL
    steps: [
      "Lie on an incline bench with a dumbbell in each hand, resting on your thighs.",
      "Use your thighs to help push the dumbbells up, then press the dumbbells straight above your chest at a slight angle.",
      "Lower the dumbbells slowly until your upper arms are parallel to the ground.",
      "Press the dumbbells back up to the starting position.",
    ],
  },
  {
    title: "Dumbbell Chest Fly Side",
    difficulty: "Intermediate",
    video: "./dumbbell-chest-fly-side.mp4", // Path to your video file
    steps: [
      "Lie flat on a bench with a dumbbell in each hand, palms facing each other, arms extended above your chest.",
      "Slowly lower the dumbbells to your sides with a slight bend in your elbows, feeling a stretch in your chest.",
      "Pause for a moment, then bring the dumbbells back together in a controlled manner, focusing on contracting your chest muscles.",
      "Repeat the movement for the desired number of repetitions while maintaining good form."
    ],
  },
  {
    title: "Dumbbell Decline Bench Press Side",
    difficulty: "Intermediate",
    video: "./dumbbell-decline-bench-press-side.mp4", // Path to your video file
    steps: [
      "Set the bench to a decline position and lie back with a dumbbell in each hand, held at shoulder level.",
      "Press the dumbbells up towards the ceiling while keeping your elbows at a 45-degree angle from your body.",
      "Lower the dumbbells back down slowly to the starting position, feeling a stretch in your chest and shoulders.",
      "Engage your core throughout the movement and repeat for the desired number of repetitions."
    ],
  }
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

                {/* Image or Video Section */}
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

export default ChestExercises;
