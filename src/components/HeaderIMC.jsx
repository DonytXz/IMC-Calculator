import React from "react";
import Calculator from "../assets/icons/calculator.svg";

const HeaderIMC = () => {
  return (
    <>
      <div className="w-full h-full lg:h-1/4 flex flex-col lg:flex-row  items-center my-auto">
        <div className="w-full lg:w-2/3 h-full bg-red-900 flex items-center">
          <p className="mx-auto text-4xl text-white uppercase">
            Indicie de masa corporal
          </p>
        </div>
        <div className="w-full lg:w-1/3 h-full flex flex-row bg-red-400">
          <div className="w-1/4 mr-1">
            <img
              className="bg-white h-full w-full"
              src={Calculator}
              alt=""
              srcSet=""
            />
          </div>
          <div className="w-full lg:w-1/4 h-full flex items-center mx-1">
            <p className="text-2xl text-white uppercase">IMC =</p>
          </div>
          <div className="w-2/4 h-1/2 my-auto flex flex-col items-center">
            <div className="w-full border-b-2"><p className="text-center text-white">peso en kg</p></div>
            <div className=""><p className="text-white">altura en metros ^2</p></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderIMC;
