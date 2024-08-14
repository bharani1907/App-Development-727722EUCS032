import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

// Sample invitation data
const invitationData = [
  {
    id: 1,
    name: "Elegant Floral Invitation",
    price: "100 rs",
    image: "https://media.istockphoto.com/id/1412718411/vector/wedding-invitation-with-autumn-flowers-and-leaves-in-red-yellow-warm-and-golden-colours-with.jpg?s=612x612&w=0&k=20&c=Amb7kuEZHQ3v5cRaGPx4gXV6auEvTvAtSiXzI3u3Hlc=",
    description: "A beautiful floral design perfect for weddings and anniversaries.",
  },
  {
    id: 2,
    name: "Modern Minimalist Invitation",
    price: "200 rs",
    image: "https://i.etsystatic.com/16052210/r/il/ecd1ea/3077222336/il_1080xN.3077222336_edx2.jpg",
    description: "Clean lines and minimalist design for a contemporary feel.",
  },
  {
    id: 3,
    name: "Rustic Charm Invitation",
    price: "150 rs",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQEkP1OrlOynHQwx1HzbEHt6_lLXuOkh-MKrAm3nlChHx_xDdBeRdjIXsoP8o75XAoQyx9FS9rta_PXAEg8EQIiPVTCXHUVBb0ETj_fuf6pJU79rpAX2Mx3",
    description: "A rustic design with earthy tones and natural elements.",
  },
  {
    id: 4,
    name: "Classic Gold Invitation",
    price: "200 rs",
    image: "https://img.freepik.com/free-vector/luxury-elegant-wedding-invitation-card-template-design-set_4513-1043.jpg",
    description: "Classic elegance with a touch of gold for luxurious events.",
  },
  {
    id: 5,
    name: "Vintage Lace Invitation",
    price: "300 rs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_A_SpZr6y0ZuX0USHeNk-B3OXybnyDQyEDp-CvTR5iqnGILFk4ApndwiJYTlRaK3Zup4&usqp=CAU",
    description: "A vintage design with lace patterns and soft colors.",
  },
];

// Main component for displaying customized invitations
const Customizedinvitation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-sky-300 to-blue-500">
      <Navbar />
      <div
        data-aos="fade-down"
        className="section_title container mx-auto grid gap-4 text-center my-10"
      >
        <h1 className="sub_title text-3xl text-white">What We Offer</h1>
      </div>
      <div className="flex-grow max-w-7xl mx-auto bg-sky-200 shadow-2xl rounded-lg overflow-hidden mt-11 p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Customized Invitations
        </h2>
        <p className="text-center text-gray-600 mb-8 px-8">
          Set the tone for your event with our Customized Invitations service.
          Our skilled designers craft invitations that perfectly mirror your
          event's theme.
        </p>
        <div className="flex flex-wrap justify-center">
          {invitationData.map((invitation) => (
            <div
              key={invitation.id}
              className="flex w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden mb-8 mx-4 transform hover:scale-105 transition-transform duration-500 animate-slide-up"
            >
              <img
                src={invitation.image}
                alt={invitation.name}
                className="w-1/3 h-auto object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {invitation.name}
                </h3>
                <p className="text-gray-600 mb-4">{invitation.description}</p>
                <p className="text-lg font-bold text-gray-900">
                  {invitation.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Customizedinvitation;
