import React, { use } from "react";
import BookCard from "../ui/BookCard";

const booksPromise = fetch("/data/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books);

  return (
    <div className="container mx-auto">
      <h1 className="text-center mt-5 mb-5 text-4xl font-bold">Books</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {books.map((book) => {
          return (
            <div key={book.bookId}>
              <BookCard book={book} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBooks;
