import errorImage from "../img/errorImage.jpg";
import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

const Error = () => {
  // call useRouteError so we can access error data while routing
  const err = useRouteError();
  return (
    <div className="my-32 flex items-center justify-center flex-col">
      <img src={errorImage} alt="Error Image" />
      <h1 className="text-3xl p-4 font-bold">
        Oops! The restaurant you're looking for can't be found.
      </h1>
      <h3 className="text-xl font-semibold mb-2">{err.data}</h3>
      <h3 className="cursor-pointer px-4 py-2 bg-orange-400 text-white rounded-md font-semibold hover:bg-orange-600">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};

export default Error;
