import { useState, useEffect } from "react";

export function useWindowHeight() {
  // Always start at 0 so SSR and client render the same initial value.
  // The real height is applied after hydration in useEffect.
  const [height, setHeight] = useState(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setHeight(window.innerHeight);
      }, 100); // debounce for performance
    };

    window.addEventListener("resize", handleResize);
    // Set initial value after hydration
    setHeight(window.innerHeight);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return height;
}
