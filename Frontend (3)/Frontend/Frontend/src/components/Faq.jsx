import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'When can we arrive?',
      answer: 'Hosts may arrive 45 minutes before your painting start time and guest arrival is 30 minutes prior to your painting start time. If your event begins at 2:30pm as host you may arrive at 1:45pm and guest arrival would be 2:00pm.',
    },
    {
      question: 'Can we decorate?',
      answer: 'Yes! It’s hard not to get inspired in our space. Our industrial vibe includes exposed brick, sleek & modern black painted walls, and hundreds of paintings hung on the walls. If hosts would like to bring temporary decorations to personalize the space that is OK with us. One 4×4’ table is provided for food set up.',
    },
    {
      question: 'How long does the painting take?',
      answer: 'Our sessions run about 2.5 hours long. Most of your time will be spent painting with plenty of time for sipping and socializing.',
    },
    {
      question: 'What do we paint?',
      answer: 'When you sign up for a private event, you will select one painting for your group to make from our art library. Each attendee will be able to create their painting with step-by-step help from one of our instructors.',
    },
    {
      question: 'Can I commission a custom painting?',
      answer: 'Absolutely! Have a mascot, family crest, corporate logo, or sentimental landscape you’d like to create? We charge a flat fee of $150 for a custom painting. We’ll work directly with you on inspiration and your vision for what you’d like to paint.',
    },
    {
      question: 'What about food and drinks?',
      answer: 'Food and drinks are available to purchase as add ons during the booking process only and cannot be added after checkout. Our bar is always open.',
    },
    {
      question: 'Can I bring my own food?',
      answer: 'Yes! If you’d like to bring in your own food that is fine with us. Per our liquor license we do not allow outside alcoholic beverages. One 4×4’ table is provided for food set up.',
    },
    {
      question: 'Do I need to bring anything?',
      answer: 'We provide everything you need to paint including the brushes, canvas, easels, and aprons. We also have cocktail sized paper plates, cups, napkins, and plastic utensils available for your use.',
    },
  ];

  return (
    <section className="bg-gray py-12">
      <div className="container mx-auto  px-4">
        <h2 className="text-3xl font-semibold  text-white text-center mb-8">FAQs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-black  text-white shadow-md  overflow-hidden">
              <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => toggle(index)}
              >
                <h5 className="text-xl font-medium">{faq.question}</h5>
              </button>
              {activeIndex === index && (
                <div className="p-4 border-t border-gray-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
