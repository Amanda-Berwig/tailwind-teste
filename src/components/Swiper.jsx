import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // IMPORTA OS MÓDULOS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlideDataFest from "./Slides/SlideDataFest";
import SlideBeleza from "./Slides/SlideBeleza";
import SlideCalcado from "./Slides/SlideCalcado";

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
        <SlideDataFest />
      </SwiperSlide>
      <SwiperSlide>
        <SlideBeleza />
      </SwiperSlide>
      <SwiperSlide>
        <SlideCalcado />
      </SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
  );
}
