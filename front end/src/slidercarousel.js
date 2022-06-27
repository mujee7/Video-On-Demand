import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";
import './SliderCarousel.css'
import {Link} from 'react-router-dom'

// import required modules
import { Pagination, Navigation } from "swiper";

export default function SliderCarousel(props) {
console.log(props)
const [SlideNumber,SetSlideNumber] = useState(0);

function sizeofscreen(){
  const windowWidth=  window.innerWidth;
  
  if (windowWidth<=1030 && windowWidth>=500 ){
    SetSlideNumber(5);
    

   }
   else if(windowWidth<500){
    SetSlideNumber(4);

   }
   else {
    SetSlideNumber(6);
   }
  
}

useEffect( () => {
  window.addEventListener("resize",sizeofscreen);
  sizeofscreen();
  
},[]);
if(SlideNumber>0){
  return (

    
    <>
    
    <h1 className="Featured" style={{color:"white"}}> {props.heading}</h1>
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
        className="mySwiper11"
      >
      
        {props.data.data.map((element)=>
        

          
        <SwiperSlide className="mySwiper1" style={{backgroundColor:"black"}}> <Link to={`/Movies/${element._id}`} style={{height:"100%"}}><img src={element.image} className="dada" style={{height:"100%",width:"100%"}}>
          
          </img></Link></SwiperSlide>
        
          
        )}
        
      </Swiper>
    </>
  );
      }
      else{

      }
}
