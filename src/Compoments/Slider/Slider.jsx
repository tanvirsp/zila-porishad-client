import './Slider.css';
// import {FiArrowLeft, FiArrowRight } from 'react-icons/fi';



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
import HomePageStore from '../../Store/HomePageStore';
import { useEffect } from 'react';
import SliderSkeleton from '../../Skeletons/SliderSkeleton';
import Empty from '../Empty';

const Slider = () => {
    const {SliderList, SliderListRequest } = HomePageStore();

    useEffect( ()=>{
        (async()=>{
            SliderList === null && SliderListRequest()
        })()
    } ,[])


   


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

              {
                SliderList === null ? <SliderSkeleton /> : 
                SliderList.length === 0 ? <Empty />  :
                SliderList.map ( (item, index) =>{
                    return(
                        <SwiperSlide key={index}>
                            <div>
                                <img className='slider-img' crossOrigin ="anonymous"  src={`${import.meta.env.VITE_URL}/${item.thumbnail}`} alt="Picture" />
                                <div className='slider-overlay'></div>
                                <div className="slider-info">
                                    <h2  className="animate__animated animate__fadeInRight ">{item.title} </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
              }

{/* 
            <div className='slider-nav-bar'>
                <span  className='button-prev' ><FiArrowLeft /> </span>
                <span  className='button-next'>  <FiArrowRight/></span>
                
            </div> */}
        
        
        </Swiper>
            
        </div>
    );
};

export default Slider;