import { CDN_URL } from "../utils/constants";
import { StarIcon } from "@heroicons/react/16/solid";

const ResCard = ({ data }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    data?.info;
  return (
    <div className="m-4 p-4 w-60 h-[26rem] rounded-lg  ">
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        className=" h-44 w-56  rounded-lg"
      />
      <h3 className="font-bold py-2 text-xl">{name}</h3>
      <h4 className="font-semibold my-2 p-  w-12 h-6 border border-solid border-slate-200 bg-green-500 flex justify-center items-center text-white">
        {" "}
        <StarIcon className="w-3" /> {avgRating}
      </h4>
      <h4 className=" py-1">
        {cuisines
          .filter((item, i) => {
            return i <= 1;
          })
          .join(", ")}
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} Mins</h4>
    </div>
  );
};

//higher order components
export const withPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
