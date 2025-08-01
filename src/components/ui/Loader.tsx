"use client";
import { useEffect, useState } from "react";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

const Loader = () => {
  const name = "z i v s x d e v";
  const [displayText, setDisplayText] = useState(Array(name.length).fill(""));

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      const updated = displayText.map((char, i) => {
        if (frame / 2.5 > i) return name[i];
        return characters[Math.floor(Math.random() * characters.length)];
      });

      setDisplayText(updated);
      frame++;

      if (frame / 2.5 > name.length) clearInterval(interval);
    }, 45); // Fast, smooth transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <h1 className="text-4xl sm:text-2xl font-mono font-bold tracking-widest text-orange-300 px-4 text-center">
        {displayText.map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </h1>
    </div>
  );
};

export default Loader;
