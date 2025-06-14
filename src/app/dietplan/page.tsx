'use client'
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const dietPlans = [
  {
    id: 'muscle-building',
    title: 'Muscle Building Diet',
    description: 'Optimal nutrition plan to support muscle growth and recovery',
    meals: [
      {
        title: "Breakfast",
        description: "Start your day with a protein-rich breakfast to fuel muscle growth.",
        imageSrc: "/normal1.jpg",
        items: [
          '1. Warm water • Dry Fruits • Black Gram • Sprout • 1 Apple • (8:00 AM)',
          'After Exercise',
          '2. Oats With Cow Milk • Poha or Upma'
        ]
      },
      {
        title: "Lunch",
        description: "Keep your energy up with complex carbs and lean protein.",
        imageSrc: "/normal2.jpg",
        items: [
          '1. Brown Rice • Dal • Salad • Butter Milk (1:00 PM)',
          '2. Multigrain Biscuits • Green Tea (4:00 PM)',
          '3. Fruit Juice / Egg White (6:00 PM)'
        ]
      },
      {
        title: "Dinner",
        description: "End your day with protein to support overnight recovery.",
        imageSrc: "/normal3.jpg",
        items: ['1. Salad / Sprout / Soya Milk / Soya Paneer (9:00 PM)']
      }
    ]
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss Diet',
    description: 'Balanced nutrition to help you shed excess weight while maintaining energy',
    meals: [
      {
        title: "Breakfast",
        description: "Start your day with metabolism-boosting foods.",
        imageSrc: "/over1.jpg",
        items: [
          '1. Warm water • Lemon • (7:00 AM)',
          '2. Dry Fruits • 1 Apple • (8:00 AM)',
          '3. Oats with milk / Upma • (9:00 AM)'
        ]
      },
      {
        title: "Lunch",
        description: "Nutrient-dense, low-calorie options to keep you satisfied.",
        imageSrc: "/over2.jpg",
        items: [
          '1. Brown Rice + Dal • Salad • Butter Milk • (1:00 PM)',
          '2. Multigrain Biscuits • Green Tea • (4:00 PM)',
          '3. Fruit Juice / Egg White • (6:00 PM)'
        ]
      },
      {
        title: "Dinner",
        description: "Light evening meal focused on protein and vegetables.",
        imageSrc: "/over3.jpg",
        items: [
          '1. Salad / Sprouts / Soya Milk / Soya Paneer • Salad Full Plate • Butter Milk. • (9:00 PM)'
        ]
      }
    ]
  },
  {
    id: 'weight-gain',
    title: 'Weight Gain Diet',
    description: 'Nutrient and calorie-rich plan to help you build healthy weight',
    meals: [
      {
        title: "Breakfast",
        description: "Calorie-dense breakfast to kickstart your day.",
        imageSrc: "/under1.jpg",
        items: [
          '1. Oats + Banana Milk Shake • (8:00 AM).',
          '2. (4 - 6 Bread with Butter or Cheese) • (10:00 AM)'
        ]
      },
      {
        title: "Lunch",
        description: "Hearty lunch with ample protein and healthy fats.",
        imageSrc: "/under2.jpg",
        items: [
          '1. Dal Rice + Salad • Butter Milk / Boil Chicken / Fish Rice • Salad • Butter Milk • (1:00 PM)',
          '2. Peanut Butter • Oats Biscuits / Paneer / Dates • (4:00 PM)',
          '3. Fruits / Eggs • (6:00 PM)'
        ]
      },
      {
        title: "Dinner",
        description: "Balanced dinner with complex carbs and protein.",
        imageSrc: "/under3.jpg",
        items: [
          '1. 2-3 Chapati • Dal • Salad • Banana / Tandoori Chicken with Chapati • (9:00 PM)'
        ]
      }
    ]
  }
];

function DietPlan() {
  const [activePlan, setActivePlan] = useState(dietPlans[0].id); // Default to the first plan

  const getActivePlan = () => {
    return dietPlans.find(plan => plan.id === activePlan);
  };

  const activePlanDetails = getActivePlan();

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Personalized Diet Plans | Your Fitness Journey</title>
        <meta name="description" content="Customized diet plans for muscle building, weight loss, and weight gain" />
      </Head>
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Personalized Diet Plans</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the diet plan that aligns with your fitness goals. Each plan is carefully designed to provide balanced nutrition.
          </p>
        </div>

        {/* Diet Plan Selection Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg overflow-hidden">
            {dietPlans.map((plan) => (
              <button
                key={plan.id}
                type="button"
                className={`px-6 py-3 font-medium transition-all ${
                  activePlan === plan.id
                    ? "bg-green-400 text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
                onClick={() => setActivePlan(plan.id)}
              >
                {plan.title}
              </button>
            ))}
          </div>
        </div>


        {/* Active Diet Plan */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-900 text-white p-6">
            <h2 className="text-2xl font-bold">{activePlanDetails ? activePlanDetails.title : 'Plan Not Found'}</h2>
            <p className="text-blue-100 mt-2">{activePlanDetails ? activePlanDetails.description : 'No description available.'}</p>
          </div>

          <div className="p-6">
            {activePlanDetails && activePlanDetails.meals.map((meal, index) => (
              <div key={index} className="mb-10 last:mb-0">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 relative h-64 rounded-lg overflow-hidden">
                    <Image 
                      src={meal.imageSrc} 
                      alt={meal.title} 
                      layout="fill" 
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{meal.title}</h3>
                    <p className="text-gray-600 mb-4">{meal.description}</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-700 mb-2">Meal Plan:</h4>
                      <ul className="space-y-2">
                        {meal.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-500 border-[3px] border-[#000] text-white text-xs font-medium mr-3">
                              {i + 1}
                            </span>
                            <span className="text-gray-900 mb-4">{item.replace(/^\d+\.\s/, '')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {index < activePlanDetails.meals.length - 1 && (
                  <div className="my-8 border-b border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default DietPlan;