"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { formValidation } from "@/Utils/validations";
import { useFormik } from "formik";
import axios from "axios";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
});

const initialState = {
  first_name: "",
  last_name: "",
  mobile: {},
  email: "",
  message: "",
};

export default function ContactForm() {
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: formValidation,
    onSubmit: (values) => {
      // debugger;
      console.log("Data", values);
      const bodyFormData = new FormData();
      bodyFormData.append("Name", values.first_name + " " + values.last_name);
      bodyFormData.append("Email", values.email);
      bodyFormData.append("Contact", values.mobile);
      bodyFormData.append("Message", values.message);
      // fetch(
      //   "https://script.google.com/macros/s/AKfycbyqFyvRh3hPDnwApQsKsjKKKoexdNo770NNoKhBSlORnGYQHgxPObKLVfKId8iu-zFr/exec",
      //   {
      //     method: "POST",
      //     body: bodyFormData,
      //   }
      // )
      //   .then((res) => res.json())
      //   .then((res) => {
      //     console.log(res);
      //   });
      axios({
        method: "post",
        url: "https://script.google.com/macros/s/AKfycbyqFyvRh3hPDnwApQsKsjKKKoexdNo770NNoKhBSlORnGYQHgxPObKLVfKId8iu-zFr/exec",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          console.log("Response", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });
  // console.log("Data", formik.values);

  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 py-5 lg:px-10 lg:pb-10 ">
          <div className="flex justify-center">
            <form class="w-full max-w-lg" onSubmit={formik.handleSubmit}>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="first_name"
                  >
                    First Name
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="first_name"
                    type="text"
                    placeholder="Radhe"
                    name="first_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                  />
                  {formik.touched.first_name && formik.errors.first_name && (
                    <span className="text-red-400">
                      {formik.errors.first_name}
                    </span>
                  )}
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="last_name"
                    type="text"
                    placeholder="Krishna"
                    name="last_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                  />
                  {formik.touched.last_name && formik.errors.last_name && (
                    <span className="text-red-400">
                      {formik.errors.last_name}
                    </span>
                  )}
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="email"
                    type="email"
                    placeholder="demo@gmail.com"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span className="text-red-400">{formik.errors.email}</span>
                  )}
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="mobile"
                  >
                    Phone
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="mobile"
                    type="number"
                    placeholder="9999XXXX810"
                    name="mobile"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobile}
                  />
                  {formik.touched.mobile && formik.errors.mobile && (
                    <span className="text-red-400">{formik.errors.mobile}</span>
                  )}
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <span className="text-red-400">
                      {formik.errors.message}
                    </span>
                  )}
                </div>
              </div>
              <div class="flex flex-wrap text-start -mx-3 mb-6 px-5">
                <label class="md:w-2/3 block text-gray-500 font-bold">
                  <input class="mr-2 leading-tight" type="checkbox" checked />
                  <span class="text-sm">Send me your newsletter!</span>
                </label>
              </div>
              <div class="flex flex-wrap text-center -mx-3 mb-6 ">
                <div class="w-full px-3">
                  <button
                    className={`${poppins.className} bg-primary-purple hover:bg-primary-purple/90 font-semibold text-white text-base px-7 py-4 rounded-full`}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
