// pages/exercises/hamstring.js

import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Footer from "../components/Footer";
import Image from "next/image"; // This might be unnecessary now, as you're using video

const hamstringExercises = [
  {
    title: "Romanian Deadlift",
    difficulty: "Intermediate",
    video: "/hamstring.mp4", // Path to your video file
    steps: [
      "Stand with your feet shoulder-width apart, holding a barbell in front of you.",
      "Keep your back straight and hinge at your hips to lower the barbell down to mid-shin level.",
      "Squeeze your glutes to return to the starting position.",
    ],
  },
  {
    title: "Leg Curl Machine",
    difficulty: "Novice",
    video: "/legcurl.mp4", // Path to your video file
    steps: [
      "Sit on the machine with your knees just over the pad.",
      "Curl the pad towards your glutes and hold at the peak.",
      "Slowly lower back to the starting position.",
    ],
  },
  {
    title: "Male Muscle Animation",
    difficulty: "Beginner",
    video: "/animation-male-muscle.mp4", // Path to your video file
    steps: [
      "This is an animation to help visualize the muscles involved in hamstring exercises.",
      "Use this animation to learn proper form and muscle engagement.",
    ],
  },
];

const HamstringExercises = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        <main className="py-12 px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {hamstringExercises.map((exercise, index) => (
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

export default HamstringExercises;
