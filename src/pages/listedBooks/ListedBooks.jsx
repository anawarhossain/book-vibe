import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";

const ListedBooks = () => {
  const {
    handleMarkAsRead,
    storedBook,
    setStoredBook,
    handleAddToWishlist,
    wishList,
    setWishlist,
  } = useContext(BookContext);

  console.log(storedBook, wishList, "BookContext data in BookDetails component.");

  return <div>Listed Books</div>;
};

export default ListedBooks;
