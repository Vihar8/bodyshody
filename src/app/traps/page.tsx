import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Image from "next/image";

const trapsExercises = [
  {
    title: "Dumbbell Seated Shrug Front",
    difficulty: "Intermediate",
    video: "./dumbbell-seated-shrug-front.mp4", // Path to your video file
    steps: [
      "Sit upright on a bench with a dumbbell in each hand, palms facing your torso.",
      "Keep your back straight and your arms fully extended. Slowly shrug your shoulders as high as possible toward your ears.",
      "Pause briefly at the top, focusing on squeezing your traps, then lower the dumbbells back to the starting position.",
      "Repeat the movement for the desired number of repetitions while maintaining control throughout."
    ],
  },
  {
    title: "Dumbbell Shrug Front",
    difficulty: "Intermediate",
    video: "./male-Dumbbells-dumbbell-shrug-front.mp4", // Path to your video file
    steps: [
      "Stand tall with a dumbbell in each hand, arms fully extended, and palms facing your torso.",
      "Keep your feet shoulder-width apart and your core engaged for stability.",
      "Shrug your shoulders upward as high as possible, squeezing your traps at the top of the movement.",
      "Slowly lower the dumbbells back down to the starting position, maintaining control and keeping your back straight.",
      "Repeat the movement for the desired number of repetitions, focusing on form and control."
    ],
  },
  {
    title: "Dumbbell Silverback Shrug Front",
    difficulty: "Advanced",
    video: "./male-Dumbbells-dumbbell-silverback-shrug-front.mp4", // Path to your video file
    steps: [
      "Stand with a dumbbell in each hand, palms facing your torso, with your feet shoulder-width apart.",
      "Keeping your chest up, slightly lean forward from your waist while maintaining a neutral spine.",
      "Perform a shrug by lifting your shoulders as high as possible while keeping your arms straight.",
      "Focus on engaging your traps and hold the top position for a second before lowering the dumbbells back to the starting position.",
      "Control the descent, keeping tension on the traps, and repeat for the desired number of repetitions."
    ],
  },
  
];
const TrapsExercises = () => {
  return (
    <>
    <div className="min-h-screen bg-white text-black">
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {trapsExercises.map((exercise, index) => (
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
                    className="w-full h-auto sm:max-h-48 md:max-h-64 lg:max-h-80 object-cover transition-transform duration-300   rounded-lg"
                  >
                    <source src={exercise.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg"></div>
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

export default TrapsExercises;
