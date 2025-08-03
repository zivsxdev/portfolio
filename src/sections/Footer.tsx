'use client'
import Button from "@/components/Button";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "framer-motion";
import { FC } from "react";
import { useEffect } from "react";

const navItem = [
  {
    href: "#home",
    label: "About",
  },
  {
    href: "#projects",
    label: "Selected Works",
  },
 
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#faqs",
    label: "FAQs",
  },
  {
    href: "#contact",
    label: "Contact Me",
  },
 
];

const Footer: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation ();
  const inView = useInView(scope);
  useEffect(() =>{
    if (inView){
      entranceAnimation();
    }
   } ,[inView,entranceAnimation]);

 return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container">
        <div className="section">
          <div className="grid md:grid-cols-4 md:items-center">
            <div className="md:col-span-2">
              <h2 className="py-10 text-4xl md:text-7xl mt-20 font-extralight" ref={scope}>
                {" "}
                Enough talk. Lets make something great together
              </h2>
            </div>
          </div>
          <nav className="flex flex-col gap-10 md:items-end mt-16 mt:mt-0">
            {navItem.map(({ href, label }) => (
              <a href={href} key={label}>
                <Button variant="text" className="text-lg">
                  {" "}
                  {label}{" "}
                </Button>
              </a>
            ))}
          </nav>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyrigth &copy; zivsxdev &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
