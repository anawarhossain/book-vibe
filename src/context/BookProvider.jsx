import React, { createContext, useState } from "react";
import { Bounce, toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBook, setStoredBook] = useState([]);
  const [wishList, setWishlist] = useState([]);

  const handleMarkAsRead = (currenBook) => {
    const isExistInWishlist = wishList.find(
      (book) => book.bookId === currenBook.bookId,
    );

    if (isExistInWishlist) {
      toast.error(`This book is already in your wishlist.`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    const isExistBook = storedBook.find(
      (book) => book.bookId === currenBook.bookId,
    );

    if (isExistBook) {
      toast.error(`${currenBook.bookName} is already marked as read.`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      setStoredBook([...storedBook, currenBook]);
      toast.success(`${currenBook.bookName} marked as read.`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }

    console.log(currenBook, storedBook, "Book marked as read.");
  };

  const handleAddToWishlist = (currenBook) => {
    const isExistInReadList = storedBook.find(
      (book) => book.bookId === currenBook.bookId,
    );

    if (isExistInReadList) {
      toast.error(`This book is already in your read list.`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }
    const isExistWish = wishList.find(
      (book) => book.bookId === currenBook.bookId,
    );

    if (isExistWish) {
      toast.error(`${currenBook.bookName} is already in your wishlist.`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      setWishlist([...wishList, currenBook]);
      toast.success(`${currenBook.bookName} added to wishlist.`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }

    console.log(currenBook, wishList, "Book added to wishlist.");
  };

  const data = {
    storedBook,
    setStoredBook,
    handleMarkAsRead,
    wishList,
    setWishlist,
    handleAddToWishlist,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
