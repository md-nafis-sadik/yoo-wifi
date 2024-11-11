import { useLocation } from "react-router-dom";

const useActiveMenuItem = (menuItems) => {
  const location = useLocation();

  // Returns an array indicating if each item is active based on current location
  return menuItems.map((item) => {
    console.log(location.pathname.includes(item.activePath));
    return {
      ...item,
      isActive: location.pathname.includes(item.activePath),
    };
  });
};

export default useActiveMenuItem;
