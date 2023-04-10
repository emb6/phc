"use client";
/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import { Poppins } from "next/font/google";
import QuoteStart from "../Icons/QuoteStart";
import QuoteEnd from "../Icons/QuoteEnd";
import GradArrow from "../Icons/GradArrow";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

function Talks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
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
    <section className="bg-white relative overflow-hidden py-20">
      {/* <GradArrow className="absolute left-0 h-full" /> */}
      <div className="max-w-7xl mx-auto px-4 py-5 lg:px-10 lg:py-16">
        <h2
          className={`font-semibold text-xl md:text-3xl lg:text-5xl ${poppins.className} text-primary-gray mb-5 lg:mb-14`}
        >
          Don&apos;t take just &apos;OUR&apos; word for it
        </h2>

        <Slider {...settings} className="lg:pb-16 ">
          <div className="slide-custom">
            <div className="flex justify-center">
              <div className="w-[106px] md:w-[200px] lg:w-[358px]">
                <img
                  src="https://dr3u6z0sccp3n.cloudfront.net/image-01.jpeg"
                  alt="user"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex-1 pl-5 lg:pl-14">
                <QuoteStart className="w-[23px] lg:w-[126px]" />
                <p
                  className={`text-primary-gray py-2 lg:py-5 text-xs max-w-3xl md:text-base lg:text-xl slide-subtitle ${poppins.className}`}
                >
                  Expand My Business understood my requirements well and
                  provided me with agencies that would fit my budget. They
                  helped in making the preliminary screening process of multiple
                  website developers very easy for me. I am extremely happy with
                  the service and would highly recommend Expand My Business to
                  all the budding entrepreneurs and anyone who is struggling to
                  find the right website development agency for their business.
                </p>
                <p
                  className={`text-primary-gray text-base hidden lg:block mt-4 slide-name ${poppins.className}`}
                >
                  Divya Singh
                </p>
                <p
                  className={`text-primary-gray text-base hidden lg:block slide-name ${poppins.className}`}
                >
                  Founder - Skilldify
                </p>
                <div className="flex justify-end">
                  <QuoteEnd className="w-[23px] lg:w-[126px] lg:-mt-6 " />
                </div>
              </div>
            </div>
          </div>
          <div className="slide-custom ">
            <div className="flex">
              <div className="max-w-[106px] lg:max-w-[358px]">
                <img
                  src="https://dr3u6z0sccp3n.cloudfront.net/image-02.jpeg"
                  alt="user"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex-1 pl-5 lg:pl-14">
                <QuoteStart className="w-[23px] lg:w-[126px]" />

                <p
                  className={`text-primary-gray py-2 lg:py-5 text-xs max-w-3xl lg:text-xl slide-subtitle ${poppins.className}`}
                >
                  Expand My Business is a unique one of its kind platform to
                  connect b2b businesses. We started working with Expand My
                  Business in September 2021 and our experience is getting
                  better every day. The best part about the company is their
                  executives are always available and ready for new challenges,
                  moreover, they get more excited to see a new challenge rather
                  than doing things the same traditional way. Divyansh and
                  Rakshita are both very supportive and enthusiastic.
                </p>
                <p
                  className={`text-primary-gray text-base hidden lg:block mt-4 slide-name ${poppins.className}`}
                >
                  Shivam Gupta
                </p>
                <p
                  className={`text-primary-gray text-base hidden lg:block slide-name ${poppins.className}`}
                >
                  Founder - Shiv Jyoti Educational Group
                </p>
                <div className="flex justify-end">
                  <QuoteEnd className="w-[23px] lg:w-[126px] lg:-mt-6 " />
                </div>
              </div>
            </div>
          </div>
          <div className="slide-custom ">
            <div className="flex">
              <div className="max-w-[106px] lg:max-w-[358px]">
                <img
                  src="https://dr3u6z0sccp3n.cloudfront.net/image-03.jpeg"
                  alt="user"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex-1 pl-5 lg:pl-14">
                <QuoteStart className="w-[23px] lg:w-[126px]" />

                <p
                  className={`text-primary-gray py-2 lg:py-5 text-xs max-w-3xl lg:text-xl slide-subtitle ${poppins.className}`}
                >
                  I highly recommended Expand My Business to anyone looking for
                  the support they provided. They are extremely professional,
                  dedicated and supportive. They did an exceptional job in
                  understanding my business requirements and connecting me to
                  talented, experienced, passionate and professional technology
                  partners. They did a thorough job in discussing with partners
                  and were there to assist me and give their feedback on all
                  partner calls.
                </p>
                <p
                  className={`text-primary-gray text-base hidden lg:block mt-4 slide-name ${poppins.className}`}
                >
                  Urvisha Koradia
                </p>
                <p
                  className={`text-primary-gray text-base hidden lg:block slide-name ${poppins.className}`}
                >
                  Founder - Pitchbooks
                </p>
                <div className="flex justify-end">
                  <QuoteEnd className="w-[23px] lg:w-[126px] lg:-mt-6 " />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Talks;
