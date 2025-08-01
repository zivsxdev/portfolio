"use client";

import { FC, useEffect, useRef } from "react"; // ✅ Missing useEffect import
import Image from "next/image";
import SplitType from "split-type";

import {
  motion,
  stagger,
  useAnimate,
  useScroll,
  useTransform,
} from "framer-motion";

import heroImage from "@/assets/images/hero-img4.jpg";
import Button from "@/components/Button";
import DecryptedText from "@/components/ui/DecryptedText";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });

  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  useEffect(() => {
    if (!titleScope.current) return;

    const split = new SplitType(titleScope.current, {
      types: "lines, words",
      tagName: "span",
    });

    requestAnimationFrame(() => {
      const words = titleScope.current?.querySelectorAll(".word");
      if (!words) return;

      words.forEach((word) => {
        (word as HTMLElement).style.transform = "translateY(100%)";
        (word as HTMLElement).style.display = "inline-block";
      });

      titleAnimate(
        words,
        { transform: "translateY(0%)" },
        {
          duration: 0.5,
          delay: stagger(0.05),
          ease: "easeOut",
        }
      );
    });
  }, [titleScope, titleAnimate]);

  return (
    <section>
      <div className="grid md:grid-cols-12 min-h-screen items-stretch sticky top-0">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <h1 className="text-5xl md:text-7xl lg:text-6xl mt-40 md:mt-50 leading-tight relative min-h-[120px] font-mono">
              <DecryptedText
                text="FrontEnd Developer,"
                animateOn="view"
                sequential
                revealDirection="start"
                className="text-stone-900 font-mono"
                encryptedClassName="text-stone-900 font-mono"
              />
              <br />
              <DecryptedText
                text="Trader (Option Scalper)"
                animateOn="view"
                sequential
                revealDirection="start"
                className="text-stone-900 font-mono"
                encryptedClassName="text-stone-900 font-mono"
              />
            </h1>

            {/* Sub-heading */}
            <motion.h3
              ref={titleScope}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl mt-10 mb-10 md:text-5xl px-2"
            >
              My Code Speaks in Interfaces, My Mind Trades in Patterns
            </motion.h3>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row md:mt-10 items-start gap-6">
              {/* Animated Button 1: View my work */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.5,
                }}
              >
                <Button
                  variant="secondary"
                  iconAfter={
                    <div className="overflow-hidden size-5">
                      <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 text-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7M19 15l-7 7-7-7"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 text-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7M19 15l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  <span>View my work</span>
                </Button>
              </motion.div>

              {/* Animated Button 2: Let's Talk */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 2, // Slight delay after the first button
                }}
              >
                <Button variant="text">Let&apos;s Talk</Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className=" md:col-span-5 relative">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full "
           style={{
  width: typeof window !== "undefined" && window.innerWidth < 768 ? "100%" : portraitWidth,
}}

          >
            <Image
              src={heroImage}
              alt="My portrait"
              className="size-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div
        className="md:h-[200vh] "
        ref={scrollingDiv}
      ></div>
    </section>
  );
};

export default Hero;
