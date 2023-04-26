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

export default function MultiSlider6() {
  return (
    <>
      <div className="container">
        <h4>Frequently repurchased in Pet Supplies</h4>
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
                <img src="images/pet.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/pet1.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/pet2.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/pet3.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/pet4.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/pet5.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/pet6.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/pet7.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/pet8.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/pet9.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/pet10.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/pet5.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/pet6.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/pet7.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/pet8.jpg" alt="car" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/pet9.jpg" alt="car" />
                </SwiperSlide>
            </Swiper>
      </div>
    </>
  );
}