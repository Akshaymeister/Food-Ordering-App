import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(`${MENU_API_URL}${resId}`);
    const json = await data.json();
    setresInfo(json?.data);
  };
  return resInfo;
};

export default useRestMenu;
