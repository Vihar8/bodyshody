// pages/exercises/forearm.js

import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Footer from "../components/Footer";
import Image from "next/image";

const wristExercises = [
  {
    title: "Dumbbell Wrist Curl",
    difficulty: "Intermediate",
    image: "/Dumbbell-Wrist-Curl.gif", // Replace with your image URL
    steps: [
      "Sit on a bench with a dumbbell in each hand, resting your forearms on your thighs with your wrists hanging off the edge.",
      "Grip the dumbbells with your palms facing up and curl your wrists upwards.",
      "Slowly lower the dumbbells back to the starting position.",
      "Repeat for the desired number of repetitions, focusing on controlling the movement."
    ],
  },
  {
    title: "Dumbbell Wrist Extension",
    difficulty: "Intermediate",
    image: "/Dumbbell-Wrist-Extension.gif", // Replace with your image URL
    steps: [
      "Sit on a bench with a dumbbell in each hand, resting your forearms on your thighs with your wrists hanging off the edge.",
      "Grip the dumbbells with your palms facing down and extend your wrists upwards.",
      "Slowly lower the dumbbells back to the starting position.",
      "Repeat for the desired number of repetitions, focusing on the wrist extension."
    ],
  },
  {
    title: "Dumbbell Incline Reverse Curl",
    difficulty: "Intermediate",
    video: "./dumbbell-incline-reverse-curl-side.mp4", // Path to your video file
    steps: [
      "Set an incline bench to a 45-degree angle and lie down on it with a dumbbell in each hand.",
      "Hold the dumbbells with your palms facing down and arms extended straight down.",
      "Curl the dumbbells upwards while keeping your upper arms still.",
      "Slowly lower the dumbbells back to the starting position.",
      "Repeat the movement for the desired number of repetitions, focusing on the forearm muscles."
    ],
  },
  {
    title: "Dumbbells Wrist Curl Front",
    difficulty: "Intermediate",
    video: "./Dumbbells-dumbbell-bench-wrist-curl-front.mp4", // Path to your video file
    steps: [
      "Sit on a bench with a dumbbell in each hand, resting your forearms on your thighs with your wrists hanging off the edge.",
      "Grip the dumbbells with your palms facing up and curl your wrists upwards.",
      "Slowly lower the dumbbells back to the starting position.",
      "Repeat for the desired number of repetitions, focusing on controlling the movement."
    ],
  }
];

const WristExercises = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        <main className="py-12 px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {wristExercises.map((exercise, index) => (
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

export default WristExercises;
