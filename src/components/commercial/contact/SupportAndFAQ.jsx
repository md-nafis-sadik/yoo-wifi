import SectionHeader from "@/components/shared/others/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    <div className="px-4 min-[1320px]:px-0 sec_common_80">
      <div className="sec_common_60 container3X rounded-2xl md:rounded-3xl bg-[#ececec] px-3 md:px-6 min-[1320px]:px-0">
        <SectionHeader
          heading={"Support & FAQ"}
          subHeading={
            "Dive in to find straightforward solutions, helpful tips, and make the most of your journey with Yoowifi."
          }
          containerClassName={"gap-4 md:gap-[18px]"}
        />

        <div className="containerX xl:px-0 grid md:grid-cols-2 gap-y-4 md:gap-10 mt-4 md:mt-8 lg:mt-[60px]">
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={handleOpenChange}
            className="space-y-4 md:space-y-6"
          >
            {firstHalf?.map((faq, index) => (
              <AccordionItem
                value={`item-${index + 1}`}
                className="h-fit bg-white"
                key={index}
              >
                <AccordionTrigger className="text-start gap-6">
                  {faq?.question}
                </AccordionTrigger>
                <AccordionContent>{faq?.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={handleOpenChange}
            className="space-y-4 md:space-y-6"
          >
            {secondHalf?.map((faq, index) => (
              <AccordionItem
                value={`item-${index + 1 + firstHalf.length}`}
                className="h-fit bg-white"
                key={index}
              >
                <AccordionTrigger className="text-start gap-6">
                  {faq?.question}
                </AccordionTrigger>
                <AccordionContent>{faq?.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default SupportAndFAQ;
