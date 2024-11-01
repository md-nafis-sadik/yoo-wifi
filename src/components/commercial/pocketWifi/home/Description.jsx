import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSelector } from "react-redux";

function Description() {
  const { product } = useSelector((state) => state.pocketWifi);
  console.log();
  return (
    <div className="pt-12  pb-15">
      <div className="containerX">
        <Tabs defaultValue={product?.tabs[0]?.title} className="w-full">
          <TabsList>
            {product?.tabs?.map((item, index) => (
              <TabsTrigger key={index} value={item?.title}>
                {item?.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {product?.tabs?.map((item, index) => (
            <TabsContent key={index} value={item?.title}>
              <p className="text-lg text-black-600 leading-[140%]">
                {item?.content}
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default Description;
