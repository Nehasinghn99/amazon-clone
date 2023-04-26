import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./MultiSlider.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function MultiSlider8() {
  return (
    <>
      <div className="container">
        <h4>Customers who viewed items in your browsing history also viewed</h4>
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                slidesPerGroup={6}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
        
                <SwiperSlide>
                <img src="images/glass.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/glass1.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/glass2.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/glass3.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/glass4.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/glass5.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/glass6.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/glass7.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/glass8.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/glass9.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/glass10.jpeg" alt="car" />
                </SwiperSlide>
            </Swiper>
      </div>
    </>
  );
}