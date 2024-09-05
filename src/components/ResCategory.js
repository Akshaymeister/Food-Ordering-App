import { ChevronDownIcon } from "@heroicons/react/16/solid";
import ItemList from "./ItemList";
import { useState } from "react";

const ResCategory = ({ data }) => {
  const [showItems, setshowItems] = useState(false);
  const handleClick = () => {
    setshowItems(!showItems);
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-slate-50 shadow-sm p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">{data.title}</span>
          <ChevronDownIcon className="w-7" />
        </div>
        {showItems && <ItemList items={data.itemCards} showButton={true} />}
      </div>
    </div>
  );
};

export default ResCategory;
