import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/styles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function SliderComponent() {
    return (
        
        <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1 className="text-[var(--text-dark)] mt-4">Services</h1>
        </div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                        alt="slide 1"
                    />
                    <div className="text-lg text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]">Traditional Design</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                        alt="slide 2"
                    />
                    <div className="text-center">Building Connection</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                        alt="slide 3"
                    />
                    <div className="text-center">You own Design</div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}