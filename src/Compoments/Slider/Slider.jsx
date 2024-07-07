import './Slider.css';
import {FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import slider1 from "../../assets/slider/slider-1.jpg"
import slider2 from "../../assets/slider/slider-2.jpg"
import slider3 from "../../assets/slider/slider-3.jpg"

import 'animate.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import {  Autoplay, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                effect={"fade"}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                navigation={{
                    nextEl: ".button-next",
                    prevEl: ".button-prev",
                }}
                modules={[Autoplay,Navigation, Pagination]}
                className="mainSlider"
            >

                <SwiperSlide>
                    <div>
                        <img className='slider-img'  src={slider1} alt="" />
                        <div className='slider-overlay'></div>
                        <div className="slider-info">
                            <h2  className="animate__animated animate__fadeInRight ">এখানে আপনার লেখা দিতে হবে</h2>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='slider-img'  src={slider2} alt="" />
                        <div className='slider-overlay'></div>
                        <div className="slider-info">
                            <h2  className="animate__animated animate__fadeInRight ">এখানে আপনার লেখা দিতে হবে</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='slider-img'  src={slider3} alt="" />
                        <div className='slider-overlay'></div>
                        <div className="slider-info">
                            <h2  className="animate__animated animate__fadeInRight ">এখানে আপনার লেখা দিতে হবে</h2>
                        </div>
                    </div>
                </SwiperSlide>
                
                
                


            <div className='slider-nav-bar'>
                <span  className='button-prev' ><FiArrowLeft /> </span>
                <span  className='button-next'>  <FiArrowRight/></span>
                
            </div>
        
        
        </Swiper>
            
        </div>
    );
};

export default Slider;