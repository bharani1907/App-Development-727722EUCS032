import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Only animate once
    });
  }, []);

  return (
    <div className="gallery-section container mx-auto mt-10 mb-20">
      {/* Section Title */}
      <div
        data-aos="fade-down"
        className="section_title grid gap-4 text-center mb-20"
      >
        <h1 className="sub_title text-3xl text-sky-400">Some Memorable Moments</h1>
        <h1 className="sub_title text-5xl font-bold">Our Gallery</h1>
        <p className="text-lg">
          Some memorable moments captured in frames with our clients and their family members.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Gallery Item */}
        {[
          {
            src: 'https://i.ibb.co/WpJZ4pv/Setting-Up-Birthday-Party-Decorations.webp',
            alt: 'Setting Up Birthday Party Decorations',
            title: 'Setting Up Birthday Party Decorations',
            description: 'Team setting up decorations for a birthday party.',
          },
          {
            src: 'https://i.ibb.co/SNrzBj5/Joyful-Birthday-Cake-Celebration.jpg',
            alt: 'Joyful Birthday Cake Celebration',
            title: 'Joyful Birthday Cake Celebration',
            description: 'Happy birthday cake with candles and balloons in the background.',
          },
          {
            src: 'https://i.ibb.co/DRZQKwp/Dancing-and-Music-Enjoyment-at-the-Party.jpg',
            alt: 'Delightful Birthday Buffet Enjoyment',
            title: 'Delightful Birthday Buffet Enjoyment',
            description: 'Guests enjoying the delicious birthday buffet.',
          },
          {
            src: 'https://i.ibb.co/RS3ZQZb/Smiling-Team-and-Celebrant-Poses.jpg',
            alt: 'Smiling Team and Celebrant Poses',
            title: 'Smiling Team and Celebrant Poses',
            description: 'Smiling team members posing with the birthday celebrant.',
          },
          {
            src: 'https://i.ibb.co/GxsVKbY/Creative-and-Colorful-Table-Setup.jpg',
            alt: 'Creative and Colorful Table Setup',
            title: 'Creative and Colorful Table Setup',
            description: 'Colorful and creative table setup for the birthday event.',
          },
          {
            src: 'https://i.ibb.co/XCDRXqL/Exciting-Party-Games-and-Activities.webp',
            alt: 'Exciting Party Games and Activities',
            title: 'Exciting Party Games and Activities',
            description: 'Exciting games and activities for the party attendees.',
          },
          {
            src: 'https://i.ibb.co/Vp1HSd9/Special-Birthday-Gift-Presentation.jpg',
            alt: 'Special Birthday Gift Presentation',
            title: 'Special Birthday Gift Presentation',
            description: 'Special birthday gift presentation to the celebrant.',
          },
          {
            src: 'https://i.ibb.co/kypRdqj/Live-Entertainment-with-Birthday-Performance.jpg',
            alt: 'Live Entertainment with Birthday Performance',
            title: 'Live Entertainment with Birthday Performance',
            description: 'Live entertainment with a birthday-themed performance.',
          },
       
        ].map((item, index) => (
          <div
            key={index}
            className={`gallery-item relative overflow-hidden rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg`}
            data-aos="fade-up"
            style={{
              gridRow: index % 2 === 0 ? 'span 3' : 'span 2',
              gridColumn: index % 2 === 0 ? 'span 2' : 'span 1',
            }}
          >
            <img
              className="w-full h-full object-cover"
              src={item.src}
              alt={item.alt}
            />
            <div className="flex items-end details p-6 h-full w-full absolute top-0 left-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div>
                <h1 className="text-white hover:text-sky-500 transition-all text-2xl font-bold">
                  {item.title}
                </h1>
                <p className="text-white">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
