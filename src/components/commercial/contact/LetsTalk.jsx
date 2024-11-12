import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LetsTalk = ({ data = [], socialLinks = [] }) => {
  const [text, setText] = useState("");
  const maxChars = 250;

  const handleTextChange = (e) => {
    if (e.target.value.length <= maxChars) {
      setText(e.target.value);
    }
  };

  return (
    <div className="containerX xl:px-0" id="lets-talk">
      <div className="sec_common_80 xl:px-0 flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-[60px]">
        {/* LEFT PORTION */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 lg:gap-12">
          <h2 className="title text-start">Let's Talk</h2>
          <p className="p_common text-black-700">
            If you have any questions or concerns, just fill out the form, and
            we'll get back to you shortly!
          </p>

          {data?.map((item, index) => (
            <div key={index} className={cn(
              "flex flex-row items-center gap-6", index === 1 && "mt-2 md:mt-0"
            )}>
              <LazyLoadImage
                src={item?.image}
                alt={item?.title}
                className="w-12 md:w-16 aspect-square shrink-0 object-contain"
              />

              <div className="flex flex-col gap-1">
                <p className="p_common text-black-600 uppercase">
                  {item?.text}
                </p>
                <p className="text-lg md:text-2xl font-semibold md:font-bold !leading-[1.4]">
                  {item?.value}
                </p>
              </div>
            </div>
          ))}

          {socialLinks.length > 0 && (<div className="flex items-center gap-x-5 mt-2 md:mt-0">
            {socialLinks.map((item, index) => (<a href={item.link} target="_blank" key={index}>
              {item.icon()}
            </a>))}
          </div>)}
        </div>

        {/* RIGHT PORTION */}
        <form className="w-full lg:w-1/2">
          <div className="w-full grid grid-cols-2 h-fit gap-x-[28px] gap-y-6">
            <Input
              label="Name"
              placeholder="Enter your name"
              name="name"
              wrapperClass={"col-span-2 md:col-span-1"}
              required
            />
            <Input
              label="Phone Number"
              placeholder="Enter phone number"
              name="phone"
              type="number"
              wrapperClass={"col-span-2 md:col-span-1"}
              className="no-spinner"
              required
            />
            <Input
              label="Email Address"
              placeholder="Enter email address"
              name="email"
              type="email"
              wrapperClass={"col-span-2"}
              required
            />
            <Input
              label="Subject"
              placeholder="Write a subject"
              name="name"
              wrapperClass={"col-span-2"}
              required
            />
            <Textarea
              label="Message"
              placeholder="Tell us about your queries.."
              name="message"
              wrapperClass={"col-span-2"}
              value={text}
              onChange={handleTextChange}
              maxChars={maxChars}
              required
              className="resize-none"
            />
          </div>

          <Button type="submit" size={"lg"} className="mt-6">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LetsTalk;
