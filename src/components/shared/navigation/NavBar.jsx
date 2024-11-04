import { images, navBarData, commercialRoutes as routes } from "@/services";
import { Link, NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={(isActive) =>
        `relative px-4 py-2 hover:text-red-400 text-black-900 ${
          isActive ? "font-semibold" : ""
        }`
      }
    >
      {label}
      {/* <span
        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-red-500 transition-transform ${
          isActive ? "scale-x-100" : "scale-x-0"
        }`}
      /> */}
    </NavLink>
  );
};

const NavBar = () => {
  return (
    <nav className="bg-transparent">
      <div className="flex flex-row items-center justify-between h-14 md:h-20 max-w-[1312px] mx-auto px-4 min-[1280px]:px-0 w-full">
        <Link to={routes.home.path}>
          <img src={images.appLogo} alt="app logo" className="h-10 w-auto" />
        </Link>

        <ul className="flex space-x-3">
          {navBarData.commercialNavItems.map(({ _id, label, path }) => (
            <NavItem key={_id} to={path} label={label} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
