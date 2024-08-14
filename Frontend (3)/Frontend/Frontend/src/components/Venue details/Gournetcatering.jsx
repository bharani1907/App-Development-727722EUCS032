import React from "react";
import Navbar from "../Navbar";

const Gourmetcatering = () => {
  // Sample menu items
  const menuItems = [
    {
      name: "Appetizer Platter",
      description:
        "A variety of appetizers including bruschetta, stuffed mushrooms, and shrimp cocktails.",
      price: "2500 rs",
    },
    {
      name: "Main Course",
      description:
        "Choose from a selection of gourmet main courses such as filet mignon, roasted chicken, or vegetarian lasagna.",
      price: "10000 rs",
    },
    {
      name: "Dessert Selection",
      description:
        "Indulge in an array of desserts like chocolate mousse, fruit tarts, and cheesecake.",
      price: "7000 rs",
    },
    {
      name: "Beverage Bar",
      description:
        "A fully stocked bar with premium wines, cocktails, and non-alcoholic options.",
      price: "2000 rs",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl bg-gray-800 shadow-2xl rounded-lg overflow-hidden p-8 mx-4">
          <img
            src="https://img.freepik.com/premium-photo/buffet-party-meal-delicious-banquet-table-food-gourmet-restaurant-catering_163305-257721.jpg"
            alt="Gourmet Catering"
            className="w-full h-80 object-cover mb-6 rounded-lg shadow-lg"
          />
          <div className="p-6">
            <h2 className="text-4xl font-extrabold text-white mb-4 text-center">
              Gourmet Catering
            </h2>
            <p className="text-gray-300 mb-8 text-center">
              Indulge your guests in a culinary journey with our Gourmet Catering service. Our expert chefs curate a menu that tantalizes taste buds, ensuring a memorable dining experience for your event.
            </p>
            <h3 className="text-3xl font-semibold text-white mb-6 text-center">
              Menu Highlights
            </h3>
            <ul className="list-none space-y-8">
              {menuItems.map((item, index) => (
                <li key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {item.name}
                  </h4>
                  <p className="text-gray-300 mb-2">{item.description}</p>
                  <p className="text-xl font-semibold text-yellow-400">
                    {item.price}
                  </p>
                </li>
              ))}
            </ul>
            <h3 className="text-3xl font-semibold text-white mt-12 mb-4 text-center">
              Pricing
            </h3>
            <p className="text-lg text-yellow-300 text-center">
              Our Gourmet Catering service starts at 15000 Rupees, which includes a customizable menu, professional staff, and all necessary equipment. Additional options and upgrades are available upon request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gourmetcatering;
