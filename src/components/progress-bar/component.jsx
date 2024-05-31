import { useProgressBar } from "../../hooks/use-scroll";

export const ProgressBar = () => {
  const width = useProgressBar();
  return (
    <div
      style={{
        width: `${width}%`,
        height: "5px",
        backgroundColor: "cadetblue",
        position: "sticky",
        zIndex: "1",
        top: "0",
        left: "0",
      }}
    ></div>
  );
};
