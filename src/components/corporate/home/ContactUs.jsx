import { Button } from "@/components/ui/button";
import React from "react";
import { useSelector } from "react-redux";

const ContactUs = () => {

  const { aboutUs } = useSelector((state) => state.pocketWifi);

  return (
    <section className="sec_common_60 ">
      <div className="container2X ">

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {aboutUs.map((item, index) => (<div key={index} className="lg:py-10 lg:px-6 py-5 px-3 border-2 border-neutral-200 rounded-3xl">

            <div className="p-4 lg:p-[26.67px] bg-main-50 w-max rounded-[21.33px]">
              {item.icon()}
            </div>

            <h4 className="mt-6 mb-3 text-black-900 text-xl lg:text-[28px] font-bold leading-[110%]">
              {item.title}
            </h4>

            <p className="text-black-600 text-sm lg:text-[18px] leading-[140%]">
              {item.content}
            </p>

          </div>))}
        </div>

        <div className="mt-6 lg:mt-10 flex justify-center">
          <Button size="lg">
            Contact Us
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
