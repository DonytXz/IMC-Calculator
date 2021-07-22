import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if ((height, weight !== "")) setFlag(false);
  }, [height, weight]);

//   console.log(height, weight);
  const handleWeight = (event) => {
    setWeight(event.target.value);
  };
  const handleHeight = (event) => {
    setHeight(event.target.value);
  };
  return (
    <>
      <div className="flex flex-col px-4 my-4">
        <label className="text-center mb-2 text-2xl">
          Introduce tu altura en metros
        </label>
        <input
          onChange={handleHeight}
          className="w-1/2 mx-auto border-2 mb-2"
          type="number"
        />
        <label className="text-center mb-2 text-2xl">
          Introduce tu peso en kg
        </label>
        <input
          onChange={handleWeight}
          className="w-1/2 mx-auto border-2"
          type="number"
        />
        {/* <button disabled={flag} className="p-2 bg-green-600 w-1/4 mx-auto text-white mt-2">
          Calcular IMC
        </button> */}
        <Link
        disabled={flag}
          className="p-1 bg-green-600 w-1/4 mx-auto text-white mt-2 text-center"
          to={{
            pathname: "/results",
            state: {
              weight: weight,
              height: height
            },
          }}
        >
          Calcular IMC
        </Link>
      </div>
    </>
  );
};

export default Search;
