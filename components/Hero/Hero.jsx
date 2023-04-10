"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
});

const Hero = () => {
  return (
    <div className="w-full py-4 md:py-8">
      <div className="w-full max-w-7xl px-4 lg:flex lg:items-center lg:justify-between mx-auto">
        <div className="h-full w-full md:flex max-w-xl lg:order-2 px-4 mx-auto lg:mx-0 mb-8 mt-14 sm:mb-14 lg:my-0">
          <div
            width={662}
            height={563}
            className="pt-[84.9609375%] max-w-lg mx-auto"
          />
        </div>
        <div className="max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-14 lg:mb-0">
          <img
            className="w-full mb-2"
            src="https://dqvy7r6i5k0tc.cloudfront.net/titleHero.svg"
            alt="title"
            loading="lazy"
            decoding="async"
            width={464}
            height={134}
          />
          <h1 className="text-2xl text-center lg:text-left lg:text-5xl mb-8">
            Convention of Digital Entrepreneurs
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
