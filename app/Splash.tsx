"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";
import { BsFillBugFill } from "react-icons/bs";

const Splash = () => {
  const [loading, setIsLoading] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 3000);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return loading ? (
    <div
      className={`z-50 absolute w-full h-full bg-zinc-200 flex justify-center items-center transition-opacity duration-2000 ${
        startAnimation ? "opacity-0" : "opacity-100"
      }`}
    >
      <BsFillBugFill
        size={120}
        className={`animate-pulse ${startAnimation ? "animate-scaleUp" : ""}`}
      />
      {/* <div className="loader"></div> */}
    </div>
  ) : null;
};

export default Splash;
