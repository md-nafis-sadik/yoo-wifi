import GeneralCard from "@/components/shared/cards/GeneralCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { useNavigate, useNavigation } from "react-router-dom";

function ReturnDevice() {
  const navigate = useNavigate();

  const cardData = [
    {
      title: "Singpost Drop-Off",
      description:
        "When you rent the device, a pre-paid return label will be included in the package. You can use this label to easily mail the device back. After returning it, you’ll likely receive an email confirmation once the return is processed.",
      buttonText: "View Locations",
      onClick: () => navigate("/pick-drop-location"),
    },
    {
      title: "Pickup Drop off Locations",
      description:
        "With Yoowifi, you can effortlessly pick up your device at any of our designated locations and return it at one of our 30+ convenient drop-off points across the island. This streamlined process guarantees a hassle-free experience, allowing you to stay connected wherever your travels take you!",
      buttonText: "View Locations",
      onClick: () => navigate("/pick-drop-location"),
    },
  ];

  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading="How to Return Device?"
          subHeading="Follow our easy steps to ensure a hassle-free return experience."
          containerClassName="gap-4"
        />
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-10 md:mt-15">
          {cardData.map((card, index) => (
            <GeneralCard
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              onClick={card.onClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReturnDevice;
