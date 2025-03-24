import "./App.css";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import WebApp from "@twa-dev/sdk";

const App = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [searchParams] = useSearchParams();

  const onfocus = () => {
    console.log("FOCUSED");
    setTimeout(() => {
      WebApp.expand();
    }, 500);
  };

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
      <div className="header">HEADER</div>

      <div>
        <input type="text" onFocus={onfocus} />
      </div>
      <div>
        <input type="text" onFocus={onfocus} />
      </div>
      <div className="body"></div>
      <div className="footer">FOOTER</div>
    </div>
  );
};

export default App;
