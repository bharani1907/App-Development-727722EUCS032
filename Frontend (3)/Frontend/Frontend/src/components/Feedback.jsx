import React, { useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]); // Start with an empty array

  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (name.trim() === "" || reviewText.trim() === "") {
      alert("Please fill out both the name and review fields.");
      return;
    }

    // Add new review to the list
    const newReview = { name: name.trim(), text: reviewText.trim() };
    setReviews([...reviews, newReview]);

    // Clear input fields
    setName("");
    setReviewText("");
  };

  return (
    <div className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-9xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">Leave a Review</h2>

        {/* Review Section */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Leave a Review</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Review</label>
              <textarea
                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>
            </div>
            <button className="mt-5 bg-sky-600 hover:bg-sky-700 transition-colors duration-200 capitalize text-lg px-8 py-3 rounded-full text-white shadow-md">
            Submit
          </button>          </form>

          {/* Displaying Reviews */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-4">Recent Reviews:</h4>
            {reviews.length === 0 ? ( // Check if there are no reviews
              <p className="text-gray-400">No reviews yet. Be the first to leave one!</p>
            ) : (
              <ul className="space-y-4">
                {reviews.map((review, index) => (
                  <li key={index} className="bg-gray-700 p-4 rounded-lg shadow">
                    <strong className="block">{review.name}</strong>
                    <span className="block text-sm text-gray-400">
                      {review.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
