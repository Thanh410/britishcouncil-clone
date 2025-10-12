import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper type
import "./slider.scss";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import type { Course } from "../../../types/courseType";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "../cards/card";

interface SliderCoursesProps {
  courses: Course[];
}

const SliderCourses = ({ courses }: SliderCoursesProps) => {
  const swiperRef = useRef<SwiperType | null>(null); // Define type for the ref

  return (
    <div className="slider__container">
      <div className="slider__wrapper">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Set the swiper reference
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <Card
                img={course.image}
                title={course.title}
                description={course.description}
                borderRadius="20px 0"
                width="100%"
                padding="0"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-navigation">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="btn__prev"
          >
            <ChevronLeft width={30} height={30} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="btn__next"
          >
            <ChevronRight width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderCourses;
