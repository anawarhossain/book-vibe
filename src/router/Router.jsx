import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import ListedBooks from "../pages/listedBooks/ListedBooks";
import PagesToRead from "../pages/pagesToRead/PagesToRead";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import SignIn from "../pages/sign/SignIn";
import SignUp from "../pages/sign/SignUp";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <div className="loading">Loading...</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/book-details/:itemId",
        element: <BookDetails />,
        loader: () => fetch("/data/booksData.json").then((res) => res.json()),
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
