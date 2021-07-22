import React from "react";

const ResultCard = (props) => {
  const { item } = props;
  let color;

  switch (item.color) {
    case "deep-blue":
      color = "bg-blue-900";
      break;
    case "blue":
      color = "bg-blue-300";
      break;
    case "orange":
      color = "bg-yellow-400";
      break;
    case "deep-orange":
      color = "bg-yellow-600";
      break;
    case "dark-red":
      color = "bg-red-700";
      break;
    default:
      break;
  }
  return (
    <>
      <div className="w-full h-2/4 flex flex-col items-center my-auto">
        <div className="w-full h-3/4">
          <img className="mx-auto" src={item.imgPath} alt="" />
        </div>
        <div className={`${color} w-full h-1/4 m-1`}>
          <p className="text-center p-4">{item.displayedImc}</p>
        </div>
        <div className={`${color} bg-gray-200 w-full h-1/4 m-1`}>
          <p className="text-center p-4">{item.title}</p>
        </div>
      </div>
    </>
  );
};

export default ResultCard;
