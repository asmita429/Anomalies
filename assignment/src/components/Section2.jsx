import React, { useState } from "react";
import AudioPlayer from "./Audioplayer";
import One from "../assets/One.wav";
import Six from "../assets/Six.wav";
import Waveform from "./Waveform";

const Section2 = () => {
  const [selectedAnomaly, setSelectedAnomaly] = useState("");
  const [selectedAction, setSelectedAction] = useState("");

  const handleAnomalyChange = (event) => {
    setSelectedAnomaly(event.target.value);
  };
  const handleActionChange = (event) => {
    setSelectedAction(event.target.value);
  };
  const handleSubmit = (event) => {
    // event.preventDefault();
    // Handle form submission here
    console.log("Submitted anomaly:", selectedAnomaly);
    console.log("Submitted action:", selectedAction);
  };

  return (
    <div className="text-dashboard">
      <div className="px-11 py-5">
        <p className="text-2xl">Alert ID #00013211</p>
        <p>Detected at 2021-04-22 20:10:04</p>
      </div>

      <div className="w-[865px] ml-4 border-t-[0.5px] border-mainBorder flex justify-between">
        <div className="">
          <div className="mt-2 mx-8">
            <span>Anomaly Machine Output</span>
            <AudioPlayer src={One} />
          </div>

          <div className="flex flex-col justify-between items-end my-2">
            <Waveform audioFile={One} />
            <img
              src="https://s3-alpha-sig.figma.com/img/969a/8654/96c64c1034791d3b065ee7c97fa22e35?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lwYiBPNx9JeaXUDXot8v2mIxPPdKbvRZg6t~BDs4KyBDna-1yr8i2u~5U5ra02t1wYykHp51uxJxLvJsDB2uF8Hztl8SAk7WsKuCjYEdGRrs6FUchJsmQkkJrF18eh~lZ9mBEzxj8OIklKoqR8DPNRqykuT0OKU28W84-hqbjY08Ssb~jmCb5tCIg3gRSc2OILXim0tBQgcPZpEmlUnr7Bis4JsO1NirFB5mam6iPbBTvbJJkHjU3tpmjh1pnHKZrrwJEDilakZAk5K3QjJsz49qUb9Z9T7xiY55iRjecQinXjpsdjLe8OUJvrnIP7sbU-cjW4V4hUDI9QVF6oinTA__"
              alt=""
              className="w-[378px] h-[300px] my-1"
            />
          </div>
        </div>

        <div className="">
          <div className="mt-2 mx-8">
            <span>Normal Machine Output</span>
            <AudioPlayer src={Six} />
          </div>

          <div className="flex flex-col justify-between items-end my-2">
            <Waveform audioFile={Six} />
            <img
              src="https://s3-alpha-sig.figma.com/img/969a/8654/96c64c1034791d3b065ee7c97fa22e35?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lwYiBPNx9JeaXUDXot8v2mIxPPdKbvRZg6t~BDs4KyBDna-1yr8i2u~5U5ra02t1wYykHp51uxJxLvJsDB2uF8Hztl8SAk7WsKuCjYEdGRrs6FUchJsmQkkJrF18eh~lZ9mBEzxj8OIklKoqR8DPNRqykuT0OKU28W84-hqbjY08Ssb~jmCb5tCIg3gRSc2OILXim0tBQgcPZpEmlUnr7Bis4JsO1NirFB5mam6iPbBTvbJJkHjU3tpmjh1pnHKZrrwJEDilakZAk5K3QjJsz49qUb9Z9T7xiY55iRjecQinXjpsdjLe8OUJvrnIP7sbU-cjW4V4hUDI9QVF6oinTA__"
              alt=""
              className="w-[378px] h-[300px] my-1"
            />
          </div>
        </div>
      </div>

      <div className="my-10 mx-8 text-black w-[679px]">
        <form action="" onSubmit={handleSubmit}>
          <div className="">
            <p className="font-bold">Equipment</p>
            <span>CNC Machine</span>
          </div>

          <div className="my-3">
            <label htmlFor="anomaly" className="font-bold">
              Suspected Reason
            </label>
            <br />
            <select
              id="anomaly"
              value={selectedAnomaly}
              onChange={handleAnomalyChange}
              className="border-[0.5px] rounded border-mainBorder w-[271px] text-[16px] p-2"
            >
              <option value="">Unknown Anomaly</option>
              <option value="anomaly1">Option 1</option>
              <option value="anomaly2">Option 2</option>
              <option value="anomaly3">Option 3</option>
            </select>
          </div>

          <div className="my-3">
            <label htmlFor="action" className="font-bold">
              Action Required
            </label>
            <br />
            <select
              id="action"
              value={selectedAction}
              onChange={handleActionChange}
              className="border-[0.5px] rounded border-mainBorder w-[271px] text-[16px] p-2"
            >
              <option value="">Select Action</option>
              <option value="action1">Option 1</option>
              <option value="action2">Option 2</option>
              <option value="action3">Option 3</option>
            </select>
          </div>

          <div className="my-5 ">
            <label htmlFor="comments" className="font-bold">
              Comments
            </label>
            <br />
            <textarea
              name="comments"
              id="comments"
              cols="60"
              rows="5"
              className="border-[0.5px] rounded-xl border-mainBorder w-full"
            ></textarea>
          </div>

          <button
            className="text-white rounded-[8px] px-8 py-2 text-center font-medium bg-activeB"
            type="submit"
          >
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Section2;
