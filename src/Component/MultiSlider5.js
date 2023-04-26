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

export default function MultiSlider5() {
  return (
    <>
      <div className="container">
        <h4>Explore ethnic wear collection for the festivities | Local shops</h4>
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
                <img src="images/ethnic.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ethnic1.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ethnic2.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ethnic.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ethnic4.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ethnic5.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ethnic6.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ethnic7.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ethnic8.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ethnic9.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ethnic10.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ethnic5.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ethnic6.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ethnic7.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ethnic8.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/ethnic9.jpg" alt="car" />
                </SwiperSlide>
            </Swiper>
      </div>
    </>
  );
}