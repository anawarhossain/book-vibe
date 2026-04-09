import React from "react";
import BannerImage from "../../assets/dating-play-book.png"

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto">
        {/* Banner Container */}
        <div className="bg-[#f3f3f3] rounded-lg px-8 py-12 md:px-20 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side: Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#131313] leading-tight mb-8 font-serif">
              Books to freshen up <br className="hidden md:block" /> your
              bookshelf
            </h1>
            <button className="bg-[#23be0a] hover:bg-[#1a8f08] text-white px-7 py-4 rounded-lg text-xl font-bold transition-all duration-300">
              View The List
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Book Shadow/Effect */}
              <div className="absolute inset-0 bg-black/10 blur-xl transform scale-95 translate-x-4 translate-y-4 rounded-lg"></div>

              {/* Book Cover Image */}
              <img
                src={BannerImage}
                alt="The Dating Playbook For Men"
                className="relative w-64 md:w-80 h-auto rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
