import burgerImage from "../img/burgerImage.png";

const About = () => {
  return (
    <div className="flex gap-2 justify-center items-center my-36">
      <div className="about-left">
        <h1 className="text-6xl text-gray-800 font-extrabold leading-normal">
          Welcome to <br /> The world of <br />{" "}
          <span className="bg-orange-500 text-white rounded-lg p-2">
            Tasty & Fresh Food
          </span>
        </h1>
        <h4 className="font-semibold italic p-2 text-xl">
          "Better you will feel if you eat a
          <span className="text-orange-500"> Forkify</span> healthy meal"
        </h4>
      </div>
      <div className="about-right">
        <img src={burgerImage} alt="Food Image" />
      </div>
    </div>
  );
};

export default About;
