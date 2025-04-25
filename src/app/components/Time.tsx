"use client";
import { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);

      // calculate timeout to next minute
      const seconds = now.getSeconds();
      const ms = now.getMilliseconds();
      const timeout = (60 - seconds) * 1000 - ms;
      return setTimeout(() => {
        updateTime();
        // after first timeout, set interval to 60 seconds
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
      }, timeout);
    };

    const timeout = updateTime();
    // cleanup function to clear the timeout
    // called on component unmount
    return () => {
      clearTimeout(timeout);
    };

  }, []);

  return <span>{time}</span>;
}
