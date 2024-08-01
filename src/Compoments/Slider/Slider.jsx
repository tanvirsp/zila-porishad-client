import './Slider.css';
import {FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import slider1 from "../../assets/slider/slider-1.jpg"
import slider2 from "../../assets/slider/slider-2.jpg"
import slider3 from "../../assets/slider/slider-3.jpg"
import slider4 from "../../assets/slider/slider-4.jpg"
import slider5 from "../../assets/slider/slider-5.jpg"

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
                            <h2  className="animate__animated animate__fadeInRight "> চিত্রাঙ্কন ও কবিতা আবৃত্তি প্রতিযোগিতায় বিজয়ী শিক্ষার্থীদের মাঝে পুরস্কার বিতরণ</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='slider-img'  src={slider2} alt="" />
                        <div className='slider-overlay'></div>
                        <div className="slider-info">
                            <h2  className="animate__animated animate__fadeInRight ">তিনতলা বিশিষ্ট অডিটোরিয়াম কাম মাল্টিপারপাস হল, গণগ্রন্থাগার ও রেস্ট হাউজ নির্মাণ কাজের ভিত্তিপ্রস্তর স্থাপন </h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='slider-img'  src={slider5} alt="" />
                        <div className='slider-overlay'></div>
                        <div className="slider-info">
                            <h2  className="animate__animated animate__fadeInRight ">জেলা পরিষদ, জামালপুরের পক্ষ হতে বসন্তকে বরণ ও শুভেচ্ছা বিনিময়</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='slider-img'  src={slider4} alt="" />
                        <div className='slider-overlay'></div>
                        <div className="slider-info">
                            <h2  className="animate__animated animate__fadeInRight ">জেলা পরিষদ, জামালপুরের পক্ষ হতে শীতবস্ত্র বিতরণ</h2>
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