import { cn } from "@/lib/utils";

const SectionHeader = ({
  heading,
  subHeading,
  containerClassName,
  headingClassName,
  subHeadingClassName,
}) => {
  return (
    <div className={cn(containerClassName, "flex flex-col gap-2")}>
      <h2 className={cn(headingClassName, "title")}>{heading}</h2>
      <p
        className={cn(
          subHeadingClassName,
          "text-xs md:text-lg !leading-[1.4] text-center text-black-600"
        )}
      >
        {subHeading}
      </p>
    </div>
  );
};

export default SectionHeader;
