import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import ReadList from "../../components/ui/ReadList";
import WishList from "../../components/ui/WishList";

const ListedBooks = () => {
  const [activeTab, setActiveTab] = useState("read");
  const [sortOption, setSortOption] = useState("");

  

  console.log(sortOption);
  const {
    handleMarkAsRead,
    storedBook,
    setStoredBook,
    handleAddToWishlist,
    wishList,
    setWishlist,
  } = useContext(BookContext);


  const [filteredReadList, setFilteredReadList] = useState(storedBook);

  useEffect(() => {
    if (sortOption) {
      if (sortOption === "pages") {
        const sorteData = [...storedBook].sort((a, b) => a.totalPages - b.totalPages);
        setFilteredReadList(sorteData);
      } else if (sortOption === "rating") {
        const sorteData = [...storedBook].sort((a, b) => b.rating - a.rating);
        setFilteredReadList(sorteData);
      }
    }
  }, [sortOption, storedBook]);


  const [filteredWishList, setFilteredWishList] = useState(wishList);

  useEffect(() => {
    if (sortOption) {
      if (sortOption === "pages") {
        const sorteData = [...wishList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredWishList(sorteData);
      } else if (sortOption === "rating") {
        const sorteData = [...wishList].sort((a, b) => b.rating - a.rating);
        setFilteredWishList(sorteData);
      }
    }
  }, [sortOption, wishList]);



  return (
    <div className="container mx-auto space-y-6">
      <div className="bg-gray-200 p-4 rounded-lg">
        <h1 className="text-4xl text-center">Books</h1>
      </div>
      {/* <div className=" mx-auto w-25 bg-green-400">
        <select
          defaultValue="Pick a Runtime"
          className="select bg-green-500 text-white"
        >
          <option disabled={false}>Sort By </option>
          <option>npm</option>
          <option>Bun</option>
          <option>yarn</option>
        </select>
      </div> */}
      <div className="text-center">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By {sortOption} ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortOption("pages")}>
              <a>Page</a>
            </li>
            <li onClick={() => setSortOption("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
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
              {filteredReadList.length === 0 && (
                <div className="text-center text-slate-500">
                  No books marked as read yet. Start reading and mark your books
                  here!
                </div>
              )}

              {filteredReadList.map((book) => {
                return (
                  <div key={book.bookId} className="">
                    <ReadList book={book} sortOption={sortOption} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filteredWishList.length === 0 && (
                <div className="text-center text-slate-500">
                  No books in wishlist yet. Start adding books to your wishlist!
                </div>
              )}

              {filteredWishList.map((book) => {
                return (
                  <div key={book.bookId} className="">
                    <WishList book={book} sortOption={sortOption} />
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
