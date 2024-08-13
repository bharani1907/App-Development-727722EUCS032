import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS for animations

function Hcard() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of animations
      once: true, // Animation happens only once
    });
  }, []);

  // Array of services
  const services = [
    {
      id: '001',
      image: 'https://i.ibb.co/TbbK9TJ/Elegant-Venue.jpg',
      title: 'Elegant Venue',
      price: 'RS 20000',
      description:
        'Our Elegant Venue provides an enchanting backdrop for your birthday celebration. This sophisticated space, bathed in soft lights.',
    },
    {
      id: '002',
      image: 'https://i.ibb.co/LnQJt7W/Customized-Invitations.jpg',
      title: 'Customized Invitations',
      price: 'RS 30000',
      description:
        'Set the tone for your event with our Customized Invitations service. Our skilled designers craft invitations that perfectly mirror.',
    },
    {
      id: '003',
      image: 'https://i.ibb.co/hRrHPYr/Enchanting-Decorations.jpg',
      title: 'Enchanting Decorations',
      price: 'RS 40000',
      description:
        'Transform your venue into a magical wonderland with our Enchanting Decorations service. Drapes cascading like waterfalls, fairy lights.',
    },
    {
      id: '004',
      image: 'https://i.ibb.co/dL1VvRB/Gourmet-Catering.jpg',
      title: 'Gourmet Catering',
      price: 'RS 100000',
      description:
        'Indulge your guests in a culinary journey with our Gourmet Catering service. Our expert chefs curate a menu that tantalizes taste buds.',
    },
    {
      id: '005',
      image: 'https://i.ibb.co/W6qMgrq/Creative-Cakes-and-Desserts.webp',
      title: 'Creative Cakes and Desserts',
      price: 'RS 5000',
      description:
        'Satisfy your sweet cravings with our Creative Cakes and Desserts service. Our pastry chefs are artists, crafting delightful confections.',
    },
    {
      id: '006',
      image: 'https://i.ibb.co/ckSwN6R/Live-Entertainment.jpg',
      title: 'Live Entertainment',
      price: 'RS 80000',
      description:
        'Elevate your party with our Live Entertainment service. Whether you prefer the soulful tunes of a live band, the energetic beats of a DJ.',
    },
  ];

  return (
    <div className="services-section bg-gradient-to-r from-green-600 to-blue-400 py-12">
      {/* Title Section */}
      <div
        data-aos="fade-down"
        className="section_title container mx-auto grid gap-4 text-center mb-20"
      >
        <h1 className="sub_title text-3xl text-white">What We Offer</h1>
        <h1 className="sub_title text-5xl font-bold text-white">
          Awesome Services
        </h1>
        <p className="text-lg text-gray-200">
          Checkout what we can do for your party
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto p-4 max-w-7xl">
        {services.map((service) => (
          <div
            key={service.id}
            data-aos="fade-up"
            className="card service_card bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-lg overflow-hidden"
          >
            <figure className="relative max-h-72">
              <img
                className="card_banner w-full h-full object-cover"
                src={service.image}
                alt={service.title}
              />
              <div className="absolute h-full w-full flex items-end">
                <img className="w-full" src="/images/wave_card.png" alt="" />
              </div>
            </figure>
            <div className="card-body relative text-white py-10 px-4">
              <div className="absolute bellown-container -bottom-4 right-10">
                <img
                  src="/images/bellown.png"
                  className="bellown h-1/2 opacity-60"
                  alt=""
                />
              </div>
              <div className="price-container mb-4">
                <h3 className="text-xl font-semibold">{service.price}</h3>
              </div>
              <h2 className="card-title text-2xl font-bold mb-4">
                {service.title}
              </h2>
              <p className="leading-7 mb-6">{service.description}</p>
              <div className="card-actions">
                <a href={`/singleService/${service.id}`}>
                  <button className="mt-5 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition-colors duration-200 capitalize text-lg px-8 py-3 rounded-full text-white shadow-md">
                    View Details
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hcard;
