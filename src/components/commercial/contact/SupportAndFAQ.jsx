import SectionHeader from "@/components/shared/others/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@/services";
import { useEffect, useState } from "react";

const SupportAndFAQ = ({ data }) => {
  const [firstHalf, setFirstHalf] = useState([]);
  const [secondHalf, setSecondHalf] = useState([]);
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    const middleIndex = Math.ceil(data?.length / 2);
    setFirstHalf(data?.slice(0, middleIndex));
    setSecondHalf(data?.slice(middleIndex));
  }, []);

  const handleOpenChange = (value) => {
    setOpenItem(value === openItem ? null : value);
    console.log(value);
  };

  return (
    <div className="px-4 2xl:px-0 sec_common_80">
      <div className="sec_common_60 pb-3 md:pb-10 lg:pb-20 container3X rounded-2xl md:rounded-3xl bg-[#ececec] px-3 md:px-6 min-[1320px]:px-0">
        <SectionHeader
          heading={"Support & FAQ"}
          subHeading={
            "Dive in to find straightforward solutions, helpful tips, and make the most of your journey with Yoowifi."
          }
          containerClassName={"gap-4 md:gap-[18px]"}
        />

        <div className="containerX xl:px-0 grid md:grid-cols-2 gap-y-3 md:gap-10 mt-4 md:mt-8 lg:mt-[60px]">
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={handleOpenChange}
            className={cn("space-y-3 md:space-y-6 rounded-xl")}
          >
            {firstHalf?.map((faq, index) => (
              <AccordionItem
                value={`item-${index + 1}`}
                className="h-fit bg-white px-4 md:px-6 py-4"
                key={index}
              >
                <AccordionTrigger className="text-start text-black-900 text-base md:text-lg font-semibold !leading-[1.2] md:!leading-[1.4]">
                  {faq?.question}
                </AccordionTrigger>
                <AccordionContent
                  className={
                    "text-xs md:text-lg font-normal !leading-[1.2] md:!leading-[1.4] text-black-600"
                  }
                >
                  {faq?.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={handleOpenChange}
            className={cn("space-y-3 md:space-y-6 rounded-xl")}
          >
            {secondHalf?.map((faq, index) => (
              <AccordionItem
                value={`item-${index + 1 + firstHalf.length}`}
                className="h-fit bg-white px-4 md:px-6 py-4"
                key={index}
              >
                <AccordionTrigger className="text-start text-black-900 text-base md:text-lg font-semibold !leading-[1.2] md:!leading-[1.4]">
                  {faq?.question}
                </AccordionTrigger>
                <AccordionContent
                  className={
                    "text-xs md:text-lg font-normal !leading-[1.2] md:!leading-[1.4] text-black-600"
                  }
                >
                  {faq?.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex flex-col items-center mt-4 md:mt-8 lg:mt-[60px]">
          <h2 className="text-main-600 text-2xl md:text-5xl font-bold !leading-[1.4] md:!leading-[1.1] text-center">
            Still have questions?
          </h2>
          <p className="p_common mt-[18px] text-center">
            Can't find the answer you're looking for? Feel free to chat with our
            friendly team!
          </p>

          <div className="flex gap-3 mt-6">
            <Button
              variant="secondary"
              size="lg"
              className={"text-base font-semibold !leading-[1.2]"}
            >
              Get In Touch
            </Button>
            <Button color="white" className={"h-[52px] w-[52px]"}>
              <ArrowUpRightIcon className={"shrink-0 !h-6 !w-6"} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportAndFAQ;
