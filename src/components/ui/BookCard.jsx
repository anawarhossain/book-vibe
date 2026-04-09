import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const BookCard = ({ book }) => {
  return (
    <div>
      <div
        className=" p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 cursor-pointer"
      >
        {/* Image Container */}
        <div className="bg-[#f3f3f3] rounded-lg py-8 flex justify-center mb-6">
          <img
            src={book.image}
            alt="Book Cover"
            className="h-40 w-auto shadow-xl"
          />
        </div>

        {/* Tags */}
        <div className="flex gap-3 mb-4">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#23be0a]/5 text-[#23be0a] px-4 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Title */}
        <h2 className="text-2xl font-bold text-[#131313] mb-3 font-serif">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-[#131313]/80 font-medium mb-5">By : {book.author}</p>

        {/* Divider */}
        <hr className="border-t border-dashed border-gray-300 mb-4" />

        {/* Footer Info */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium text-lg">
            {book.publisher}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">{book.rating}</span>
            <CiStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
