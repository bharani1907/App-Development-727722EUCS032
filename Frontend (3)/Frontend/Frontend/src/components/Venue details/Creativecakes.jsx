// src/components/Creativecakes.jsx

import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer"; // Import the Footer component

// Cake data array with additional cakes
const cakeData = [
  {
    id: 1,
    name: "Chocolate Fudge Cake",
    price: "1Kg 500 rs",
    image: "https://www.recipetineats.com/uploads/2023/07/Hot-chocolate-fudge-cake_7-2.jpg",
    description: "A rich and moist chocolate cake perfect for any occasion.",
    details: {
      description:
        "Indulge in our rich Chocolate Fudge Cake, made with premium cocoa and layers of creamy chocolate fudge. Perfect for any chocolate lover's dream.",
      ingredients: ["Chocolate", "Cocoa Powder", "Eggs", "Sugar", "Butter"],
    },
  },
  {
    id: 2,
    name: "Vanilla Dream Cake",
    price: "1Kg 400 rs",
    image: "https://preppykitchen.com/wp-content/uploads/2016/08/Funfetti-original-redo-close.jpg",
    description:
      "A light and fluffy vanilla cake topped with creamy frosting.",
    details: {
      description:
        "Experience the lightness of our Vanilla Dream Cake, with a moist crumb and a hint of vanilla, topped with our special creamy frosting.",
      ingredients: ["Vanilla", "Flour", "Eggs", "Sugar", "Butter"],
    },
  },
  {
    id: 3,
    name: "Red Velvet Cake",
    price: "1Kg 750 rs",
    image: "https://www.butterbeready.com/wp-content/uploads/2024/02/DK6A6881.jpg",
    description: "A classic red velvet cake with a velvety texture.",
    details: {
      description:
        "Our Red Velvet Cake is a timeless classic, featuring a unique flavor and a beautiful velvety texture. Perfect for special occasions.",
      ingredients: [
        "Red Food Coloring",
        "Cocoa Powder",
        "Eggs",
        "Buttermilk",
        "Butter",
      ],
    },
  },
  {
    id: 4,
    name: "Lemon Drizzle Cake",
    price: "1Kg 500 rs",
    image: "https://amandawilens.com/wp-content/uploads/2021/05/featured-image-strawberry-lemon-cake.jpg",
    description: "A zesty lemon cake with a refreshing glaze.",
    details: {
      description:
        "Our Lemon Drizzle Cake is infused with fresh lemon zest and topped with a tangy lemon glaze, creating a refreshing and flavorful experience.",
      ingredients: ["Lemon", "Flour", "Eggs", "Sugar", "Butter"],
    },
  },
  {
    id: 5,
    name: "Carrot Cake",
    price: "1Kg 550 rs",
    image: "https://i.pinimg.com/736x/be/76/7e/be767e97f1625970c4a757304d0b2a6a.jpg",
    description: "A moist and spiced cake with cream cheese frosting.",
    details: {
      description:
        "Enjoy our delicious Carrot Cake, made with fresh carrots, warm spices, and topped with creamy cheese frosting. A perfect balance of flavors and textures.",
      ingredients: ["Carrots", "Cinnamon", "Nutmeg", "Cream Cheese", "Walnuts"],
    },
  },
  {
    id: 6,
    name: "Strawberry Shortcake",
    price: "1Kg 800 rs",
    image: "https://sugargeekshow.com/wp-content/uploads/2021/06/Strawberry_Shortcake_featured.jpg",
    description:
      "A classic cake with layers of strawberries and whipped cream.",
    details: {
      description:
        "Our Strawberry Shortcake features layers of light sponge cake, fresh strawberries, and whipped cream, offering a delightful and refreshing taste.",
      ingredients: [
        "Strawberries",
        "Flour",
        "Eggs",
        "Sugar",
        "Whipped Cream",
      ],
    },
  },
  {
    id: 7,
    name: "Coconut Cake",
    price: "1Kg 490 rs",
    image: "https://static.onecms.io/wp-content/uploads/sites/19/2013/10/29/ambrosia-coconut-cake-crop-sl.jpg",
    description: "A tropical cake infused with coconut flavor.",
    details: {
      description:
        "Our Coconut Cake brings the tropics to your table, featuring moist layers filled with coconut cream and topped with shredded coconut.",
      ingredients: [
        "Coconut Cream",
        "Flour",
        "Eggs",
        "Sugar",
        "Shredded Coconut",
      ],
    },
  },
  {
    id: 8,
    name: "Coffee Walnut Cake",
    price: "1Kg 1000 rs",
    image: "https://realfood.tesco.com/media/images/RFO-1400x919-CoffeeWalnutCake-b26771ce-5638-4975-8241-d3993b8f5324-0-1400x919.jpg",
    description: "A rich coffee-flavored cake with crunchy walnuts.",
    details: {
      description:
        "Our Coffee Walnut Cake combines the rich flavors of coffee with the crunch of walnuts, creating a delightful treat for coffee lovers.",
      ingredients: ["Coffee", "Walnuts", "Flour", "Eggs", "Sugar"],
    },
  },
  {
    id: 9,
    name: "Black Forest Cake",
    price: "1Kg 800 rs",
    image: "https://www.shreemithai.com/cdn/shop/products/black-forest-cake-222028.jpg?v=1707819760",
    description: "A German classic with cherries and chocolate.",
    details: {
      description:
        "Our Black Forest Cake is a classic German dessert, made with layers of chocolate sponge, whipped cream, and cherries, all topped with chocolate shavings.",
      ingredients: [
        "Cherries",
        "Chocolate",
        "Flour",
        "Eggs",
        "Whipped Cream",
      ],
    },
  },
];

// Main component for displaying cakes and details
const Creativecakes = () => {
  const [selectedCake, setSelectedCake] = useState(null); // State to track selected cake

  // Function to handle viewing details of a cake
  const handleViewDetails = (cakeId) => {
    const cake = cakeData.find((cake) => cake.id === cakeId);
    setSelectedCake(cake); // Set the selected cake
  };

  // Function to go back to the list view
  const handleBackToList = () => {
    setSelectedCake(null); // Reset selected cake
  };

  // Render the detailed view if a cake is selected
  if (selectedCake) {
    return (
      <div>
        <Navbar />
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 p-6">
          <img
            src={selectedCake.image}
            alt={selectedCake.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {selectedCake.name}
            </h2>
            <p className="text-gray-600 mb-4">{selectedCake.details.description}</p>
            <h3 className="text-xl font-semibold text-gray-800">Ingredients:</h3>
            <ul className="list-disc list-inside mb-4">
              {selectedCake.details.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">
                  {ingredient}
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-gray-900">{selectedCake.price}</p>
            <button
              onClick={handleBackToList}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Back to List
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Render the list view of cakes
  return (
    <div>
      <Navbar />
      <div
        data-aos="fade-down"
        className="section_title container mx-auto grid gap-4 text-center mb-20"
      >
        <h1 className="sub_title text-3xl text-sky-400">What We Offer</h1>
        <h1 className="sub_title text-5xl font-bold text-white">
          
        </h1>
        
      </div>
      
      <div className="flex flex-wrap justify-center mt-12 ">
      
        {cakeData.map((cake) => (
          <div
            key={cake.id}
            className="max-w-sm mx-4 bg-white shadow-lg rounded-lg overflow-hidden mb-6 transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={cake.image}
              alt={cake.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{cake.name}</h2>
              <p className="text-gray-600 mb-4">{cake.description}</p>
              <p className="text-xl font-semibold text-gray-900">{cake.price}</p>
              <button
                onClick={() => handleViewDetails(cake.id)}
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    
  );
};

export default Creativecakes;
