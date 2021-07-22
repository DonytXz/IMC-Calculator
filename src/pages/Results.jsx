import React, { useState, useEffect } from "react";
import ResultCard from "../components/ResultCard";
import { data } from "../helpers/Data.js";
import { useLocation } from "react-router-dom";

const Results = () => {
  const { state } = useLocation();
  const [imc, setImc] = useState();
  const [dataRange, seDataRange] = useState();
  const [flag, setFlag] = useState(true);
  let weight = state.weight;
  let height = state.height;

  const calclculateImc = () => {
    let operation = (weight / ((height * height) / 10000)).toFixed(2);
    setImc(operation);
  };
  const choseRanges = (query) => {
    data.forEach( (item, index) => {
        if(query > item.imc && query < item.imcTop ){
            seDataRange(item);
            setFlag(false);
        }
    })
  };
  // console.log(imc);
  useEffect(() => {
    calclculateImc();
  }, [weight, height]);

  useEffect(() => {
    choseRanges(imc);
  }, [imc]);

  return (
    <>
      <div className="w-1/2 h-screen flex flex-col mx-auto">
        <div className="w-full h-full lg:h-1/2 my-auto bg-gray-100">
        {!flag && 
        <ResultCard item={dataRange} />
        }
        </div>
      </div>
    </>
  );
};

export default Results;
