import React from "react";
import { IoCaretBack } from "react-icons/io5";
import Anomaly1 from "./Anomaly1";
import Anomaly2 from "./Anomaly2";

const Section1 = () => {
  return (
    <div className="w-[316px] h-[1114px] border-[0.5px] rounded border-bottom text-sm">
      <div className="py-2 px-4 my-2 ml-3  w-fit flex justify-between items-center">
        <IoCaretBack className="w-[20px] h-[20px]" />
        <span className="pl-4">Back</span>
      </div>
      <div className=" h-[760px] border-y-[0.5px] border-bottom rounded  text-dashboard overflow-visible">
        <div className="px-3  py-2 flex justify-start items-start gap-4 border-b-[0.5px] border-bottom">
          <span>6 Alerts</span>
          <span className="text-white text-center w-[75px] rounded-3xl bg-activeB">
            2 New
          </span>
        </div>
        <div className="px-3 flex flex-col justify-evenly my-[10px] gap-[13px] ">
          <Anomaly1 machineName={"CNC Machine"} isActive={true} />
          <Anomaly1 machineName={"CNC Machine"} isActive={false} />
          <Anomaly2 machineName={"CNC Machine"} />
          <Anomaly2 machineName={"Milling Machine"} />
          <Anomaly2 machineName={"Milling Machine"} />
          <Anomaly2 machineName={"Milling Machine"} />
        </div>
      </div>
    </div>
  );
};

export default Section1;
