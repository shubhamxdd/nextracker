"use client";

import React, { useEffect, useState } from "react";
import "./globals.css"; // Import the CSS file

const Splash = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <div className={`z-50 absolute w-full h-full text-4xl bg-yellow-400 flex justify-center items-center `}>
      <div className="animate-bounce">LOADING</div>
    </div>
  ) : null;
};

export default Splash;
