import "./App.css";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const App = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [searchParams] = useSearchParams();
  const items = Array.from({ length: 100 });

  useEffect(() => {
    if (!divRef.current) return;
    const viewport = searchParams.get("viewport");

    alert("TESTTTTT");
    alert(viewport);

    console.log("TESTTT");

    if (viewport) {
      console.log("WHY ARE YOU RUNNING?");
      divRef.current.style.height = `${viewport}px !important`;
      divRef.current.style.backgroundColor = "red";
    }
  }, []);

  return (
    <div className="container" ref={divRef}>
      <div className="header">HEADER</div>

      <div className="body">
        {items.map((_, ind) => (
          <div className="item">ITEM {ind}</div>
        ))}
      </div>
      <div className="footer">FOOTER</div>
    </div>
  );
};

export default App;
