// pages/dietplan.js
import Head from 'next/head';
import Image from 'next/image';
import styles from '../dietplan/DietPlan.module.css'; // Ensure to include your CSS styles here
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type MealProps = {
  title: string;
  description: string;
  imageSrc: string;
  items: string[];
};

function Meal({ title, description, imageSrc, items }: MealProps) {
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

export default function DietPlan() {
  return (
    <>
      <Head>
        <title>Body Shody</title>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/company-logo.png" type="image/x-icon" />
      </Head>
      <Navbar />
      <div className={styles.container1}>
        <h1>Muscle Building Diet</h1>
        {/* Muscle Building Section */}
        <Meal
          title="Breakfast"
          description="Start your day with a healthy breakfast."
          imageSrc="/normal1.jpg"
          items={[
            '1. Warm water + Dry Fruits + Black Gram + Sprout + 1 Apple (8:00 AM)',
            'After Exercise',
            '1. Oats With Cow Milk + Poha or Upma',
          ]}
        />
        <hr />
        <Meal
          title="Lunch"
          description="Keep your energy up during the day."
          imageSrc="/normal2.jpg"
          items={[
            '1. Brown Rice + Dal + Salad + Butter Milk (1:00 PM)',
            '2. Multigrain Biscuits + Green Tea (4:00 PM)',
            '3. Fruit Juice / Egg White (6:00 PM)',
          ]}
        />
        <hr />
        <Meal
          title="Dinner"
          description="End your day with a balanced meal."
          imageSrc="/normal3.jpg"
          items={['1. Salad / Sprout / Soya Milk / Soya Paneer (9:00 PM)']}
        />

        {/* Weight Loss Diet Section */}
        <h1>Weight Loss Diet</h1>
        <Meal
          title="Breakfast"
          description="Healthy start with low-calorie foods."
          imageSrc="/over1.jpg"
          items={[
            '1. Warm water + Lemon (7:00 AM)',
            '2. Dry Fruits +1 Apple (8:00 AM)',
            '3. Oats with milk / Upma (9:00 AM)',
          ]}
        />
        <hr />
        <Meal
          title="Lunch"
          description="Light and nutritious fare for lunchtime."
          imageSrc="/over2.jpg"
          items={[
            '1. Brown Rice + Dal + Salad + Butter Milk (1:00 PM)',
            '2. Multigrain Biscuits + Green Tea (4:00 PM)',
            '3. Fruit Juice / Egg White (6:00 PM)',
          ]}
        />
        <hr />
        <Meal
          title="Dinner"
          description="End your day with low-carb options."
          imageSrc="/over3.jpg"
          items={[
            '1. Salad / Sprouts / Soya Milk / Soya Paneer + Salad Full Plate + Butter Milk. (9:00 PM)',
          ]}
        />

        {/* Weight Gain Diet Section */}
        <h1>Weight Gain Diet</h1>
        <Meal
          title="Breakfast"
          description="Start your day with calorie-rich foods."
          imageSrc="/under1.jpg"
          items={[
            '1. Oats + Banana Milk Shake (8:00 AM).',
            '2. (4 - 6 Bread with Butter or Cheese) (10:00 AM)',
          ]}
        />
        <hr />
        <Meal
          title="Lunch"
          description="Boost your calorie intake at lunch."
          imageSrc="/under2.jpg"
          items={[
            '1. Dal Rice + Salad + Butter Milk / Boil Chicken / Fish Rice + Salad + Butter Milk (1:00 PM)',
            '2. Peanut Butter + Oats Biscuits / Paneer / Dates (4:00 PM)',
            '3. Fruits / Eggs (6:00 PM)',
          ]}
        />
        <hr />
        <Meal
          title="Dinner"
          description="Include high-calorie choices in your dinner."
          imageSrc="/under3.jpg"
          items={[
            '1. 2-3 Chapati + Dal + Salad + Banana / Tandoori Chicken with Chapati (9:00 PM)',
          ]}
        />
      </div>
      <Footer />
    </>
  );
}
