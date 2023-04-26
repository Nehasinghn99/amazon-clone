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

export default function MultiSlider4() {
  return (
    <>
      <div className="container">
        <h4>Frequently repurchased in Beauty and Personal Care</h4>
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
                <img src="images/beauty.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/beauty1.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/beauty2.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/beauty3.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/beauty4.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/beauty5.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/beauty6.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/beauty7.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/beauty8.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/beauty9.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/beauty10.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/beauty5.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/beauty6.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/beauty7.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/beauty8.jpeg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/beauty9.jpeg" alt="car" />
                </SwiperSlide>
            </Swiper>
      </div>
    </>
  );
}