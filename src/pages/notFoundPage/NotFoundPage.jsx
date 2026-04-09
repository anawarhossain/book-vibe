import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Decorative Badge */}
        <p className="text-base font-semibold text-indigo-600">404</p>

        {/* Main Content */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-600">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to={"/"}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
          >
            Go back home
          </Link>
          <Link
            to={"/support"}
            className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
