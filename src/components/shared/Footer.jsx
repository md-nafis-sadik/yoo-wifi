import { footerdata } from "@/services/data";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container2X sec_common_80 grid grid-cols-1 md:grid-cols-6">
        <div className="col-span-1 md:col-span-2"></div>
        <div className="col-span-1 md:col-span-3"></div>
      </div>

      <div className="container2X sec_common_40 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs md:text-base text-white font-semibold !leading-[1.2]">
          ©2024 Yoowifi. All Rights Reserved.
        </p>

        <div className="flex gap-4 md:gap-8">
          {footerdata.legals.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-xs md:text-base text-white font-semibold !leading-[1.2] hover:opacity-70"
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
