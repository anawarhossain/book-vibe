const getAllReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem("readList");
  // console.log(allReadList, "All read list from localDB");
  return allReadList ? JSON.parse(allReadList) : [];
};

const addToReadListInLocalDB = (book) => {
  const allReadBooks = getAllReadListFromLocalDB();

  const isExistReadBook = allReadBooks.find((b) => b.bookId === book.bookId);

  if (isExistReadBook) {
    console.log(`${book.bookName} is already marked as read in localDB.`);
    return;
  } else {
    console.log(`${book.bookName} marked as read in localDB.`);
    localStorage.setItem("readList", JSON.stringify([...allReadBooks, book]));
  }
};


const getAllWishListFromLocalDB = () => {
    const allWishList = localStorage.getItem("wishList");
    return allWishList ? JSON.parse(allWishList) : [];
}

const addToWishListInLocalDB = (book) => {
    const allWishBooks = getAllWishListFromLocalDB();

    const isExistWishBook = allWishBooks.find((b) => b.bookId === book.bookId);

    if (isExistWishBook) {
        console.log(`${book.bookName} is already in your wishlist in localDB.`);
        return;
    } else {
        console.log(`${book.bookName} added to wishlist in localDB.`);
        localStorage.setItem("wishList", JSON.stringify([...allWishBooks, book]));
    }
};

export { getAllReadListFromLocalDB, addToReadListInLocalDB, getAllWishListFromLocalDB, addToWishListInLocalDB };
