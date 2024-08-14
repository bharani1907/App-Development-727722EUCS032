import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "John Smith",
    role: "Event Coordinator",
    image: "/public/WhatsApp Image 2024-08-10 at 08.44.49_84874ea3.jpg",
    phone: "+1 (123) 456-7890",
    email: "john.smith@example.com",
    description:
      "John has over 10 years of experience in event coordination. He specializes in creating memorable experiences and ensuring that every event runs smoothly. His attention to detail and leadership skills make him an invaluable asset to our team.",
  },
  {
    name: "Alice Johnson",
    role: "Decorations Specialist",
    image: "/public/WhatsApp Image 2024-08-10 at 08.45.11_568b4d8f - Copy.jpg",
    phone: "+1 (234) 567-8901",
    email: "alice.johnson@example.com",
    description:
      "Alice is a creative genius when it comes to decorations. With a background in interior design, she brings a unique touch to every event. Alice is passionate about transforming spaces into magical environments that captivate and inspire.",
  },
  {
    name: "Emily Parker",
    role: "Entertainment Manager",
    image: "/public/WhatsApp Image 2024-08-10 at 08.45.32_b935574d.jpg",
    phone: "+1 (345) 678-9012",
    email: "emily.parker@example.com",
    description:
      "Emily has a talent for selecting the perfect entertainment for any occasion. Her connections in the entertainment industry and her ability to read the crowd ensure that every event she manages is lively and engaging.",
  },
];

const Team = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10 px-5">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="relative rounded-lg overflow-hidden bg-sky-300 shadow-lg transition-transform duration-500 cursor-pointer"
          >
            <img
              className="w-50 h-39 object-cover"
              src={member.image}
              alt={member.name}
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center text-white px-4 transition-opacity duration-500 opacity-0 hover:opacity-100`}
            >
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-lg font-semibold">{member.role}</p>
              <p className="text-sm mt-4">{member.description}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href={`tel:${member.phone}`}>
                  <i className="fas fa-phone text-lg"></i>
                </a>
                <a href={`mailto:${member.email}`}>
                  <i className="fas fa-envelope text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
