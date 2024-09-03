import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return !item.card.info.imageId ? (
          " "
        ) : (
          <div
            key={item.card.info?.id}
            className="p-2 m-2 pb-4 border-b-2 text-left flex justify-between items-center"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info?.name}</span>
                <span>
                  - ₹
                  {item.card.info?.defaultPrice
                    ? item.card.info?.defaultPrice / 100
                    : item.card.info?.price / 100}
                </span>
              </div>
              <span className="text-xs">{item.card.info.description}</span>
            </div>
            <div className="relative w-3/12 h-42   p-2">
              <button
                className=" absolute p-2 px-4 hover:text-white hover:bg-orange-500 
              bottom-1 left-[50%] translate-x-[-50%] translate-y-[25%] rounded-md bg-white text-orange-500 shadow-lg "
              >
                Add
              </button>
              <img
                className="w-full h-full"
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info?.name}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
