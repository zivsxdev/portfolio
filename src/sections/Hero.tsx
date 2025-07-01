import { FC } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-img3.png";
import Image from "next/image";
import Button from "@/components/Button";
import { FlipWords } from "@/components/flip-words";


const Hero: FC = () => {
  return (
    <section>
      <div className="grid md:grid-cols-12 min-h-screen items-stretch">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            {/* Heading with FlipWords + Static text */}
            <h1 className="text-5xl md:text-8xl lg:text-7xl mt-40 md:mt-50 leading-tight relative min-h-[120px]">
              {/* Animated words (visible on small & medium) */}
              <span className="block lg:hidden">
                <FlipWords
                  words={[
                    "FrontEnd Developer",
                    "Trader",
                    "Creative Thinker",
                  ]}
                />
              </span>

              {/* Static text (visible only on large screens) */}
              <span className="hidden lg:inline-block">
                FrontEnd Dev
              </span>
            </h1>

            {/* Sub-heading */}
            <h3 className="text-4xl mt-10 mb-10 md:text-5xl px-2">
              My Code Speaks in Interfaces, My Mind Trades in Patterns
            </h3>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row md:mt-10 items-start gap-6">
              <Button
                variant="secondary"
                iconAfter={
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
                }
              >
                <span>View my work</span>
              </Button>

              <Button variant="text">Let&apos;s Talk</Button>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="col-span-5">
          <div className="mt-20 md:mt-12 md:h-full rounded-r-xl overflow-hidden">
            <Image
              src={heroImage}
              alt="My portrait"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
