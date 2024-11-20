import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Footer from "../components/Footer";

const Home = () => {
  const exercises = [
    {
      title: "Machine Pec Fly",
      difficulty: "Novice",
      video: "./machine-pec-fly.mp4.mp4", // Path to your video file
      steps: [
        "Adjust seat height so handles align with chest. Sit and grip handles with elbows slightly bent.",
        "Slowly bring handles together in front, keeping tension. Focus on squeezing chest muscles.",
        "Return handles to starting position with controlled motion. Keep chest up throughout. Repeat for reps.",
      ],
    },
    {
      title: "Dumbbells Russian Twist",
      difficulty: "Intermediate",
      video: "./Dumbbells-dumbbell-russian-twist-side.mp4", // Path to your video file
      steps: [
        "Lie flat on the bench with your feet firmly on the ground. Grip the barbell slightly wider than shoulder-width.",
        "Lower the barbell to your chest with control. Keep your elbows at a 45-degree angle.",
        "Press the barbell back up to the starting position. Ensure your core remains engaged throughout.",
      ],
    },
    {
      title: "Dumbbells Dumbbell Sit-Up Front",
      difficulty: "Intermediate",
      video: "./Dumbbells-dumbbell-situp-front.mp4", // Path to your video file
      steps: [
        "Lie flat on the bench with a dumbbell in each hand, extended above your chest.",
        "Slowly lower your upper body towards the ground while keeping the dumbbells in position.",
        "Engage your core and use your abdominal muscles to bring your upper body back up to the starting position, keeping the dumbbells steady.",
        "Repeat the movement for the desired number of repetitions while maintaining control throughout."
      ],
    },
    
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        <main className="py-12 px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {exercises.map((exercise, index) => (
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
      <Footer />
    </>
  );
};

export default Home;
