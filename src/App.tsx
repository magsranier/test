import "./App.css";
import { useEffect, useRef } from "react";
import WebApp from "@twa-dev/sdk";

const App = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (WebApp) {
      WebApp.expand();
    }
    // if (!divRef.current) return;
    // const viewport = searchParams.get("viewport");
    // // alert("TESTTTTT");
    // // alert(viewport);
    // console.log("TESTTT");
    // if (viewport) {
    //   // alert(`${viewport} HATDOG`);
    //   console.log("WHY ARE YOU RUNNING?");
    //   divRef.current.style.height = `${viewport}vh`;
    //   divRef.current.style.backgroundColor = "red";
    // }
    // document.querySelectorAll("input, textarea").forEach((el) => {
    //   el.addEventListener("focus", () => {
    //     alert("FOCUSED");
    //     setTimeout(() => {
    //       WebApp.expand();
    //     }, 500);
    //   });
    // });
  }, []);

  return (
    <div className="container" ref={divRef}>
      <div className="content">
        <div className="header">HEADER</div>

        <div className="body">
          <div>
            <input type="text" />
          </div>
          <div style={{ height: "100vh" }}>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
