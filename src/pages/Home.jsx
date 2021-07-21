import React, { useState, useEffect } from "react";
import { data } from "../helpers/Data.js";
import ResultCard from "../components/ResultCard";
import HeaderIMC from "../components/HeaderIMC";
const Home = () => {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    if (data !== undefined) setFlag(false);
  }, [data]);
  // console.log(data, flag);

  return (
    <>
      <div className="w-1/2 h-screen flex flex-col mx-auto">
        <div className="w-full h-full lg:h-1/2 my-auto bg-gray-100">
          <HeaderIMC />
          <div className="flex flex-col lg:flex-row">
            {!flag &&
              data.map((item, index) => <ResultCard key={index} item={item} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
