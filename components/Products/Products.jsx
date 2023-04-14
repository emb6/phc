"use client";
import React from "react";
import Slider from "react-slick";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
});

const productData = [
  {
    image: "https://purablehealthcare.com/img/shop/img5.jpg",
    name: "Puralbumen Powder",
    description: "High protein from quality whey, supports faster recovery",
    sale_price: "1399.00",
    strike_price: "1599.00",
    offer: "20% Off",
  },
  {
    image: "https://purablehealthcare.com/img/shop/img6.jpg",
    name: "Neofeed Powder",
    description: "High protein from quality whey, supports faster recovery",
    sale_price: "1199.00",
    strike_price: "1499.00",
    offer: "15% Off",
  },
  {
    image: "https://purablehealthcare.com/img/shop/img7.jpg",
    name: "Purwhey Powder",
    description: "",
    sale_price: "₹1199.00",
    strike_price: "",
    offer: "",
  },
];

export default function AboutProduct() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div>
        <ul className="m-0 lg:pt-36 [&>li]:!w-auto [&>li>div]:bg-secondary-gray [&>li.slick-active>div]:bg-primary-orange ">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => <div className="h-1 w-10"></div>,
  };

  return (
    <>
      <section className="px-5 md:py-10 lg:16 bg-secondary-gray">
        <div className="max-w-7xl mx-auto px-4 py-5 lg:px-10 lg:py-16">
          <Slider {...settings} className="lg:pb-16 ">
            {productData.map((item, index) => (
              <div className="custom-slide">
                <div class="mt-11 w-80 mr-1 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                  <img
                    class="h-48 w-full object-cover object-center"
                    src={item.image}
                    alt="Product Image"
                  />
                  <div class="p-4">
                    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                      {item.name}
                    </h2>
                    <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                      {item.description}
                    </p>
                    <div class="flex items-center">
                      <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                        {item.sale_price}
                      </p>
                      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                        {item.strike_price}
                      </p>
                      <p class="ml-auto text-base font-medium text-green-500">
                        {item.offer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
