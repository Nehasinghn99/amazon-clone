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

export default function MultiSlider2() {
  return (
    <>
      <div className="container">
        <h4>Refresh your home ambiance | Local shops collection</h4>
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
                <img src="images/ambiance.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ambiance1.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ambiance2.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ambiance3.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ambiance4.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ambiance5.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ambiance6.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ambiance7.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ambiance8.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ambiance9.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ambiance10.jpeg" alt="car" />
                </SwiperSlide>
            </Swiper>
      </div>
    </>
  );
}