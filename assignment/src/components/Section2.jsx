import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import AudioPlayer from "./Audioplayer";
import One from "../assets/One.wav";

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

          <div className="flex flex-col items-end justify-between">
            <img
              src="https://s3-alpha-sig.figma.com/img/7f70/a6bb/64a5e6a2bdaf5c7e9e5e6bcc31c87590?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TuLc4vgVbfGpvk9CcaMVVkE85Q3EWi7ABWRbCE7O0MZ4oTjWnsExUjY~6Nh3QxH8fUsN-3ITUylOiHNyyfWc0RZMj88L5xOwPlKYovz2TzJB410Y~6CpYdSLPK~8kcCXJSOVdI-xi82dS0wn268fPicMU75l54EV7pobP65mr0U8xCwLk-DnJSK9~Q6JUpelDcAHl36doYXD3ztB~5r1zhUQcmQ-Ix8qtljvLssgJCjICJHMJ6wRybX0V0WibUsnW8ztc~TJ5K3TC2a20Z8Xh4hdpP76UfByhxXlEZuQQhlwpTaU1UCicmuBGylBTUVIpGVJrqsOhXyHGQ~nmehQxw__"
              alt=""
              className="w-[391px] h-[144px] my-1"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/969a/8654/96c64c1034791d3b065ee7c97fa22e35?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lwYiBPNx9JeaXUDXot8v2mIxPPdKbvRZg6t~BDs4KyBDna-1yr8i2u~5U5ra02t1wYykHp51uxJxLvJsDB2uF8Hztl8SAk7WsKuCjYEdGRrs6FUchJsmQkkJrF18eh~lZ9mBEzxj8OIklKoqR8DPNRqykuT0OKU28W84-hqbjY08Ssb~jmCb5tCIg3gRSc2OILXim0tBQgcPZpEmlUnr7Bis4JsO1NirFB5mam6iPbBTvbJJkHjU3tpmjh1pnHKZrrwJEDilakZAk5K3QjJsz49qUb9Z9T7xiY55iRjecQinXjpsdjLe8OUJvrnIP7sbU-cjW4V4hUDI9QVF6oinTA__"
              alt=""
              className="w-[378px] h-[300px] my-1"
            />
          </div>
        </div>

        <div className="">
          <div className="mt-2 mx-8">
            <span>Anomaly Machine Output</span>
          </div>
          <div className="flex flex-col items-end justify-between pl-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/7f70/a6bb/64a5e6a2bdaf5c7e9e5e6bcc31c87590?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TuLc4vgVbfGpvk9CcaMVVkE85Q3EWi7ABWRbCE7O0MZ4oTjWnsExUjY~6Nh3QxH8fUsN-3ITUylOiHNyyfWc0RZMj88L5xOwPlKYovz2TzJB410Y~6CpYdSLPK~8kcCXJSOVdI-xi82dS0wn268fPicMU75l54EV7pobP65mr0U8xCwLk-DnJSK9~Q6JUpelDcAHl36doYXD3ztB~5r1zhUQcmQ-Ix8qtljvLssgJCjICJHMJ6wRybX0V0WibUsnW8ztc~TJ5K3TC2a20Z8Xh4hdpP76UfByhxXlEZuQQhlwpTaU1UCicmuBGylBTUVIpGVJrqsOhXyHGQ~nmehQxw__"
              alt=""
              className="w-[391px] h-[144px] my-1"
            />
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
