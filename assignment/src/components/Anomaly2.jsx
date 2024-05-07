import React, { useState } from "react";

const Anomaly2 = ({ machineName }) => {
  return (
    <div className="border-[0.5px] rounded border-{color} text-sm p-2 bg-white">
      <div className="px-1 flex justify-between">
        <span className="pl-4">ID #00013211</span>
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

export default Anomaly2;
