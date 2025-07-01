// components/Testimonials.tsx
"use client";

import { FC } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";


import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";

const testimonials = [
  {
    name: "Khushi Bano",
    designation: "Founder, Bake with Smile",
    quote:
      "zivsxdev skills in frontend development and eye for design helped us launch a stunning and fast website. It’s exactly what we needed.",
    src: image1.src,
  },
  {
    name: "Md Sajid",
    designation: "Grocery Store Owner",
    quote:
      "Our grocery store has completely changed since working with zivsxdev. He brought together clean design and smart features that made our store feel modern while staying true to our roots. Customers now find it easier to shop, both online and offline.",
    src: image2.src,
  },
  {
    name: "Vikas Kumar",
    designation: "Gym Owner",
    quote:
      "From heavy lifts to heavy clicks—thanks to zivsxdev, our gym’s vibe is now online. It’s sleek, fast, and built like a beast. Just like our workouts.",
    src: image3.src,
  },
];

const Testimonials: FC = () => {
  return (
     <section className="py-14 md:py-32 lg:py-40 scroll-mt-32">
      <div className="container">
    <div className="space-y-6">
      {/* Heading with sliding animation */}
    <h2 className="text-4xl md:text-7xl lg:text-8xl text-gray-800">
  What My Clients Say
</h2>


      {/* Sliding spans with keywords */}
      {/* Client words slider (marquee effect) */}
<div className="overflow-hidden mt-4">
  <div className="whitespace-nowrap animate-marquee flex gap-8">
    {[
      "“Sleek and Fast”",
      "“Modern and Rooted”",
      "“Built Like a Beast”",
      "“Clean & Responsive Design”",
      "“Customers Love It”",
    ].map((quote, i) => (
      <span
        key={i}
        className="text-base md:text-lg font-medium text-red-orange-500 px-4 py-1 rounded-full"
      >
        {quote}
      </span>
    ))}
  </div>
</div>

      <AnimatedTestimonials testimonials={testimonials} />
    </div>
      </div>
    </section>
  );
};

export default Testimonials;
