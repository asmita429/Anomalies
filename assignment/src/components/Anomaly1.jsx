import React from "react";

const Anomaly1 = ({ machineName, isActive }) => {
  const borderColor = isActive ? "border-activeB" : "border-bottom";
  const borderWidth = isActive ? "border-2" : "border-[0.5px]";
  return (
    <div
      className={`${borderWidth} rounded ${borderColor} text-sm p-2 bg-white`}
    >
      <div className="px-1 flex justify-between">
        <div className="flex justify-evenly gap-1">
          <div className="bg-activeB w-3 h-3 rounded-full mt-[7px]"></div>
          <span>ID #00013211</span>
        </div>
        <span className="bg-orange rounded-3xl text-white px-2">Moderate</span>
      </div>
      <div className="px-5 p-3">
        <p className="font-bold">Unknown Anomally</p>
        <p>Detected at 2021-06-18 20:10:04</p>
      </div>

      <span className="text-activeB px-5">{machineName}</span>
    </div>
  );
};

export default Anomaly1;
