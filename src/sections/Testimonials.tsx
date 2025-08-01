"use client";

import { FC, useRef, useState } from "react";
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
    designation: "Founder, Bake with Smile",
    quote:
      "zivsxdev's skills in frontend development and eye for design helped us launch a stunning and fast website. It’s exactly what we needed.",
    src: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Md Sajid",
    designation: "Grocery Store Owner",
    quote:
      "Our grocery store has completely changed since working with zivsxdev. He brought together clean design and smart features that made our store feel modern while staying true to our roots.",
    src: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Vikas Kumar",
    designation: "Gym Owner",
    quote:
      "From heavy lifts to heavy clicks—thanks to zivsxdev, our gym’s vibe is now online. It’s sleek, fast, and built like a beast. Just like our workouts.",
    src: image3,
    imagePositionY: 0.55,
  },
];

const ArrowIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const Testimonials: FC = () => {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

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
    <section className="section " id="testimonials">
      <h2
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden tracking-tighter"
        ref={titleRef}
      >
        <motion.span
          className="whitespace-nowrap"
          style={{
            x: transformBottom,
          }}
        >
          Some nice words from my past Clients
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-red-orange-500"
          style={{
            x: transformTop,
          }}
        >
          Some nice words from my past Clients
        </motion.span>
      </h2>

      <div className="container">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            {testimonials.map(
              ({ name, designation, quote, src, imagePositionY }, index) =>
                index === testimonialIndex && (
                  <Testimonial
                    name={name}
                    role={designation}
                    company=""
                    quote={quote}
                    image={src}
                    imagePositionY={imagePositionY}
                    key={name}
                  />
                )
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <button
          className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full "
          onClick={handleClickPrev}
        >
          <ArrowIcon className="rotate-180 w-6 h-6" />
        </button>
        <button
          className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full"
          onClick={handleClickNext}
        >
          <ArrowIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
