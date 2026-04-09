import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import ListedBooks from "../pages/listedBooks/ListedBooks";
import PagesToRead from "../pages/pagesToRead/PagesToRead";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import SignIn from "../pages/sign/SignIn";
import SignUp from "../pages/sign/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
