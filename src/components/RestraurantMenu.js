import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestMenu from "../utils/useRestMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestMenu(resId);

  //guard clause
  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  return (
    <div className="text-center">
      <h1 className=" font-bold my-6 text-2xl">{name}</h1>
      <h3 className=" font-bold text-lg">{cuisines.join(", ")}</h3>
      <h3 className=" font-semibold">{costForTwoMessage}</h3>
      <div>
        {categories.map((category) => {
          return (
            <ResCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
