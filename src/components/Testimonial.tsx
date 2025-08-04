import {  HTMLAttributes, useEffect } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { usePresence, motion,  } from "framer-motion";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";



const Testimonial = (
  props: {
    quote: string;
    name: string;
    company: string;
    imagePositionY: number;
    image: string | StaticImport;
    className?: string;
  } & HTMLAttributes<HTMLDivElement>
) => {
  const {
    quote,
    name,
    company,
    imagePositionY,
    image,
    className,
    ...rest
  } = props;

  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimation,
    exitAnimation: quoteExitAnimation,
  } = useTextRevealAnimation();

  const {
    scope: citeScope,
    entranceAnimation: citeEntranceAnimation,
    exitAnimation: citeExitAnimation,
  } = useTextRevealAnimation();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      quoteEntranceAnimation().then(() => {
        citeEntranceAnimation();
      });
    } else {
      Promise.all([quoteExitAnimation(), citeExitAnimation()]).then(() => {
        safeToRemove();
      });
    }
  }, [
    citeEntranceAnimation,
    citeExitAnimation,
    isPresent,
    quoteEntranceAnimation,
    quoteExitAnimation,
    safeToRemove,
  ]);

  return (
    <div

      className={twMerge(
        "grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center",
        className
      )}
      {...rest}
    >
      {/* Image Section */}
      <div className="aspect-square md:aspect-[9/16] md:col-span-2 relative overflow-hidden">
        <motion.div
          className="absolute h-full w-full bg-slate-900 "
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.15 }}
        />
        <Image
          src={image}
          alt={name}
          priority
          className="size-full object-cover"
          style={{
            objectPosition: `50% ${imagePositionY * 100}%`,
          }}
        />
      </div>

      {/* Quote Section */}
      <blockquote className="md:col-span-3">
        <div
          className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0 leading-tight"
          ref={quoteScope}
        >
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </div>
        <cite
          className="block mt-4 md:mt-8 not-italic text-xl md:text-lg lg:text-xl text-gray-900"
          ref={citeScope}
        >
          {name}, {company}
        </cite>
      </blockquote>
    </div>
  );
};

export default Testimonial;
