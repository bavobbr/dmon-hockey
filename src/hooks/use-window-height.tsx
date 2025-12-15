import { useState, useEffect } from "react";

export function useWindowHeight() {
  const [height, setHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setHeight(window.innerHeight);
      }, 100); // debounce for performance
    };

    window.addEventListener("resize", handleResize);
    // Set initial value
    setHeight(window.innerHeight);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return height;
}
