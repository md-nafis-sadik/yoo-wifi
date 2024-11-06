import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CellphoneIcon,
  HamburgerIcon,
  images,
  navBarData,
  PersonIcon,
  commercialRoutes as routes,
  SearchIcon,
} from "@/services";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import AuthDialog from "./AuthDialog";

const NavItem = ({ to, label, isActive }) => {
  return (
    <NavLink
      to={to}
      className={cn(
        isActive
          ? "font-semibold active-link border-b-2 border-main-650"
          : "font-normal border-none",
        "text-sm relative px-2 py-2 hover:text-main-600 text-black-900"
      )}
    >
      {label}
      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-500 transition-transform duration-300 scale-x-0 active-link:scale-x-100" />
    </NavLink>
  );
};

const NavBar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="bg-transparent">
      <div className="flex flex-row items-center justify-between gap-4 h-14 md:h-20 max-w-[1312px] mx-auto px-4 md:px-10 min-[1344px]:px-0 w-full">
        <Link to={routes.home.path}>
          <img src={images.appLogo} alt="app logo" className="h-10 w-auto" />
        </Link>

        <ul className="hidden min-[1360px]:flex gap-3">
          {navBarData().commercialNavItems.map(({ _id, label, path }) => (
            <NavItem
              key={_id}
              to={path}
              label={label}
              isActive={currentPath === path}
            />
          ))}
        </ul>

        <div className="hidden min-[1360px]:flex flex-row gap-3">
          <Link to={"/"}>
            <Button
              className={
                "h-10 w-[160px] px-6 md:py-2 rounded-[10px] min-h-full"
              }
              variant="outline"
            >
              <SearchIcon className="w-6 h-6 shrink-0" color="#757575" />
              <span className="text-xs font-normal !leading-[1.2] text-black-600">
                Search country
              </span>
            </Button>
          </Link>
          <Link to={"/"}>
            <Button
              className={"h-10 w-[160px] px-6 md:py-3 rounded-[10px] gap-1"}
            >
              <CellphoneIcon className="!w-5 !h-5 shrink-0" />
              <span>Download APP</span>
            </Button>
          </Link>
          <Button
            className={"w-10 h-10 rounded-[10px]"}
            size="icon"
            variant="secondary"
            onClick={() => setIsDialogOpen(true)}
          >
            <PersonIcon className="!h-6 !w-6 shrink-0" />
          </Button>
        </div>

        <div className="flex min-[1360px]:hidden items-center justify-end gap-4">
          <Button variant="ghost" className={"p-0"}>
            <SearchIcon className="!w-6 !h-6 flex-shrink-0" color="#181A20" />
          </Button>
          <Button variant="ghost" className={"p-0"}>
            <HamburgerIcon
              className="!w-6 !h-6 flex-shrink-0"
              color="#181A20"
            />
          </Button>
        </div>
      </div>

      <AuthDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
    </nav>
  );
};

export default NavBar;
