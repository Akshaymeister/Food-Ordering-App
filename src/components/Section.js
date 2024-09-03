import ResCard, { withPromotedLabel } from "./ResCard";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Shimmer from "./Shimmer";
import { RES_API } from "../utils/constants";
import { resolvePath, Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResData from "../utils/useResdata";

const Section = () => {
  const listRes = useResData();
  const [filteredRest, setfilteredRest] = useState([]);

  useEffect(() => {
    if (listRes.length) setfilteredRest(listRes);
  }, [listRes]);

  const [searchText, setsearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1> Looks like you are Offline. Plz Check your internet connection</h1>
    );

  return !listRes.length ? (
    <Shimmer />
  ) : (
    <div className="section">
      <div className="filter flex items-center justify-center">
        <div className="search-box m-4 p-2">
          <input
            type="search"
            placeholder="Search for Burgers"
            className="p-2 w-96 border  outline-none rounded-lg focus-within:border-orange-400 border-gray-200 grow"
            value={searchText}
            onChange={(e) => {
              e.preventDefault();
              setsearchText(e.target.value);
              const filteredRes = listRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRest(filteredRes);
            }}
          />
        </div>
        <div>
          <button
            className="flex gap-2 justify-center items-center  px-6 py-2 bg-orange-400 text-center  text-white hover:bg-orange-600 m-4 rounded-lg md"
            onClick={() => {
              //filter the restraunt cards and update the ui
              const filteredRes = listRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRest(filteredRes);
            }}
          >
            <MagnifyingGlassIcon className="w-4" />
            Search
          </button>
        </div>
        {/* <div>
          <button
            onClick={() => {
              setfilteredRest(
                listRes.filter((res) => res.info.avgRating >= 4.5)
              );
            }}
            className="px-2 py-2 bg-gray-200 hover:bg-gray-400 color m-4 rounded-lg"
          >
            Top rated Restaurants
          </button>
        </div> */}
      </div>
      <div className="res-container mx-48 grid sm:grid-cols-2 lg:grid-cols-4  justify-items-center">
        {filteredRest.map((res) => (
          <Link
            className="hover:scale-95 transition ease-in-out duration-300 relative z-10"
            key={res.info.id}
            to={`/restaurant/${res?.info?.id}`}
          >
            <ResCard data={res} />
          </Link>
        ))}
      </div>
      {!filteredRest.length && (
        <h1 className="flex justify-center">
          Sorry, we couldn't find results for "{searchText}"
        </h1>
      )}
    </div>
  );
};

export default Section;
