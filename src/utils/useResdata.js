import { useEffect, useState } from "react";
import { RES_API } from "./constants";

const useResData = () => {
  const [listRes, setlistRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RES_API);
    const { data: cards } = await data.json();
    setlistRes(
      cards?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        []
    );
  };
  return listRes;
};

export default useResData;
