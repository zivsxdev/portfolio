import Button from "@/components/Button";
import { FC } from "react";

const navItem = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "Projects",
  },
  {
    href: "#",
    label: "Testimonials",
  },
  {
    href: "#",
    label: "Contect Me",
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="container">
        <div className="section">
          <div className="grid md:grid-cols-4 md:items-center">
            <div className="md:col-span-2">
              <h2 className="py-10 text-4xl md:text-7xl mt-20 font-extralight">
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
