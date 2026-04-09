import React from "react";
import BannerImage from "../../assets/dating-play-book.png"

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 container mx-auto rounded-lg">
        <div className="hero-content flex justify-between items-center lg:flex-row-reverse p-20 gap-8">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold ">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className="btn btn-success rounded-lg">
              View The List
            </button>
          </div>
          <img
            src={BannerImage}
            className="max-w-sm rounded-lg shadow-2xl flex justify-center items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
