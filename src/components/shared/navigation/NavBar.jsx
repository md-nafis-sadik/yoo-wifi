import { Link } from "react-router-dom";
import { commercialRoutes, LogoIcon } from "@/services";

function NavBar() {
  return (
    <header className="fixed top-0 px-4 py-2 sm:py-4 left-0 w-full z-[999]">
      <div className="containerHeader">
        <nav>
          <Link to={commercialRoutes.home.path}>
            <LogoIcon />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
