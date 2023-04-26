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

export default function MultiSlider7() {
  return (
    <>
      <div className="container">
        <h4>Up to 45% off | Handpicked furniture collection from local shops</h4>
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
                <img src="images/furniture.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/furniture1.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/furniture2.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/furniture3.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/furniture4.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/furniture5.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/furniture6.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/furniture7.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/furniture8.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/furniture9.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/furniture10.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/furniture5.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/furniture6.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/furniture7.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/furniture8.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/furniture9.jpg" alt="car" />
                </SwiperSlide>
            </Swiper>
      </div>
    </>
  );
}