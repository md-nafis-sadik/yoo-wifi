import { Input } from "@/components/ui/input";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LetsTalk = ({ data = [] }) => {
  return (
    <div className="containerX xl:px-0">
      <div className="sec_common_80 xl:px-0 flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-[60px]">
        {/* LEFT PORTION */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 lg:gap-12">
          <h2 className="title text-start">Let's Talk</h2>
          <p className="p_common text-black-700">
            If you have any questions or concerns, just fill out the form, and
            we'll get back to you shortly!
          </p>

          {data?.map((item, index) => (
            <div key={index} className="flex flex-row items-center gap-6">
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
        </div>

        {/* RIGHT PORTION */}
        <div className="w-full md:w-1/2 grid grid-cols-2 h-fit gap-x-[28px] gap-y-6">
          <Input
            label="Name"
            placeholder="Enter your name"
            name="name"
            required
          />
          <Input
            label="Phone Number"
            placeholder="Enter phone number"
            name="phone"
            type="number"
            required
          />
          <Input
            label="Email Address"
            placeholder="Enter email address"
            name="email"
            type="email"
            required
          />
          <Input
            label="Subject"
            placeholder="Write a subject"
            name="name"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
