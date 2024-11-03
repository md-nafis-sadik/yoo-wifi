import { footerData } from "@/services/data";
import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { images } from "@/services";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container2X px-6 min-[1320px]:px-0 sec_common_80 grid grid-cols-1 md:grid-cols-10 gap-10 md:gap-20">
        {/* CONTACT/LOGO */}
        <div className="col-span-1 md:col-span-5 min-[1320px]:col-span-4">
          <LazyLoadImage
            src={images.appLogo}
            alt="logo"
            className="h-[71px] w-auto"
          />
          {footerData.contact.map(({ type, value }, index) => (
            <p
              key={index}
              className="flex items-center gap-1 mt-4 md:mt-6 text-base md:text-lg !leading-[1.4]"
            >
              <span className="text-black-600">{type} :</span>
              <span className="text-white font-semibold">{value}</span>
            </p>
          ))}

          <p className="text-lg md:text-2xl text-secondary-500 font-semibold !leading-[1.4] mt-5 md:mt-8">
            Subscribe newsletter!
          </p>

          <form className="flex items-center bg-neutral-900 rounded-[8px] md:rounded-[20px] p-2 shadow-md mt-3 md:mt-4 border border-neutral-800 max-w-[348px]">
            <input
              type="email"
              placeholder="Ex: user@website.com"
              className="text-sm md:text-base bg-transparent text-white placeholder-black-600 focus:outline-none w-full px-4 font-semibold"
              required
            />
            <button className="h-8 w-8 md:h-[52px] md:w-[52px] shrink-0 bg-main-600 hover:bg-red-500 text-white rounded-[8px] md:rounded-2xl p-2 flex items-center justify-center ml-2">
              <ChevronRight className="w-6 h-6" />
            </button>
          </form>
        </div>

        {/* ESSENTIAL LINKS */}
        {footerData.menuData.map(({ title, links }, index) => (
          <div
            key={index}
            className="col-span-1 md:col-span-5 min-[1320px]:col-span-2 shrink-0"
          >
            <h3 className="text-base md:text-lg text-main-600 font-bold uppercase !leading-[1.4]">
              {title}
            </h3>
            <ul className="mt-4 md:mt-6">
              {links.map(({ label, path }, index) => (
                <li
                  key={index}
                  className="text-sm md:text-base text-black-100 font-semibold !leading-[1.2] hover:opacity-70 mt-3 md:mt-6 lg:mt-8 whitespace-nowrap"
                >
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container2X px-6 min-[1320px]:px-0 sec_common_40 flex flex-col md:flex-row gap-2 justify-between md:items-center">
        <p className="text-sm md:text-base text-white !leading-[1.4]">
          ©2024 <span className="font-semibold">Yoowifi</span>. All Rights
          Reserved.
        </p>

        <div className="flex gap-4 md:gap-8">
          {footerData.legals.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-sm md:text-base text-white !leading-[1.4] hover:opacity-70"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
