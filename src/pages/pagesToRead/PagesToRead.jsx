import React, { useContext } from "react";
import CustomShapeBarChart from "../../components/ui/CustomShapeBarChart";
import { BookContext } from "../../context/BookProvider";

const PagesToRead = () => {
  const { storedBook } = useContext(BookContext);

  const chartData =
    storedBook?.map((book) => ({
      // Use a short name or slice it so the X-Axis doesn't get too crowded
      bookName:
        book.bookName.length > 15
          ? book.bookName.substring(0, 15) + "..."
          : book.bookName,
      // FORCE totalPages to be a number
      totalPages: Number(book.totalPages),
    })) || [];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-8 text-center text-slate-800">
        Reading Progress
      </h2>

      {chartData.length > 0 ? (
        <CustomShapeBarChart chartData={chartData} />
      ) : (
        /* Changed h-100 to h-64 or h-96 for visibility */
        <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-xl">
          <p className="text-slate-500">No books found in your "Read" list.</p>
        </div>
      )}
    </div>
  );
};

export default PagesToRead;
