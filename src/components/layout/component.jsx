import { Footer } from "../footer/component";
import { Header } from "../header/component";

export const Layout = ({ children }) => {
  return (
    <div>
      <div id="modal" style={{ position: "relative", zIndex: "2" }}></div>
      <div style={{ zIndex: "1" }}>
        <Header header={"I'm header"} />
        <div>{children}</div>
        <Footer footer={"I'm footer"} />
      </div>
    </div>
  );
};
