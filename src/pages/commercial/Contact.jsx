import LetsTalk from "@/components/commercial/contact/LetsTalk";
import SupportAndFAQ from "@/components/commercial/contact/SupportAndFAQ";
import HeroCommon from "@/components/shared/others/HeroCommon";
import { useSelector } from "react-redux";

const Contact = () => {
  const { contact, faqs } = useSelector((state) => state.contact);

  return (
    <div>
      <HeroCommon
        title={"Contact us"}
        description={
          "If you have a question or doubt, simply fill in the form and we will get back to you soon!"
        }
      />
      <LetsTalk data={contact} />
      <SupportAndFAQ data={faqs} />
    </div>
  );
};

export default Contact;
