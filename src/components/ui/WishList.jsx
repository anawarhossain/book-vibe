import React from 'react';
import { BiMapPin } from 'react-icons/bi';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';

const WishList = ({book}) => {
    return (
      <div>
        <div className="w-full mx-auto p-2 bg-white border border-slate-200 rounded-lg flex flex-col md:flex-row gap-8 items-center shadow-sm">
          {/* Left: Book Cover Image Container */}
          <div className="w-full md:w-64 h-64 bg-slate-100 rounded-2xl flex items-center justify-center p-6">
            <img
              src={book.image}
              alt={book.bookName}
              className="h-full object-contain drop-shadow-xl"
            />
          </div>

          {/* Right: Book Details */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
              {book.bookName}
            </h2>
            <p className="text-slate-600 font-medium mb-4">
              By : {book.author}
            </p>

            {/* Tags & Year */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="font-bold text-slate-800 text-sm">Tag</span>
              <div className="flex gap-2">
                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#23be0a]/5 text-[#23be0a] px-4 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-slate-500 text-sm ml-auto md:ml-4">
                <BiMapPin size={16} />
                <span>Year of Publishing: {book.yearOfPublishing}</span>
              </div>
            </div>

            {/* Publisher & Pages */}
            <div className="flex gap-6 mb-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <FaUserSecret size={18} />
                <span>Publisher: {book.publisher}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiFileText size={18} />
                <span>Page {book.totalPages}</span>
              </div>
            </div>

            <hr className="border-slate-100 mb-6" />

            {/* Footer Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-blue-50 text-blue-500 px-5 py-2 rounded-full text-sm font-medium">
                Category: {book.category}
              </span>
              <span className="bg-orange-50 text-orange-400 px-5 py-2 rounded-full text-sm font-medium">
                Rating: {book.rating}
              </span>
              <button className="bg-[#23BE0A] hover:bg-green-600 transition-colors text-white px-6 py-2 rounded-full font-semibold text-sm ml-auto">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WishList;