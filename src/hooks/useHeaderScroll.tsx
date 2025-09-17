import { useEffect, useState } from "react";

export function useHeaderScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (currentScrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setIsHidden(false);
      }

      if (currentScrollY > 200 && currentScrollY > scrollY) {
        setIsHidden(true);
      } else if (currentScrollY < scrollY) {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return {
    isSticky,
    isHidden,
  };
}
