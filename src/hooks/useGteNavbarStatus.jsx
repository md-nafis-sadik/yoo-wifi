import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function useGteNavbarStatus() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { selectedHeroIndex } = useSelector((state) => state.shared);
  const isHome = location?.pathname === "/";

  function handleScroll() {
    setIsScrolled(window.scrollY > 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return {
    isScrolled,
    isWhite: selectedHeroIndex != 2 && !isScrolled && isHome,
  };
}

export default useGteNavbarStatus;
