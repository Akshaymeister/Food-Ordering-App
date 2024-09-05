import { useState } from "react";
import contactUs from "../img/contactUs.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="flex gap-10 items-center justify-center my-32">
      <div className="contact-left">
        <img src={contactUs} alt="" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold text-center p-4">Contact us</h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            className="p-2 mb-3 w-[500px] border  outline-none rounded-lg focus-within:border-orange-400 border-gray-200 grow"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="p-2 mb-3 w-[500px] border  outline-none rounded-lg focus-within:border-orange-400 border-gray-200 grow"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="p-2 mb-3 w-[500px] border  outline-none rounded-lg focus-within:border-orange-400 border-gray-200 grow"
            placeholder="Type your Message here..."
            required
          ></textarea>
          <button
            className="mb-4 w-28 cursor-pointer px-4 py-2 bg-orange-400 text-white rounded-md font-semibold hover:bg-orange-600"
            type="submit"
          >
            Submit
          </button>
          {message && (
            <span className="text-xl font-bold">
              Thanks for contacting Forkify, We will reply ASAP.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
