import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookProvider";

const BookDetails = () => {
  const { itemId } = useParams();
  const booksData = useLoaderData();
  const expectedBook = booksData.find((b) => String(b.bookId) == itemId);

  const {
    handleMarkAsRead,
    storedBook,
    setStoredBook,
    handleAddToWishlist,
    wishList,
    setWishlist,
  } = useContext(BookContext);

  return (
    <div className="container mx-auto">
      <div className="max-w-7xl mx-auto p-6 bg-white">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side: Image Holder */}
          <div className="w-full lg:w-1/2 bg-[#f3f3f3] rounded-lg p-12 flex justify-center items-center shadow-inner">
            <img
              src={expectedBook.image}
              alt={expectedBook.bookName}
              className="w-full max-w-sm h-auto drop-shadow-2xl rounded-sm"
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#131313] mb-4 font-serif">
              {expectedBook.bookName}
            </h1>
            <p className="text-xl font-medium text-[#131313]/80 mb-6">
              By : {expectedBook.author}
            </p>

            <hr className="border-t border-gray-200 my-4" />
            <p className="text-xl font-medium text-[#131313]/80">
              {expectedBook.category}
            </p>
            <hr className="border-t border-gray-200 my-4" />

            {/* Review Section */}
            <div className="mb-6">
              <p className="text-[#131313] leading-relaxed">
                <span className="font-bold">Review : </span>
                {expectedBook.review}
              </p>
            </div>

            {/* Tags */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-bold">Tag</span>
              {expectedBook.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#23be0a]/5 text-[#23be0a] px-4 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <hr className="border-t border-gray-200 mb-8" />

            {/* Book Info Table */}
            <div className="space-y-4 mb-10 max-w-md">
              <div className="grid grid-cols-2">
                <span className="text-[#131313]/70">Number of Pages:</span>
                <span className="font-bold text-[#131313]">
                  {expectedBook.totalPages}
                </span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-[#131313]/70">Publisher:</span>
                <span className="font-bold text-[#131313]">
                  {expectedBook.publisher}
                </span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-[#131313]/70">Year of Publishing:</span>
                <span className="font-bold text-[#131313]">
                  {expectedBook.yearOfPublishing}
                </span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-[#131313]/70">Rating:</span>
                <span className="font-bold text-[#131313]">
                  {expectedBook.rating}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => handleMarkAsRead(expectedBook)}
                className="btn btn-outline btn-info"
              >
                Mark as Read
              </button>
              <button
                onClick={() => handleAddToWishlist(expectedBook)}
                className="btn btn-info"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
