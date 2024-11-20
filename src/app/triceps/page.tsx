// pages/exercises/shoulder.js

import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Footer from "../components/Footer";
import Image from "next/image";

// Renamed back to "tricepsExercises"
const tricepsExercises = [
    {
      title: "Dumbbell Guillotine Incline Bench Press",
      difficulty: "Advanced",
      image: "/Dumbbell-Guillotine-Incline-Bench-Press.gif", // Path to your GIF file
      steps: [
        "Set the bench to an incline position (around 30-45 degrees).",
        "Hold a dumbbell in each hand with a neutral grip, palms facing each other.",
        "Lower the dumbbells slowly towards your upper chest, keeping your elbows flared out.",
        "Press the dumbbells back up to the starting position, fully extending your arms.",
        "Repeat the movement for the desired number of repetitions, maintaining control throughout."
      ],
    },
    {
      title: "Dumbbell Overhead Triceps Extension",
      difficulty: "Intermediate",
      image: "/dumbbelloverheadtricepsextension.gif", // Path to your GIF file
      steps: [
        "Stand with your feet shoulder-width apart, holding one dumbbell with both hands.",
        "Extend your arms overhead, keeping your elbows close to your head.",
        "Lower the dumbbell behind your head by bending your elbows, maintaining control.",
        "Press the dumbbell back up to the starting position by straightening your arms.",
        "Repeat for the desired number of repetitions, ensuring your elbows do not flare out."
      ],
    },
    {
      title: "Dumbbell Bench Press",
      difficulty: "Intermediate",
      image: "/Dumbbell-Bench-Press.gif", // Path to your GIF file
      steps: [
        "Lie flat on a bench, holding a dumbbell in each hand at chest level.",
        "Press the dumbbells upward, fully extending your arms, while keeping your feet flat on the ground.",
        "Slowly lower the dumbbells back to chest level, maintaining control throughout.",
        "Ensure your elbows are at a 45-degree angle to your body during the movement.",
        "Repeat for the desired number of repetitions."
      ],
    }
];  

const TricepsExercises = () => {  // Component name adjusted to TricepsExercises
  return (
    <>
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        <main className="py-12 px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {tricepsExercises.map((exercise, index) => ( // Use the corrected name here
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

export default TricepsExercises;
