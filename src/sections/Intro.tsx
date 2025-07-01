import { FC } from "react";

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
  return (
    <section className="py-24 md:py-32 lg:py-40 mt-12 md:16 lg-20">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          I build fast, scalable websites with Next.js — focused on clean
          architecture, smart logic, and real-world problem-solving
        </h2>

        {/* Tech Stack Slider (starts immediately under h2) */}
        <div className="relative overflow-hidden mt-16">
          <div className="flex whitespace-nowrap animate-marquee gap-8">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="text-xl md:text-2xl font-medium text-red-orange-500"
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
