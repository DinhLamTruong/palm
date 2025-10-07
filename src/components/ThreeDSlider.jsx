import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const ThreeDSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const images = [
    {
      src: "src/assets/Img/V-Lake.jpg",
      title: "Giải pháp V-Lake:",
      text: "Nền tảng xử lý dữ liệu",
    },
    {
      src: "src/assets/Img/V-Transform.jpg",
      title: "Giải pháp V-Transform:",
      text: "Nền tảng chuyển đổi số",
    },
    {
      src: "src/assets/Img/V-Lang.jpg",
      title: "Giải pháp V-Lang:",
      text: "AI hỗ trợ dịch thuật",
    },
    {
      src: "src/assets/Img/V-lab.jpg",
      title: "Giải pháp V-Lab:",
      text: "Thiết kế và phát triển phần mềm",
    },
    {
      src: "src/assets/Img/V-Azur.jpg",
      title: "Giải pháp V-Azur:",
      text: "Giải pháp an ninh mạng",
    },
  ];

  const handleClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <div className="w-full py-10 bg-white">
      <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">
        Giải pháp nổi bật
      </h2>

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={120}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2,
          slideShadows: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.realIndex);
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="max-w-6xl h-90 mx-auto pb-16"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => handleClick(index)}
              className={`relative rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "scale-110 translate-y-[-20px] mt-10 z-50"
                  : "scale-95 opacity-80"
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-74 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full text-center text-white text-lg font-semibold bg-gradient-to-t from-black/60 via-black/20 to-transparent py-3">
                {item.title} {item.text}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThreeDSlider;
