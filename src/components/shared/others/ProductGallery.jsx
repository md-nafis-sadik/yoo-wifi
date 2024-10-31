import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

function ProductGallery({
  items = [
    {
      url: "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
    },
    {
      url: "https://png.pngtree.com/background/20231101/original/pngtree-dynamic-cloud-shadows-cast-across-mountain-valley-3d-rendered-design-background-picture-image_5826561.jpg",
    },
    {
      url: "https://png.pngtree.com/background/20230716/original/pngtree-futuristic-3d-backdrop-featuring-earth-and-a-majestic-mountain-landscape-picture-image_4237178.jpg",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczNpN0jn_zYXY8InsOREtiPoB5M05B1yUPRkK0cibIqbhII3cJbwCw2bUIhkxZvzV-do&usqp=CAU",
    },
    {
      url: "https://img.freepik.com/free-photo/blue-purple-colors-planet-earth-night-from-space_1409-7480.jpg?semt=ais_hybrid",
    },
    {
      url: "https://img.freepik.com/free-photo/purple-city-with-planet-background_1340-24077.jpg",
    },
  ],
}) {
  const [activeItem, setActiveItem] = useState(items[0]);
  const gallery = [...items]?.slice(1, 4);
  return (
    <div className="flex flex-col gap-4">
      <Gallery>
        <Item
          original={items[4].url}
          width="620"
          height="460"
          content={
            <img
              src={items[4].url}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              alt="Thumbnail"
            />
          }
        >
          {({ ref, open }) => (
            <div
              ref={ref}
              onClick={open}
              className="w-full h-[532px] bg-neutral-rgb rounded-[20px] flex items-center justify-center p-14 cursor-zoom-in"
            >
              <img
                src={activeItem?.url}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </Item>

        <div className="flex gap-2">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="w-[100px] aspect-square bg-neutral-100c rounded-lg flex items-center justify-center border border-neutral-500 cursor-pointer"
              onClick={() => setActiveItem(item)}
            >
              <img
                src={item?.url}
                alt="icon"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          {items?.length > 5 && (
            <Item
              original={items[4].url}
              width="620"
              height="460"
              content={
                <img
                  src={items[4].url}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  alt="Thumbnail"
                />
              }
            >
              {({ ref, open }) => (
                <div
                  className="w-[100px] aspect-square bg-neutral-100c flex items-center justify-center border border-neutral-200 rounded-lg cursor-pointer"
                  ref={ref}
                  onClick={open}
                >
                  +4 more
                </div>
              )}
            </Item>
          )}
        </div>
        {items?.map((item, index) => (
          <Item
            key={index}
            original={item.url}
            width="520"
            height="360"
            content={
              <img
                src={item.url}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
                alt="Thumbnail"
              />
            }
          >
            {({ ref }) => <div ref={ref}></div>}
          </Item>
        ))}
      </Gallery>
    </div>
  );
}

export default ProductGallery;
