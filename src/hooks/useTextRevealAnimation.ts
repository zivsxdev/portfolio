import { stagger, useAnimate } from "motion/react";
import { useEffect } from "react";
import SplitType from "split-type";

const useTextRevealAnimation = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
      new SplitType(scope.current, {
        types: "lines,words",
        tagName: "span",
      });
    }
  }, [scope]);

  const entranceAnimation = () => {
    if (!scope.current) return Promise.resolve();
    
    const words = scope.current.querySelectorAll('.word');
    if (words.length === 0) return Promise.resolve();
    
    return animate(words, {
      transform: 'translateY(0)',
    }, {
      duration: 0.5,
      delay: stagger(0.2),
    });
  };

  const exitAnimation = () => {
    if (!scope.current) return Promise.resolve();
    
    const words = scope.current.querySelectorAll(".word");
    if (words.length === 0) return Promise.resolve();
    
    return animate(words, {
      transform: "translateY(100%)"
    }, {
      duration: 0.3,
      delay: stagger(-0.025, {
        startDelay: words.length * 0.025,
      }),
    });
  };

  return {
    scope,
    entranceAnimation,
    exitAnimation,
  };
};

export default useTextRevealAnimation;