import React, { useRef, useState } from "react";
import useClickOutside from "./useClickOut";

const EnterTIme = () => {
  const timeRef = useRef(null);
  const [editTime, setEditTime] = useClickOutside(timeRef);
  const [time, setTime] = useState("");

  const formatTime = (timetoFormat) => {
    const [hour, minute] = timetoFormat.split(":");
    const newhour = hour < 13 ? hour : hour - 12;
    return `${newhour}:${minute} ${hour < 13 ? "AM" : "PM"}`;
  };

  return (
    <div ref={timeRef} className="time-wrapper">
      {!editTime && (
        <span className="time" onClick={() => setEditTime(true)}>
          <span>Click to change time</span>
          {time ? formatTime(time) : "Time"}
        </span>
      )}
      {editTime && (
        <input
          className="text-black"
          value={time}
          type="time"
          onChange={(e) => setTime(e.target.value)}
        />
      )}
    </div>
  );
};

export default EnterTIme;
