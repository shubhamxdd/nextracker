"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";

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
      <div className="loader"></div>
    </div>
  ) : null;
};

export default Splash;
