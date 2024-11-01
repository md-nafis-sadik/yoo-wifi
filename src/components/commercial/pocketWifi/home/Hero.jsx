import ProductGallery from "@/components/shared/others/ProductGallery";

function Hero() {
  return (
    <section className="pt-10 pb-[60px] px-4">
      <div className="containerX">
        <div className="flex">
          <div className="w-full max-w-[532px]">
            <ProductGallery />
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
