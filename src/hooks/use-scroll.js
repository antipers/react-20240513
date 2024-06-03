import { useState } from "react";
import { useEffect } from "react";

export const useProgressBar = (container) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let element = container?.current;
    const scrollContainer = element || window;
    if (!element) {
      element = document.documentElement;
    }

    function getWidth() {
      let scrollHeight = Math.max(
        element.scrollHeight,
        element.offsetHeight,
        element.clientHeight
      );

      let resultWidth = Math.round(
        (element.scrollTop / (scrollHeight - element.clientHeight)) * 100
      );
      setWidth(resultWidth);
    }

    scrollContainer.addEventListener("scroll", getWidth);
    return () => {
      scrollContainer.removeEventListener("scroll", getWidth);
    };
  }, [container]);
  return width;
};
