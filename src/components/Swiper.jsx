import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // IMPORTA OS MÓDULOS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperSlideD from "./Slides/SwiperSlideD";

export default function MySwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination]} // USA OS MÓDULOS
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
        <SwiperSlideD />
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
  );
}
