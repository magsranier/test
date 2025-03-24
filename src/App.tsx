import "./App.css";
import { useEffect, useRef } from "react";
import WebApp from "@twa-dev/sdk";

const App = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const onfocus = () => {
    console.log("FOCUSED");
    setTimeout(() => {
      WebApp.expand();
    }, 500);
  };

  alert("TESTT2");

  useEffect(() => {
    // if (WebApp) {
    //   WebApp.expand();
    // }

    document.addEventListener("focusin", () => {
      document.body.style.overflow = "hidden";
    });

    document.addEventListener("focusout", () => {
      document.body.style.overflow = "";
    });

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

      <div className="body">
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="footer">FOOTER</div>
    </div>
  );
};

export default App;
