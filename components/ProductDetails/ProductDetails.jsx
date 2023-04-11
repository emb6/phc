"use client";
import React, { useState, useRef } from "react";
import { Poppins } from "next/font/google";
import Rupee from "../Icons/Rupee";
import { nanoid } from "nanoid";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

const serviceList = [
  {
    day: "Day 1",
    date: `<span class="font-semibold">10</span> June, Saturday`,
    lists: [
      {
        id: nanoid(),
        time: "11:00 AM to 2:00 PM",
        venue: "Hall No. 5",
        title: "MarTech Summit",
        description:
          "The MarTech Summit is set to witness enthralling discussions and keynotes from top marketers across the globe! ",
        speakers: [
          { id: nanoid(), img: "/speaker_2.png", name: "" },
          { id: nanoid(), img: "/speaker_1.png", name: "" },
        ],
      },
      {
        id: nanoid(),
        time: "3:00 PM to 6:00 PM",
        venue: "Hall No. 5",
        title: "HR Tech Summit",
        description:
          "An evening dedicated to discussions on enhancing HR roles and responsibilities with the latest tech trend. ",
        speakers: [],
      },
      {
        id: nanoid(),
        time: "11:00 AM to 5:00 PM ",
        venue: "Hall No. 5",
        title: "Flash",
        description:
          "One-on-one meetings to pitch your ideas to the biggest investor, mentor and VC and a chance to secure your next big round. ",
        speakers: [],
      },
      {
        id: nanoid(),
        time: "11:00 AM to 5:00 PM",
        venue: "Hall No. 5",
        title: "Showcase",
        description:
          "A chance to feature your company to an audience of 15000+ and build brand awareness and visibility for your venture. ",
        speakers: [],
      },
      {
        id: nanoid(),
        time: "10:00 AM to 6:00 PM ",
        venue: "Hall No. 5",
        title: "Exhibition",
        description:
          "Feature your company at the biggest tech and marketing exhibition ever and ace your business milestones at CODE. ",
        speakers: [],
      },
    ],
  },
  {
    day: "Day 2",
    date: `<span class="font-semibold">11</span> June, Sunday`,
    lists: [
      {
        id: nanoid(),
        time: "11:00 AM to 3:00 PM ",
        venue: "Hall No. 5",
        title: "Unicorns",
        description:
          "A conference featuring the biggest leaders in the digital space come together to share industry insights and views on trending tech and marketing narratives. ",
        speakers: [
          { id: nanoid(), img: "/speaker_4.png", name: "" },
          { id: nanoid(), img: "/speaker_3.png", name: "" },
        ],
      },
      {
        id: nanoid(),
        time: "11:00 AM to 5:00 PM ",
        venue: "Hall No. 5",
        title: "Flash ",
        description:
          "One-on-one meetings to pitch your ideas to the biggest investor, mentor and VC and a chance to secure your next big round.",
        speakers: [],
      },
      {
        id: nanoid(),
        time: "11:00 AM to 5:00 PM",
        venue: "Hall No. 5",
        title: "Showcase",
        description:
          "A chance to feature your company to an audience of 15000+ and build brand awareness and visibility for your venture.",
        speakers: [],
      },
      {
        id: nanoid(),
        time: "10:00 AM to 6:00 PM ",
        venue: "Hall No. 5",
        title: "Exhibition ",
        description:
          "Feature your company at the biggest tech and marketing exhibition ever and ace your business milestones at CODE. ",
        speakers: [],
      },
    ],
  },
];

export default function ProductDetailTab() {
  const [active, setActive] = useState(0);

  const onChange = (index) => () => {
    setActive(index);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-5 ">
          <div className="flex  justify-center gap-10">
            <div className="flex items-center shadow-lg rounded-md ">
              <img
                src="https://purablehealthcare.com/img/shop/img6.jpg"
                alt=""
                width={587}
                height="auto"
              />
            </div>
            <div className={` ${poppins.className} flex-1`}>
              <h1 className="font-semibold text-xl pb-2">
                Vaxin Regular (500mg), Mild Intake Lorem Ipsum Dolor
              </h1>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  4.95 out of 5
                </p>
              </div>
              <div className={` ${poppins.className} mt-5`}>
                <div className="bg-gray-100 w-[100px] text-center p-2 my-3">
                  <span className="font-semibold text-primary-purple">
                    IN STOCK
                  </span>
                </div>
                <div className="flex flex-start items-center gap-5">
                  <span className="font-semibold text-4xl">₹ 12.00</span>
                  <span className="text-red-600 line-through text-2xl">
                    ₹ 12.00
                  </span>
                </div>
              </div>
              <p className="py-5 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <div className="text-gray-500">
                <p className="pb-2 font-semibold">Benefits:</p>
                <ui className="leading-[2rem] list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=)]">
                  <li>
                    High protein from quality whey, supports faster recovery
                  </li>
                  <li>
                    Maintain positive N-Balance thus prevent loss of lean body
                    mass & support anabolism
                  </li>
                  <li> Increases pharmacological response</li>
                  <li>Contains BCAA's for faster tissue regeneration</li>
                  <li>Provides Omega 3 & Omega 6 fatty acids</li>
                  <li>Fulfils increased nutritional requirements</li>
                  <li>Gluten free & preservative free</li>
                  <li>Improves quality of life</li>
                </ui>
              </div>
            </div>
          </div>

          {/* /tab code */}
          <div className="max-w-7xl mx-auto mt-12">
            <div className="flex w-full relative">
              {serviceList?.map((item, index) => (
                <div
                  key={item}
                  onClick={onChange(index, item)}
                  className={`${poppins.className} ${
                    active === index
                      ? "text-primary-blue"
                      : "text-primary-gray/30"
                  } border-b-4 border-b-primary-gray/30 text-lg py-3 pr-5 font-semibold cursor-pointer w-1/2`}
                >
                  <div
                    className={`${poppins.className} max-w-full font-normal text-sm lg:text-2xl mb-5 flex flex-col gap-2 md:gap-5 `}
                  >
                    <p>{item.day}</p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item?.date,
                      }}
                    ></p>
                  </div>
                </div>
                // border-b-primary-green
              ))}
              <div
                className={`bg-primary-green h-1 w-1/2 absolute bottom-0 left-0 transition-all ${
                  active === 0 ? "translate-x-[0]" : "translate-x-[100%]"
                }`}
              ></div>
            </div>

            <div className="flex mt-10 max-w-7xl mx-auto">
              <div className="px-5">
                <div className="relative flex md:pl-[200px] lg:pl-[300px]">
                  <ol className="relative border-l-[0.5px] border-primary-green">
                    {serviceList[active]?.lists?.map((item, index) => (
                      <li className="relative mb-10 ml-6" key={item.id}>
                        <div
                          className={` ${poppins.className} hidden md:flex absolute -left-[12rem] lg:-left-[21rem] top-4 w-[300px] flex-col gap-5`}
                        >
                          <div>
                            <p className="font-light text-[#5B5B5B]">Timings</p>
                            <time className="text-base lg:text-2xl font-normal">
                              {item.time}
                            </time>
                          </div>
                          <div>
                            <p className="-left-16 font-light text-[#5B5B5B]">
                              Venue
                            </p>
                            <p className="text-base lg:text-2xl font-normal">
                              {item.venue}
                            </p>
                          </div>
                        </div>

                        <span
                          className={` ${poppins.className} absolute flex items-center text-white justify-center w-8 h-8 bg-primary-green rounded-full -left-10 ring-8 ring-white`}
                        >
                          {index + 1}
                        </span>
                        <div>
                          <div
                            className={` ${poppins.className} text-sm font-semibold md:hidden`}
                          >
                            <div>
                              <span className="mr-2">Timings</span>
                              <time className=" font-normal">{item.time}</time>
                            </div>
                            <div>
                              <span className="mr-2 ">Venue :</span>
                              <span className=" font-normal">{item.venue}</span>
                            </div>
                          </div>

                          <h3 className="my-1 lg:pl-8 text-base md:text-lg font-semibold text-gray-900">
                            {item.title}
                          </h3>

                          <p className="text-sm lg:pl-8 md:text-base font-normal text-gray-500 ">
                            {item.description}
                          </p>
                        </div>

                        {item?.speakers.length ? (
                          <div className="mt-5 lg:pl-8">
                            <h4
                              className={`${poppins.className} mb-3 md:mb-1 text-sm md:text-lg font-normal text-primary-green`}
                            >
                              Speakers
                            </h4>
                            <div className="">
                              <ol className="flex gap-2">
                                {item.speakers.map((data, idx) => (
                                  <li className="rounded-full" key={data.id}>
                                    <img
                                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${data.img}`}
                                      alt=""
                                      loading="lazy"
                                      decoding="async"
                                    />
                                  </li>
                                ))}
                              </ol>
                            </div>
                          </div>
                        ) : (
                          <div className="h-[92px]"></div>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* /tab code */}
        </div>
      </section>
    </>
  );
}
