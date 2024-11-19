'use client';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../workout/DietPlan.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Define types for DietCard props
interface DietCardProps {
  title: string;
  icon: string;
  isSelected: boolean;
  onClick: () => void;
}

type WorkoutLevel = 'beginner' | 'intermediate' | 'advanced';
// Main component
export default function DietPlan() {
  const [selectedDiet, setSelectedDiet] = useState<string>('muscleBuilding');
  const [selectedWorkout, setSelectedWorkout] = useState<string>('beginner');

  return (
    <>
      <Head>
        <title>Body Shody</title>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/compony-logo.png" type="image/x-icon" />
      </Head>
      <Navbar />

      <div className={styles.container1}>
        <h1>Select Your Diet Plan</h1>

        <div className={styles.dietSelection}>
          <DietCard 
            title="Muscle Building (Normal Weight)" 
            icon="bx bx-dumbbell"
            isSelected={selectedDiet === 'muscleBuilding'}
            onClick={() => setSelectedDiet('muscleBuilding')}
          />
          <DietCard 
            title="Fat Loss (Overweight)" 
            icon="bx bx-shape-square" 
            isSelected={selectedDiet === 'fatLoss'}
            onClick={() => setSelectedDiet('fatLoss')}
          />
          <DietCard 
            title="Weight Gain (Underweight)" 
            icon="bx bx-heart" 
            isSelected={selectedDiet === 'weightGain'}
            onClick={() => setSelectedDiet('weightGain')}
          />
        </div>

        <div className={styles.dietInfo}>
          {selectedDiet && <DietInfo dietType={selectedDiet} />}
        </div>

        <h1>Select Your Workout Plan</h1>
        <div className={styles.dietSelection}>
          <DietCard 
            title="Beginner" 
            icon="bx bx-run"
            isSelected={selectedWorkout === 'beginner'}
            onClick={() => setSelectedWorkout('beginner')}
          />
          <DietCard 
            title="Intermediate" 
            icon="bx bx-run"
            isSelected={selectedWorkout === 'intermediate'}
            onClick={() => setSelectedWorkout('intermediate')}
          />
          <DietCard 
            title="Advanced" 
            icon="bx bx-run"
            isSelected={selectedWorkout === 'advanced'}
            onClick={() => setSelectedWorkout('advanced')}
          />
        </div>
        <div className={styles.dietInfo}>
          {selectedWorkout && <WorkoutInfo workoutType={selectedWorkout} />}
        </div>
      </div>
      <Footer />
    </>
  );
}
// DietCard component with prop types
function DietCard({ title, icon, isSelected, onClick }: DietCardProps) {
  return (
    <div 
      className={`${styles.dietCard} ${isSelected ? styles.selected : ''}`} 
      onClick={onClick}
    >
      <i className={icon}></i>
      <h3>{title}</h3>
    </div>
  );
}
// WorkoutInfo component
function WorkoutInfo({ workoutType }: { workoutType: WorkoutLevel }) {
  const workoutPlans: Record<WorkoutLevel, { workouts: { title: string; sets: string; }[] }> = {
    beginner: {
      workouts: [
        { title: "Bodyweight Squats", sets: "3 sets of 10 reps" },
        { title: "Push-Ups", sets: "3 sets of 8-10 reps" },
        { title: "Plank", sets: "3 sets of 20-30 seconds" },
      ]
    },
    intermediate: {
      workouts: [
        { title: "Bench Press", sets: "4 sets of 8 reps" },
        { title: "Deadlift", sets: "4 sets of 6 reps" },
        { title: "Cool-down Stretching", sets: "5-10 mins" },
      ]
    },
    advanced: {
      workouts: [
        { title: "Squat Clean", sets: "5 sets of 5 reps" },
        { title: "Weighted Pull-Ups", sets: "4 sets of 6 reps" },
        { title: "HIIT Circuit", sets: "15 mins" },
      ]
    }
  };

  const workoutPlan = workoutPlans[workoutType]; // TypeScript now knows workoutType is of type WorkoutLevel
  if (!workoutPlan) {
    return <p>Workout plan not found.</p>;
  }

  return (
    <>
      {workoutPlan.workouts.map((workout, index) => (
        <div key={index} className={styles.workout}>
          <h4>{workout.title}</h4>
          <p>{workout.sets}</p>
        </div>
      ))}
    </>
  );
}

// DietInfo component
function DietInfo({ dietType }: { dietType: string }) {
  const dietPlans = {
    muscleBuilding: {
      meals: [
        {
          title: "Breakfast",
          description: "Start your day with a healthy breakfast.",
          imageSrc: "/normal1.jpg",
          items: [
            '1. Warm water + Dry Fruits + Black Gram + Sprout + 1 Apple (8:00 AM)',
            'After Exercise',
            '1. Oats With Cow Milk + Poha or Upma'
          ]
        },
        {
          title: "Lunch",
          description: "Keep your energy up during the day.",
          imageSrc: "/normal2.jpg",
          items: [
            '1. Brown Rice + Dal + Salad + Buttermilk (1:00 PM)',
            '2. Multigrain Biscuits + Green Tea (4:00 PM)',
            '3. Fruit Juice / Egg White (6:00 PM)'
          ]
        },
        {
          title: "Dinner",
          description: "End your day with a balanced meal.",
          imageSrc: "/normal3.jpg",
          items: ['1. Salad / Sprout / Soya Milk / Soya Paneer (9:00 PM)']
        }
      ]
    },
    fatLoss: {
      meals: [
        {
          title: "Breakfast",
          description: "Start your day with a low-calorie breakfast.",
          imageSrc: "/over1.jpg",
          items: [
            '1. Green Tea + Oatmeal with Fruits (8:00 AM)',
            'After Exercise',
            '1. Scrambled Eggs with Spinach'
          ]
        },
        {
          title: "Lunch",
          description: 'Maintain energy with a healthy lunch.',
          imageSrc: '/over2.jpg',
          items: [
            '1. Quinoa Salad with Vegetables (1:00 PM)',
            '2. Grilled Chicken with Broccoli (4:00 PM)',
            '3. Mixed Fruit (6:00 PM)'
          ]
        },
        {
          title: 'Dinner',
          description: 'Finish your day lighter for better digestion.',
          imageSrc: '/over3.jpg',
          items: ['1. Vegetable Stir Fry (9:00 PM)']
        }
      ]
    },
    weightGain: {
      meals: [
        {
          title: "Breakfast",
          description: "High-calorie breakfast to start your day.",
          imageSrc: "/under1.jpg",
          items: [
            '1. Whole Milk + Peanut Butter + Banana (8:00 AM)',
            'After Exercise',
            '1. Oats with Almonds and Honey'
          ]
        },
        {
          title: "Lunch",
          description: "Fuel your day with rich nutrients.",
          imageSrc: "/under2.jpg",
          items: [
            '1. Rice + Chicken / Paneer + Veggies (1:00 PM)',
            '2. Nut Mix with Dried Fruits (4:00 PM)',
            '3. Protein Shake (6:00 PM)'
          ]
        },
        {
          title: "Dinner",
          description: "Finish strong with a hearty meal.",
          imageSrc: "/under3.jpg",
          items: ['1. Pasta with Cheese and Meat (9:00 PM)']
        }
      ]
    }
  };

  const dietPlan = dietPlans[dietType];
  if (!dietPlan) {
    return <p>Diet plan not found.</p>;
  }

  return (
    <>
      {dietPlan.meals.map((meal, index) => (
        <Meal 
          key={index} 
          title={meal.title} 
          description={meal.description} 
          imageSrc={meal.imageSrc} 
          items={meal.items} 
        />
      ))}
    </>
  );
}

// Meal component
function Meal({ title, description, imageSrc, items }: { title: string; description: string; imageSrc: string; items: string[] }) {
  return (
    <div className={styles.meal}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Image src={imageSrc} alt={title} width={400} height={250} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}