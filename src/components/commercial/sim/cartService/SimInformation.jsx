import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function SimInformation() {
  return (
    <Accordion type="single" className="flex flex-col gap-4" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Information</AccordionTrigger>
        <AccordionContent>
          Enjoy High-Speed Internet Access Immediate Connect up to B Devices 4G
          Internet Speed Up to 12 hours of device battery Ycxywifi 24/7 Customer
          Support Cornes Pocket Wifi Device, Charging Cable, Pouch Extend the
          days or add plans anytime https-/&oowifi
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Countries Covered</AccordionTrigger>
        <AccordionContent>
          Algeria, Anguilla, Antigua and Barbuda, Argentina, Aruba, Azerbaijan,
          Bolivia, Brazil, British Virgin Islands, Chile, Colombia, Costa Rica
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How To</AccordionTrigger>
        <AccordionContent>
          50GB global data is applicable to 90 countries. Speed of service is
          dependent on the mobile network partner. For order cancellation, a
          charge of 10% of the order will apply. General terms and conditions
          apply. Yoowifi reserved the rights to make changes anytime.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Compatibility</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-5">
            <li>50GB global data is applicable to 90 countries.</li>
            <li>
              Speed of service is dependent on the mobile network partner.
            </li>
            <li>
              For order cancellation, a charge of 10% of the order will apply.
            </li>
            <li>Yoowifi reserved the rights to make changes anytime.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default SimInformation;
