"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { Poppins } from "next/font/google";
import CallIcon from "@/components/Icons/CallIcon";
import MessageIcon from "@/components/Icons/MessageIcon";
import {
  rowService,
  rowPolicies,
  socialLinks,
  company,
  rowServiceMobile,
  rowPoliciesMobile,
} from "@/constant/footer.constant";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/Icons/SocialIcons";
import toast from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
});

function Footer() {
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(
  //       "https://script.google.com/macros/s/AKfycbxS235syDZMhwVHi5fZNUY0-FGDcCMcRUkYdh87Osf9H1gbgcJgjshYhNfmck9M22f8gA/exec",
  //       {
  //         method: "POST",
  //         body: new FormData(e.currentTarget),
  //       }
  //     );
  //     const { result } = await response.json();
  //     if (result === "success") {
  //       e.target.querySelector("input").value = "";
  //       toast.success("Email Submitted successfully!");
  //     }
  //   } catch (e) {
  //     toast.error(e);
  //   }
  // };

  return (
    <footer className="py-5 lg:pt-20 bg-black ">
      {/* desktop footer */}
      <section className="max-w-7xl mx-auto px-5 hidden md:flex">
        <div className="w-[150px] lg:w-[250px]">
          <a href="/" aria-label="Expand My Business">
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/code_logo.svg`}
              className="w-full max-w-[170px] block"
              alt="ExMyB"
              loading="lazy"
              decoding="async"
              width={170}
              height={214}
            />
          </a>
        </div>
        <div className="grow pl-5 lg:pl-12 md:flex lg:flex-wrap lg:-mt-3">
          <ul className="w-1/2 lg:w-1/3">
            {rowService.map((row) => (
              <li key={row.name}>
                <a
                  className={`${poppins.className} block py-3 text-white text-sm`}
                  href={row.url}
                >
                  {row.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="w-full lg:w-1/3 text-white">
            {rowPolicies.map((row) => (
              <li key={row.name}>
                <a
                  className={`${poppins.className} block py-3 text-sm`}
                  href={row.url}
                >
                  {row.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="grow p-3">
          <p
            className={`${poppins.className} text-white text-xl lg:text-3xl mb-5`}
          >
            Stay up to date
          </p>
          {/* <form className="w-full md:flex items-center" onSubmit={onSubmit}> */}
          <form className="w-full md:flex items-center">
            <input
              type="email"
              name="email"
              className="p-2 border-none focus:ring-transparent h-14 focus:outline-none md:mr-5 w-full md:w-3/5 text-white bg-black border-b-2 "
              style={{ borderBottom: "1px solid #fff" }}
              placeholder="E-mail"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <button
              type="submit"
              className={`text-white border-0 tex-sm bg-primary-purple cursor-pointer rounded-3xl px-2 py-2.5 lg:inline-flex`}
            >
              Get Updates
            </button>
          </form>
        </div>
      </section>

      <section className="max-w-full mx-auto px-10 hidden md:flex  md:justify-around pt-10">
        <div className="flex justify-center items-center gap-5">
          <div className="hidden lg:flex">
            <a
              href={`tel:${company.contact}`}
              className="text-white flex items-center mr-9"
            >
              <CallIcon className="w-6 mr-3" /> {company.contactDisplay}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="text-white flex items-center"
            >
              <MessageIcon className="w-6 mr-3" /> {company.email}
            </a>
          </div>
        </div>
        <div className="flex items-center -ml-3">
          <a
            href={socialLinks.facebook}
            rel="noopener"
            target={"_blank"}
            className="px-3"
          >
            <span className="sr-only">Facebook</span>
            <FacebookIcon className="w-6 text-white" />
          </a>
          <a
            href={socialLinks.instagram}
            rel="noopener"
            target={"_blank"}
            className="px-3"
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon className="w-6 text-white" />
          </a>
          <a
            href={socialLinks.twitter}
            rel="noopener"
            target={"_blank"}
            className="px-3"
          >
            <span className="sr-only">Twitter</span>
            <TwitterIcon className="h-6 text-white" />
          </a>
          <a
            href={socialLinks.youtube}
            rel="noopener"
            target={"_blank"}
            className="px-3"
          >
            <span className="sr-only">Youtube</span>
            <YoutubeIcon className="h-6 text-white" />
          </a>
        </div>
        <div className="flex justify-center items-center gap-5">
          <p className="pl-5 lg:pl-10 text-white">PRESENTED BY</p>
          <picture>
            <source
              srcSet={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/emb_white_logo.avif`}
              type="image/avif"
            />
            <source
              srcSet={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/emb_white_logo.webp`}
              type="image/webp"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/emb_white_logo.svg`}
              className="w-[120px]"
              width={163}
              height={62}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </section>

      {/* mobile footer */}
      <section className="px-4 md:hidden">
        <div className="mb-5">
          <a href="/" aria-label="Expand My Business">
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/code_footer_logo.svg`}
              className="lg:w-[210px] block"
              alt=""
              width={120}
              height={60}
              decoding="async"
              loading="lazy"
            />
          </a>
        </div>
        <div className="my-5">
          <p className={`${poppins.className} text-white text-xl mb-5`}>
            Stay up to date
          </p>
          <form className="w-full flex items-center">
            <input
              type="email"
              name="email"
              className="p-2 border-none focus:ring-transparent h-14 w-3/5 text-white bg-black border-b-2 "
              style={{ borderBottom: "1px solid #fff" }}
              placeholder="E-mail"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <button
              type="submit"
              className={`text-white border-0 bg-primary-purple cursor-pointer rounded-3xl px-3 py-2.5 inline-flex text-sm`}
            >
              Get Updates
            </button>
          </form>
        </div>
        <div className="sm:flex">
          <ul className="flex flex-wrap md:hidden py-4 -mx-3">
            {rowServiceMobile.map((row) => (
              <li key={row.name}>
                <a
                  className={`${poppins.className} block p-3 text-sm text-white`}
                  href={row.url}
                >
                  {row.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="w-full hidden md:block sm:w-1/2 lg:w-1/3">
            {rowService.map((row) => (
              <li key={row.name}>
                <a
                  className={`${poppins.className} block py-3 text-white text-sm`}
                  href={row.url}
                >
                  {row.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="w-full hidden md:block sm:w-1/2 pt-5 lg:pt-0 lg:w-1/3 text-white">
            {rowPolicies.map((row) => (
              <li key={row.name}>
                <a
                  className={`${poppins.className} block py-3 text-sm`}
                  href={row.url}
                >
                  {row.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap my-5 text-sm">
          <a
            href={`tel:${company.contact}`}
            className="text-white flex items-center mr-9 mb-4 md:mb-0"
          >
            <CallIcon className="w-6 mr-3" /> {company.contactDisplay}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="text-white flex items-center mb-4 md:mb-0"
          >
            <MessageIcon className="w-6 mr-3" /> {company.email}
          </a>
        </div>
        <div className="flex justify-around max-w-sm mx-auto items-center gap-1 my-5">
          <a
            href={socialLinks.facebook}
            rel="noopener"
            target={"_blank"}
            className="text-red-500"
          >
            <span className="sr-only">Facebook</span>
            <FacebookIcon className="w-6 text-white" />
          </a>
          <a
            href={socialLinks.instagram}
            rel="noopener"
            target={"_blank"}
            className=""
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon className="w-6 text-white" />
          </a>
          <a
            href={socialLinks.twitter}
            rel="noopener"
            target={"_blank"}
            className=""
          >
            <span className="sr-only">Twitter</span>
            <TwitterIcon className="h-6 text-white" />
          </a>
          <a
            href={socialLinks.youtube}
            rel="noopener"
            target={"_blank"}
            className=""
          >
            <span className="sr-only">Youtube</span>
            <YoutubeIcon className="h-6 text-white" />
          </a>
        </div>

        <div className="h-[1px] bg-white w-full my-3"></div>

        <ul className="flex flex-wrap md:hidden py-4 -mx-3">
          {rowPoliciesMobile.map((row) => (
            <li key={row.name}>
              <a
                className={`${poppins.className} block p-3 text-sm text-white`}
                href={row.url}
              >
                {row.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center">
          <p className="pl-5 text-white text-sm">PRESENTED BY</p>
          <picture>
            <source
              srcSet={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/emb_white_logo.avif`}
              type="image/avif"
            />
            <source
              srcSet={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/emb_white_logo.webp`}
              type="image/webp"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/emb_white_logo.svg`}
              className="w-[120px]"
              width={163}
              height={62}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
