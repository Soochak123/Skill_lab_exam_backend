import React from 'react';
import Navbar from '@/app/Components/Navbar';

const Home = () => {
  return (
    <div className="bg-blue-500 h-screen text-white">
      <Navbar />
      <div className="text-center justify-center max-w-2xl mx-auto p-4 pt-24">
        <h1 className="text-4xl font-extrabold mb-4 leading-tight text-yellow-300">
          Welcome to Tasty Traverse
        </h1>
        <p className="text-lg leading-relaxed text-justify">
        Welcome to Tasty Traverse, your ultimate destination for a delightful culinary journey! At Tasty Traverse, we bring the world of flavors to your fingertips, offering an extensive selection of mouthwatering dishes ready to be savored and enjoyed. Our user-friendly food ordering website provides a seamless experience, allowing you to explore a diverse range of cuisines from the comfort of your home. Whether you're in the mood for a quick bite, a gourmet feast, or a sweet treat, Tasty Traverse has you covered. Navigate through our carefully curated menu, discover new taste sensations, and indulge in the convenience of swift and reliable food delivery. Join us on a gastronomic adventure where every bite is a discovery, and every meal is a celebration. Tasty Traverse – where the joy of food meets the ease of ordering. Bon appétit!
        </p>
      </div>
      <footer className="text-center text-gray-300 mt-8 ">
        © 2024 Tasty Traverse. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;