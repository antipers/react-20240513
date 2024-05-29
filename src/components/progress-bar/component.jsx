import { useState } from "react";
import "./styles.css";

export const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  function getWidth() {
    let scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    let result =
      (window.scrollY /
        (scrollHeight - document.documentElement.clientHeight)) *
      100;
    setWidth(result);
  }

  window.addEventListener("scroll", getWidth);

  return <div className="myBar" style={{ width: `${width}%` }}></div>;
};
