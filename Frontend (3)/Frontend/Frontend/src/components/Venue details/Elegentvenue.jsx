import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Sample venues data with additional venues
const sampleVenues = [
  {
    id: 1,
    name: "Grand Ballroom",
    location: "Singanallur",
    date: "2024-08-10",
    capacity: 500,
    description: "A luxurious ballroom with elegant decor.",
    image:
      "https://images.pexels.com/photos/17931472/pexels-photo-17931472/free-photo-of-flower-arrangements-and-a-birthday-cake-in-a-reception-hall.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Garden Pavilion",
    location: "RS Puram",
    date: "2024-08-15",
    capacity: 300,
    description: "A beautiful outdoor venue surrounded by gardens.",
    image:
      "https://images.pexels.com/photos/24426488/pexels-photo-24426488/free-photo-of-hotel-with-garden-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "City Conference Center",
    location: "Race Course",
    date: "2024-09-01",
    capacity: 1000,
    description: "A modern conference center in the heart of the city.",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.WT58buYHFJmPrbqZmAmLtQHaFj&pid=Api&P=0&h=220",
  },
  {
    id: 4,
    name: "Cozy Loft",
    location: "Palladam",
    date: "2024-08-25",
    capacity: 100,
    description: "A cozy loft perfect for intimate gatherings.",
    image: "https://tse3.mm.bing.net/th?id=OIP.pYtVHkGMD1tKJ4oEPErn2gHaE8&pid=Api&P=0&h=220",
  },
  {
    id: 5,
    name: "Ocean View Terrace",
    location: "Gandhipuram",
    date: "2024-09-05",
    capacity: 200,
    description: "A terrace with breathtaking ocean views.",
    image: "https://tse1.mm.bing.net/th?id=OIP.kk55FVNhM4JrnhPqqOCcnQHaEI&pid=Api&P=0&h=220",
  },
  {
    id: 6,
    name: "Rustic Barn",
    location: "SB Colony",
    date: "2024-08-30",
    capacity: 150,
    description: "A rustic barn offering a charming countryside experience.",
    image: "https://tse4.mm.bing.net/th?id=OIP.AMvyFx6gWb8fiPiIe_wpWwAAAA&pid=Api&P=0&h=220",
  },
  // ... your existing venue data
  {
    id: 7,
    name: "Skyline Rooftop",
    location: "Ondipudhur",
    date: "2024-08-20",
    capacity: 250,
    description: "A rooftop venue with panoramic city views.",
    image: "https://tse2.mm.bing.net/th?id=OIP.-ivV_-rVAB__AyTb3kQi0wHaE7&pid=Api&P=0&h=220",
  },
  {
    id: 8,
    name: "Lakeside Lodge",
    location: "Kuniyamuthur",
    date: "2024-08-18",
    capacity: 350,
    description: "A lodge with a serene lakeside setting.",
    image: "https://tse1.mm.bing.net/th?id=OIP.M39mylFNzXW5f-KciMrMnwHaEl&pid=Api&P=0&h=220",
  },
];

const Venues = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [filteredVenues, setFilteredVenues] = useState(sampleVenues);

  const navigate = useNavigate(); // Initialize useNavigate

  // Function to filter venues based on user input
  const filterVenues = () => {
    const results = sampleVenues.filter((venue) => {
      return (
        (location === "" ||
          venue.location.toLowerCase().includes(location.toLowerCase())) &&
        (date === "" || venue.date === date) &&
        (capacity === "" || venue.capacity >= parseInt(capacity))
      );
    });
    setFilteredVenues(results);
  };

  // useEffect to trigger search when inputs change
  useEffect(() => {
    filterVenues();
  }, [location, date, capacity]); // Dependencies for the useEffect hook

  // Function to navigate to the booking page based on venue ID
  const handleBookNow = (venue) => {
    const routes = {
      1: "/book1",
      2: "/book2",
      3: "/book3",
      4: "/book4",
      5: "/book5",
      6: "/book6",
      7: "/book7", // Assuming you have a route for book7
      8: "/book8"  // Assuming you have a route for book8
    };
    const route = routes[venue.id];
    if (route) {
      navigate(route, { state: { venue } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
         Perfect Venues
      </h1>
     
      {filteredVenues.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVenues.map((venue) => (
            <div
              key={venue.id}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{venue.name}</h3>
                <p className="text-gray-400 text-sm mb-2">
                  Location: {venue.location}
                </p>
                <p className="text-gray-400 text-sm mb-2">
                  Date: {venue.date}
                </p>
                <p className="text-gray-400 text-sm mb-2">
                  Capacity: {venue.capacity}
                </p>
                <p className="text-gray-300 mb-4">{venue.description}</p>
                <button
                  onClick={() => handleBookNow(venue)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-8">No venues found.</p>
      )}
    </div>
  );
};

export default Venues;
