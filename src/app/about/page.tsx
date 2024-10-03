import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

import styles from "@/styles/About.module.css";

export const metadata: Metadata = {
  title: "About Us - JOSGLOBAL Sarl",
  description:
    "Learn more about JOSGLOBAL Sarl, a leading sourcing company in Kinshasa, DRC. Discover our values, mission, and how we strive to deliver excellence in connecting businesses with global suppliers.",
};

export default function About() {
  return (
    <>
      <section className="py-14 mt-20 lg:py-24 relative z-0 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-white mb-5 md:text-5xl md:leading-normal">
            Your Trusted Sourcing Partner in <span className="text-indigo-400">Central Africa</span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-400 mb-9">
            Partner with us to connect with reliable suppliers and access high-quality products tailored to your business needs.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <Image
                src="/officeEnvironment.jpeg"
                width={600}
                height={600}
                alt="About Us tailwind page"
                className="max-lg:mx-auto object-cover"
                priority
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-white mb-9 max-lg:text-center relative">
                  About Us
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-300 max-lg:text-center max-w-2xl mx-auto">
                  JOSGLOBAL Sarl is a dynamic sourcing company based in Kinshasa, Democratic Republic of Congo, specializing in B2B solutions for businesses across a wide range of industries. Leveraging our strategic location in Central Africa, we connect local and international businesses with trusted suppliers, ensuring access to high-quality products and services that meet diverse business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <Image
                  src="/mission.jpg"
                  width={600}
                  height={600}
                  alt="Our Mission"
                  className="block lg:hidden mb-9 mx-auto object-cover"
                  priority
                />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-white mb-9 max-lg:text-center">Our Mission</h2>
                <p className="font-normal text-xl leading-8 text-gray-300 max-lg:text-center max-w-2xl mx-auto">
                  Our mission is to be the leading sourcing partner for businesses in the Democratic Republic of Congo and beyond, providing access to high-quality products from trusted global suppliers. We are committed to delivering exceptional value through efficient, reliable, and ethical sourcing solutions.
                </p>
              </div>
            </div>
            <div className="img-box">
              <Image
                src="/mission.jpg"
                width={600}
                height={600}
                alt="Our Mission"
                className="hidden lg:block object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-white font-bold mb-14">Our Results in Numbers</h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 p-6 rounded-2xl shadow-md bg-gray-800">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-400">240%</div>
                <div className="flex-1">
                  <h4 className="text-xl text-white font-semibold mb-2">Company Growth</h4>
                  <p className="text-xs text-gray-400 leading-5">Experience remarkable growth as we continually innovate and strive for new heights of success.</p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 p-6 rounded-2xl shadow-md bg-gray-800">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-400">175+</div>
                <div className="flex-1">
                  <h4 className="text-xl text-white font-semibold mb-2">Team Members</h4>
                  <p className="text-xs text-gray-400 leading-5">Our talented team members are the driving force behind our success.</p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 p-6 rounded-2xl shadow-md bg-gray-800">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-400">625+</div>
                <div className="flex-1">
                  <h4 className="text-xl text-white font-semibold mb-2">Projects Completed</h4>
                  <p className="text-xs text-gray-400 leading-5">We have successfully completed over 625 projects worldwide and continue to grow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 mt-16 lg:py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-16 rounded-full">
            <h2 className="text-4xl font-manrope font-bold text-white text-center">What Our Clients Say!</h2>
          </div>

          <div className="swiper mySwiper2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="relative mb-20">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-400 leading-8 mb-8 text-center">
                      "Working with JOSGLOBAL has been a game-changer for our sourcing needs. Their team's expertise and dedication have helped us find reliable suppliers quickly and efficiently."
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative mb-20">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-400 leading-8 mb-8 text-center">
                      "The professionalism and support from JOSGLOBAL have exceeded our expectations. We highly recommend their services to anyone looking for sourcing solutions."
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative mb-20">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-400 leading-8 mb-8 text-center">
                      "JOSGLOBAL has streamlined our sourcing process and has been a reliable partner. Their attention to detail and commitment to quality are commendable."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
