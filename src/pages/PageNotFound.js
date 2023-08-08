import { Link } from "react-router-dom";

import Page_Not_Found from "../images/pagenotfound.jpg";

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center px-2">
          <p className=" text-6xl md:text-7xl text-gray-700 dark:text-white font-bold my-10 md:text-center">
            {" "}
            Oops, Page Not Found!{" "}
          </p>
          <img
            className="rounded"
            src={Page_Not_Found}
            alt="404 page not found"
          />
        </div>

        <div className="flex justify-center  my-4">
          <Link to="/">
            <button className="w-64 text-xl text-white font-medium bg-gradient-to-r from-sky-500 to-indigo-500  rounded-lg px-5 py-2.5">
              {" "}
              Back To Home{" "}
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
