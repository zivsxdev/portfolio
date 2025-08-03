"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";

import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-4.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import {
  useScroll,
  motion,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Testimonial from "@/components/Testimonial";

const testimonials = [
  {
    name: "Khushi Bano",
    company: "Founder, Bake with Smile",
    quote:
      "zivsxdev's skills in frontend development and eye for design helped us launch a stunning and fast website. It’s exactly what we needed.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Md Sajid",
    company: "Grocery Store Owner",
    quote:
    "Our store transformed after working with zivsxdev. Clean design, smart features — modern feel with desi roots.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Vikas Kumar",
    company: "Gym Owner",
    quote:
      "From heavy lifts to heavy clicks—thanks to zivsxdev, our gym’s vibe is now online. It’s sleek, fast, and built like a beast. Just like our workouts.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // ✅ Fix: Declare titleRef
  const titleRef = useRef(null);

  // ✅ Fix: Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handleClickPrev = () => {
    setTestimonialIndex((curr) => {
      if (curr === 0) {
        return testimonials.length - 1;
      }
      return curr - 1;
    });
  };
  const handleClickNext = () => {
    setTestimonialIndex((curr) => {
      if (curr === testimonials.length - 1) return 0;
      return curr + 1;
    });
  };

  return (
    <section className="section" id="testimonials">
      <h2
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden tracking-tighter"
        ref={titleRef}
      >
        <motion.span
          className="whitespace-nowrap"
          style={{ x: transformBottom }}
        >
          Some nice words from my past Clients
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-red-orange-500"
          style={{ x: transformTop }}
        >
          Some nice words from my past Clients
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            {testimonials.map(
              ({ name, company, role, quote, image, imagePositionY }, index) =>
                index === testimonialIndex && (
                  <Testimonial
                    name={name}
                    company={company}
                    role={role}
                    quote={quote}
                    image={image}
                    imagePositionY={imagePositionY}
                    key={testimonialIndex}
                  />
                )
            )}
          </AnimatePresence>
        </div>
        <div className="flex gap-4 mt-6 lg:mt-10">
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full
             hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300 "
            onClick={handleClickPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>

          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center 
            rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300"
            onClick={handleClickNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
