import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner from './banner.jpg'
import banner1 from './banner1.jpg'
import banner2 from './banner2.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Sliders() {

const [SlideNumber,SetSlideNumber] = useState(0);

function sizeofscreen(){
  const windowWidth=  window.innerWidth;
  
  if (windowWidth<=900 && windowWidth>=490 ){
    SetSlideNumber(2);
    

   }
   else if(windowWidth<490){
    SetSlideNumber(1);

   }
   else {
    SetSlideNumber(3);
   }
  
}

useEffect( () => {
  window.addEventListener("resize",sizeofscreen);
  sizeofscreen();
  
},[]);
if(SlideNumber>0){
  return (

    
    <>
    
    <h1 className="Featured"> Featured</h1>
    {console.log(SlideNumber)}
      <Swiper
        slidesPerView={SlideNumber}
        spaceBetween={10}
        slidesPerGroup={SlideNumber}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        
        

        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={banner}></img></SwiperSlide>
        <SwiperSlide><img src={banner1}></img></SwiperSlide>
        <SwiperSlide><img src={banner2}></img></SwiperSlide>
        <SwiperSlide><img src={banner}></img></SwiperSlide>
        <SwiperSlide><img src={banner1}></img></SwiperSlide>
        <SwiperSlide><img src={banner2}></img></SwiperSlide>
        <SwiperSlide><img src={banner}></img></SwiperSlide>
        <SwiperSlide><img src={banner1}></img></SwiperSlide>
        <SwiperSlide><img src={banner2}></img></SwiperSlide>
        <SwiperSlide><img src={banner}></img></SwiperSlide>
        <SwiperSlide><img src={banner1}></img></SwiperSlide>
        <SwiperSlide><img src={banner2}></img></SwiperSlide>
      </Swiper>
    </>
  );
      }
      else{

      }
}
