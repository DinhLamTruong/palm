import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HorizontalSlider = ({ items }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      {/* Nút trái */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
      >
        <FiChevronLeft className="text-xl" />
      </button>

      {/* Slider container */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide px-10"
      >
        {items.map((user) => (
          <div
            key={user.id}
            className="flex-shrink-0 w-[150px] bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-[150px] object-cover rounded-t-lg"
              />
              <button className="absolute top-2 right-2 bg-white/70 rounded-full p-[2px] hover:bg-white">
                ✕
              </button>
            </div>
            <div className="p-2 text-center">
              <h4 className="font-semibold">{user.name}</h4>
              <p className="text-sm text-gray-500">{user.followers}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Nút phải */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
      >
        <FiChevronRight className="text-xl" />
      </button>
    </div>
  );
};

export default HorizontalSlider;
