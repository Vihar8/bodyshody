// pages/exercises/obliques.tsx

import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Footer from "../components/Footer";
import Image from "next/image";

const obliquesExercises = [
  {
    title: "Dumbbell Russian Twist Front",
    difficulty: "Intermediate",
    video: "./Dumbbells-dumbbell-russian-twist-front.mp4", // Path to your video file
    steps: [
      "Sit on the floor with your knees bent and feet flat, holding a dumbbell with both hands in front of your chest.",
      "Lean back slightly and lift your feet off the ground to engage your core.",
      "Twist your torso to one side, bringing the dumbbell towards the floor beside your hip.",
      "Return to the center and twist to the other side, keeping your core engaged and controlling the movement.",
      "Repeat the motion for the desired number of repetitions."
    ],
  },
  {
    title: "Dumbbell Weighted Hand Side Plank",
    difficulty: "Advanced",
    video: "./dumbbell-weighted-hand-side-plank-side.mp4", // Path to your video file
    steps: [
      "Start in a side plank position with one elbow on the ground and the other arm extended upwards holding a dumbbell.",
      "Stack your legs and hips, keeping your body in a straight line from head to heels.",
      "Slowly raise the dumbbell towards the ceiling, keeping your arm fully extended.",
      "Engage your core and keep your body stable as you lower the dumbbell back down.",
      "Perform the movement for the desired number of repetitions, then switch sides."
    ],
  },
  {
    title: "Dumbbell Side Plank Up-Down",
    difficulty: "Advanced",
    video: "./dumbbell-side-plank-up-down-side.mp4", // Path to your video file
    steps: [
      "Start in a side plank position with one elbow on the ground and the other hand holding a dumbbell in front of your chest.",
      "Lift your body into a side plank, keeping your body in a straight line from head to heels.",
      "With the dumbbell in hand, extend your arm straight up towards the ceiling.",
      "Lower your arm back down to the starting position and repeat the movement while maintaining proper alignment and core engagement."
    ],
  }  
];

const ObliquesExercises = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        <main className="py-12 px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {obliquesExercises.map((exercise, index) => (
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
                    autoPlay
                    loop
                    muted
                    className="w-full h-64 object-cover transition-transform duration-300  "
                  >
                    <source src={exercise.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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

export default ObliquesExercises;
