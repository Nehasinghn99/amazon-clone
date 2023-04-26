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

export default function MultiSlider1() {
  return (
    <>
      <div className="container">
        <h4>Frequently repurchased in Grocery</h4>
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
                <img src="images/grocery.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/grocery1.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/grocery2.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/grocery3.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/grocery4.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/grocery5.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/grocery6.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/grocery7.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/grocery4.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/grocery5.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/grocery6.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/grocery7.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/grocery1.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/grocery2.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/grocery3.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/grocery3.jpeg" alt="car" />
                </SwiperSlide>
            </Swiper>
      </div>
    </>
  );
}