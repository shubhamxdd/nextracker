import Link from "next/link";
import React from "react";
import { BiErrorCircle } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Page not Found &nbsp;</h1>
          <BiErrorCircle size={24} />
        </div>
        <div className="">
          <p className="text-lg">Please check url</p>
          <span className="flex items-center">
            <Link
              href="/"
              className="group transition duration-300 link_styles"
            >
              Go to Homepage
              <span className="block focus:block active:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 rounded bg-zinc-700"></span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;