"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";
import { BsFillBugFill } from "react-icons/bs";

const Splash = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <div
      className={`z-50 absolute w-full h-full bg-zinc-200 flex justify-center items-center`}
    >
      <BsFillBugFill size={120} className="animate-pulse" />
      {/* <div className="loader"></div> */}
    </div>
  ) : null;
};

export default Splash;
