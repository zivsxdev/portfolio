"use client";

import { stagger, useAnimate, useInView } from "framer-motion";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const techStack = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Zustand",
  "Framer Motion",
  "Vercel",
  "Styled-Components",
];

const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    const h2 = scope.current?.querySelector("h2");
    if (h2) {
      new SplitType(h2, {
        types: "lines, words",
        tagName: "span",
      });
    }
  }, []); // run once on mount

  useEffect(() => {
    if (inView) {
      const words = scope.current?.querySelectorAll(".word");
      if (words && words.length > 0) {
        animate(
          words,
          { transform: "translateY(0%)", opacity: 1 },
          {
            duration: 1,
            delay: stagger(0.1),
          }
        );
      }
    }
  }, [inView, animate, scope]);

  return (
    <section
      ref={scope}
      className="py-24 md:py-32 lg:py-40 mt-12 md:16 lg-20"
      id="intro"
    >
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          I build fast, scalable web apps with Next.js — focused on clean
          architecture, smart logic, and real-world problem-solving
        </h2>

        {/* Tech Stack Slider */}
        <div className="relative overflow-hidden mt-16">
          <div className="flex whitespace-nowrap animate-marquee gap-8">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="text-2xl md:text-2xl font-medium text-red-orange-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
