// components/Header.tsx
"use client"
import { FC, useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react"



const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];


const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();

useEffect(() => {
  if (isOpen) {
    topLineAnimate([
      [
        topLineScope.current,
        {
          translateY: 4,
        },
      ],
      [
        topLineScope.current,
        {
          rotate: 45,
        },
      ],
    ]);

    bottomLineAnimate([
      [
        bottomLineScope.current,
        {
          translateY: -4,
        },
      ],
      [
        bottomLineScope.current,
        {
          rotate: -45,
        },
      ],
    ]);
  } else {
    topLineAnimate([
      [
        topLineScope.current,
        {
          rotate: 0,
        },
      ],
      [
        topLineScope.current,
        {
          translateY: 0,
        },
      ],
    ]);

    bottomLineAnimate([
      [
        bottomLineScope.current,
        {
          rotate: 0,
        },
      ],
      [
        bottomLineScope.current,
        {
          translateY: 0,
        },
      ],
    ]);
  }
}, [isOpen]);













  return (
    <header>
      <div className="fixed top-0 left-0 w-full h-20 z-50 mix-blend-difference backdrop-blur-md bg-stone-400/10 border-b border-stone-300">
        <div className="container !max-w-full h-full">
          <div className="flex justify-between items-center h-full">
            <div>
            <a href="#">
              <span className="text-xl font-bold uppercase text-white">
                Taukil&nbsp;Ahmed
              </span>
            </a>
            </div>
          </div>
        </div>
      </div>
<div className="fixed top-0 left-0 w-full h-20 z-50">
  <div className="container !max-w-full">
    <div className="flex items-center justify-end h-20">
      <div className="flex items-center gap-4">
        <div
          className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black"
          >
            <motion.rect
              x="3"
              y="7"
              width="18"
              height="2"
              fill="currentColor"
              ref={topLineScope}
              style={{
                transformOrigin: "12px 8px",
             
                
              }}
            />
            <motion.rect
              x="3"
              y="15"
              width="18"
              height="2"
              fill="currentColor"
              ref={bottomLineScope}
              style={{ transformOrigin: "12px 16px" }}
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

    </header>
  );
};

export default Header;
