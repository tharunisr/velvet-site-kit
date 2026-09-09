import { useEffect, useRef, useState } from "react";

// Lightweight scroll-reveal: adds the reveal-in class once the element enters view.
export function useReveal(options) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px", ...(options || {}) },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shown, options]);

  return { ref, shown };
}
