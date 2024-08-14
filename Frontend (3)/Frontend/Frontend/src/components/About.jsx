import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div className="bg-gray-100"> {/* Set a light background color for the entire page */}
      <Navbar />
      
      <header className="bg-gray-200 fixed w-full z-50 shadow-md"> {/* Added shadow for depth */}
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Content of the header can be placed here if needed */}
          </div>
          <div className="drawer-side lg:hidden">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu text-xl font-bold text-center p-4 w-80 min-h-full bg-base-300">
              <div className="close z-50 absolute right-0 pr-5">
                <div className="flex-none lg:hidden">
                  <label htmlFor="my-drawer-3">
                    <i className="fa-solid fa-xmark"></i>
                  </label>
                </div>
              </div>
              {/* Navigation items could be placed here */}
            </ul>
          </div>
        </div>
      </header>

      <div className="pt-20"> {/* Padding to avoid overlap with the fixed header */}
        <div
          className="hero min-h-[500px] md:min-h-[662px] flex items-center justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(/public/Servicebanner.webp)',
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-70 absolute inset-0"></div> {/* Full overlay */}
          <div className="hero-content z-10 text-center text-white"> {/* White text for contrast */}
            <div className="max-w-2xl px-6 md:px-10">
              <h2 className="text-4xl font-bold mb-4">About Us</h2>
              <p className="text-xl leading-8">
                We are a team of passionate people who are passionate about our services.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-16 px-6 md:px-10">
          <p className="text-xl md:text-2xl mb-12 leading-10 text-gray-800">
            Welcome to Funtastic Birthdays, where dreams meet reality and every birthday celebration becomes a memorable masterpiece! We are a dedicated team of passionate individuals who believe in the magic of birthdays. Our mission is to turn your special day into an extraordinary event filled with joy, laughter, and cherished memories.
          </p>

          <Section
            title="Our Mission"
            content="At Funtastic Birthdays, we understand the importance of birthdays. It's not just a date on the calendar; it's a momentous occasion that deserves to be celebrated in style. Our mission is to relieve you of all the planning stress and make your birthday party a reflection of your personality and dreams. Whether you're planning a whimsical children's party or an elegant soirée for adults, we are here to transform your vision into reality."
          />

          <Section
            title="Our Expertise"
            content="What sets us apart is our unwavering commitment to perfection and creativity. Our talented team comprises seasoned event planners, innovative designers, culinary artists, and skilled entertainers. With years of experience in the event planning industry, we have mastered the art of creating unique and personalized birthday experiences tailored to your desires."
          />

          <Section
            title="Our Approach"
            content="We believe that every birthday is unique, and thus, every celebration should be one-of-a-kind. Our approach is highly personalized; we take the time to understand your preferences, themes, and ideas. We meticulously plan every detail, from the invitations to the decorations, entertainment, and catering, ensuring that your birthday celebration surpasses all expectations."
          />

          <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
          <ul className="text-lg list-disc pl-6 mb-12 leading-8 text-gray-800">
            <ListItem title="Creative Themes" description="From enchanting fairy tales to glamorous Hollywood nights, we bring your favorite themes to life with creative and immersive decorations." />
            <ListItem title="Experienced Entertainers" description="We have a wide range of entertainers who are passionate about their work, and we are always looking for new ones to join our team." />
            <ListItem title="Experienced Designers" description="We have a wide range of designers who are passionate about their work, and we are always looking for new ones to join our team." />
            <ListItem title="Experienced Event Planners" description="We have a wide range of event planners who are passionate about their work, and we are always looking for new ones to join our team." />
            <ListItem title="Experienced Culinary Artists" description="We have a wide range of culinary artists who are passionate about their work, and we are always looking for new ones to join our team." />
            <ListItem title="Experienced Photographers" description="We have a wide range of photographers who are passionate about their work, and we are always looking for new ones to join our team." />
            <ListItem title="Experienced Musicians" description="We have a wide range of musicians who are passionate about their work, and we are always looking for new ones to join our team." />
            <ListItem title="Gourmet Delights" description="From enchanting fairy tales to glamorous Hollywood nights, we bring your favorite themes to life with creative and immersive decorations." />
            <ListItem title="Stress-Free Planning" description="Sit back, relax, and enjoy the festivities while we handle all the logistics, ensuring a seamless and stress-free experience for you and your guests." />
          </ul>

          <h3 className="text-2xl font-semibold mt-12 mb-4">Let's Create Magic Together!</h3>
          <p className="text-lg mb-12 leading-8 text-gray-800">
            Planning a birthday party should be a joyous and exciting experience. With Nahid Birthday party planner, you can expect a celebration that reflects your personality, style, and dreams. Contact us today, and let's embark on a journey to create an unforgettable birthday party that will be remembered for a lifetime.
          </p>
        </div>
      </div>

      {/* Ensure no margin or padding causes a border above the footer */}
      <Footer />
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, content }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-lg leading-8 text-gray-800">{content}</p>
  </div>
);

// Reusable ListItem Component
const ListItem = ({ title, description }) => (
  <li className="mb-4">
    <strong>{title}:</strong> {description}
  </li>
);

export default About;
