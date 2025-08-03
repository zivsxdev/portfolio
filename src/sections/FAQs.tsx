"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
const faqs = [
  {
    question: "What technologies do you use?",
    answer: "I primarily use React, Next.js, Tailwind CSS, and TypeScript.",
  },
  {
    question: "Are you open to freelance or internships?",
    answer: "Yes, I'm open to freelance, internships, or junior roles.",
  },
  {
    question: "Do you have any live projects?",
    answer: "Yes, you can view my work on the Projects section or GitHub.",
  },
  {
    question: "Are you comfortable working in teams?",
    answer:
      "Yes, I enjoy collaborating using Git/GitHub, and I'm comfortable with team workflows like branching, pull requests, and code reviews.",
  },
  {
    question: "What are your future learning goals?",
    answer:
      "I'm currently exploring backend development (Node.js) and system design to become a full-stack developer.",
  },
  {
    question: "How do you stay updated with tech trends?",
    answer:
      "I regularly follow tech blogs, YouTube channels, and contribute to open source when possible.",
  },
  {
    question: "How do you manage project deadlines?",
    answer:
      "I follow clear task breakdowns using tools like Trello or Notion, and prioritize based on impact and complexity.",
  },

  {
    question: "Have you contributed to open source?",
    answer:
      "I’ve contributed to a few beginner-friendly repositories on GitHub and plan to grow more into open source involvement.",
  },
];

const FAQs: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <section className="section" id="faqs">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, faqIndex) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b relative isolate group/faq"
              onClick={() => {
                if (faqIndex === selectedIndex) {
                  setSelectedIndex(null);
                } else {
                  setSelectedIndex(faqIndex);
                }
              }}
            >
              <div
                className={twMerge(
                  "absolute h-0 w-full bottom-0 left-0 bg-stone-300 -z-10 group-hover/faq:h-full transition-all duration-700",
                  faqIndex === selectedIndex && "h-full"
                )}
              ></div>
              <div
                className={twMerge(
                  "flex items-center justify-between gap-4 translate-all-duration-700 group-hover/faq:lg:px-8",
                  faqIndex === selectedIndex && "lg:px-8"
                )}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl">
                  {question}
                </div>
                <div
                  className={twMerge(
                    "inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-300 bg-stone-200",
                    faqIndex === selectedIndex && "rotate-45"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {faqIndex === selectedIndex && (
                  <motion.div
                    className="overflow-hidden lg:px-8"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <p className="text-xl mt-4">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
