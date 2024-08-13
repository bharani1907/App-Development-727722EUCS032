import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Only animate once
    });
  }, []);

  return (
    <div className="clients_container my-28 bg-dark-300 rounded-xl p-2 md:p-10">
      <div className="bg_gradiand mx-auto">
        <div className="desc_cons grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Description Section */}
          <div className="desc lg:p-0 p-5 grid lg:text-start text-center items-center">
            <div className="grid gap-4 text-white">
              <h1 className="sub_tile text-3xl">What our clients say</h1>
              <h1 className="sub_tile text-5xl font-bold">Happy Clients</h1>
              <p className="text-xl leading-9">
                Discover the heartwarming testimonials from our delighted clients, sharing their experiences of seamless event planning and unforgettable celebrations. Let their stories inspire your next extraordinary event.
              </p>
              <div>
                <a href="/contact">
                <button className="mt-5 bg-sky-600 hover:bg-sky-700 transition-colors duration-200 capitalize text-lg px-8 py-3 rounded-full text-white shadow-md">
                Review Us
              </button>
              </a>
              
              </div>
                   
            </div>
          </div>
          {/* Testimonial Slider Section */}
          <div className="verticle_slide h-[500px]  rounded-lg flex justify-end">
            <Swiper
              direction={'vertical'}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              spaceBetween={10}
              slidesPerView={3}
            >
              <SwiperSlide>
                <div className="cradrs_items ">
                  <div className="crads p-10 bg-black rounded-lg relative">
                    
                    <div className="content">
                    
                      <p className="md:text-lg text-xs leading-7">
                        The birthday party planners did an excellent job. The event flowed seamlessly, and the activities kept the kids engaged throughout. Although there were...
                      </p>
                      <h1 className="font-bold leading-7 mt-5 text-white-900 capitalize">
                        Michael Davis
                      </h1>
                      <h1 className="font-semibold leading-7 text-gray-500 capitalize">
                        Businessman
                      </h1>
                      
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cradrs_items">
                  <div className="crads p-10 bg-black rounded-lg relative">
                    
                    <div className="content">
                    
                      <p className="md:text-lg text-xs leading-7">
                        I want to thank the entire team for making my husband's birthday so memorable. The theme they suggested was a hit, and the decorations were breathtaking...
                      </p>
                      <h1 className="font-bold leading-7 mt-5 text-white-900 capitalize">
                        Linda Wilson
                      </h1>
                      <h1 className="font-semibold leading-7 text-white-500 capitalize">
                        Businessman
                      </h1>
                      
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cradrs_items">
                  <div className="crads p-10 bg-black rounded-lg relative">
                    
                    <div className="content">
                    
                      <p className="md:text-lg text-xs leading-7">
                        I was amazed at how the birthday party planners transformed our backyard into a dreamy space for my 40th birthday celebration. The lighting, music, and...
                      </p>
                      <h1 className="font-bold leading-7 mt-5 text-white-900 capitalize">
                        David Lee
                      </h1>
                      <h1 className="font-semibold leading-7 text-white-900 capitalize">
                        Businessman
                      </h1>
                      
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cradrs_items">
                  <div className="crads p-10 bg-black rounded-lg relative">
                    
                    <div className="content">
                   
                      <p className="md:text-lg text-xs leading-7">
                        The birthday party organized by the team was beyond my expectations! From the decorations to the entertainment, everything was perfect. My daughter had...
                      </p>
                      <h1 className="font-bold leading-7 mt-5 text-white-900 capitalize">
                        Alice Johnson
                      </h1>
                      <h1 className="font-semibold leading-7 text-white-500 capitalize">
                        Businessman
                      </h1>
                      
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cradrs_items">
                  <div className="crads p-10 bg-black rounded-lg relative">
                    
                    <div className="content">
                    
                      <p className="md:text-lg text-xs leading-7">
                        I am highly impressed with the professionalism and creativity of the birthday party planning team. They paid attention to every detail and created a m...
                      </p>
                      <h1 className="font-bold leading-7 mt-5 text-white-900 capitalize">
                        John Smith
                      </h1>
                      <h1 className="font-semibold leading-7 text-white-500 capitalize">
                        Businessman
                      </h1>
                     
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cradrs_items">
                  <div className="crads p-10 bg-black rounded-lg relative">
                    
                    <div className="content">
                   
                      <p className="md:text-lg text-xs leading-7">
                        I cannot express how grateful I am for the fantastic birthday party organized by this team. The coordination, theme selection, and execution were flaw...
                      </p>
                      <h1 className="font-bold leading-7 mt-5 text-white-900 capitalize">
                        Emily Parker
                      </h1>
                      <h1 className="font-semibold leading-7 text-white-500 capitalize">
                        Businessman
                      </h1>
                    
                      

                    
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
