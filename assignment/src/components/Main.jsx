import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Main = () => {
  return (
    <main className="w-[1233px] h-[1170px] mt-[18px] ml-5 border-[0.5px] border-bottom rounded bg-white">
      <div className="border-b-[1px] border-bottom pb-1">
        <div className="py-1 mt-1 ml-4 border-[0.5px] w-fit border-bottom rounded flex justify-between items-center">
          <span className="px-3">CNC Machine</span>
          <IoMdArrowDropdown className="h-[35px] w-[35px] mx-2" />
        </div>
      </div>
      <div className="flex">
        <Section1 />
        <Section2 />
      </div>
    </main>
  );
};

export default Main;
