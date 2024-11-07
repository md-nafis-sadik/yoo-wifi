import useGteNavbarStatus from "@/hooks/useGteNavbarStatus";
import { cn } from "@/lib/utils";
import { commercialRoutes, LogoIcon } from "@/services";
import { Link } from "react-router-dom";

function NavBar() {
  const { isScrolled, isWhite } = useGteNavbarStatus();

  return (
    <header className="fixed top-0 px-4 py-2 sm:py-4 left-0 w-full z-[999]">
      <div className="containerHeader">
        <nav className={cn(isWhite ? "text-white" : "text-black-700")}>
          <Link to={commercialRoutes.home.path}>
            <LogoIcon />
          </Link>
          <button type="butotn">
            
          </button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
