import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import ReadList from "../../components/ui/ReadList";
import WishList from "../../components/ui/WishList";

const ListedBooks = () => {
  const [activeTab, setActiveTab] = useState("read");

  const {
    handleMarkAsRead,
    storedBook,
    setStoredBook,
    handleAddToWishlist,
    wishList,
    setWishlist,
  } = useContext(BookContext);

  console.log(
    storedBook,
    wishList,
    "BookContext data in BookDetails component.",
  );

  return (
    <div className="container mx-auto space-y-6">
      <div className="bg-gray-200 p-4 rounded-lg">
        <h1 className="text-4xl text-center">Books</h1>
      </div>
      <div className=" mx-auto w-25 bg-green-400">
        <select
          defaultValue="Pick a Runtime"
          className="select bg-green-500 text-white"
        >
          <option disabled={false}>Sort By </option>
          <option>npm</option>
          <option>Bun</option>
          <option>yarn</option>
        </select>
      </div>
      <div className="w-full mx-auto mt-10 px-4">
        {/* Tab Container */}
        <div className="flex items-center border-b border-slate-200">
          {/* Read Books Tab */}
          <button
            onClick={() => setActiveTab("read")}
            className={`px-6 py-3 text-sm font-medium transition-all duration-200 rounded-t-lg border-x border-t -mb-px ${
              activeTab === "read"
                ? "bg-white border-slate-200 text-slate-800"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            Read Books
          </button>

          {/* Wishlist Books Tab */}
          <button
            onClick={() => setActiveTab("wishlist")}
            className={`px-6 py-3 text-sm font-medium transition-all duration-200 rounded-t-lg border-x border-t -mb-px ${
              activeTab === "wishlist"
                ? "bg-white border-slate-200 text-slate-800"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            Wishlist Books
          </button>
        </div>

        {/* Content Area (Optional) */}
        <div className="py-6">
          {activeTab === "read" ? (
            <div className="flex flex-col gap-4">
              {storedBook.map((book) => {
                return (
                  <div key={book.bookId} className="">
                    <ReadList book={book} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {wishList.map((book) => {
                return (
                  <div key={book.bookId} className="">
                    <WishList book={book} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
