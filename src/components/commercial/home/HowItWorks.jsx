import ConnectCard from "@/components/shared/cards/ConnectCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { Button } from "@/components/ui/button";
import { commercialRoutes } from "@/services";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const howItWorksData = useSelector((state) => state.howItWorks);

  return (
    <section className="containerX sec_common_60 px-4 md:px-6 xl:px-0 flex flex-col items-center gap-6 md:gap-10 lg:gap-20">
      <SectionHeader
        heading="Stay Connected Anywhere, Anytime"
        subHeading="Discover what our valued customers have to say about their experiences with our services"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
        {howItWorksData.map((item, index) => (
          <ConnectCard key={index} item={item} />
        ))}
      </div>

      <Link to={commercialRoutes.howItWorks.path}>
        <Button size="lg" variant="secondary">
          How it Works
        </Button>
      </Link>
    </section>
  );
};

export default HowItWorks;
