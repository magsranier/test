import "./App.css";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const App = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!divRef.current) return;
    const viewport = searchParams.get("viewport");

    // alert("TESTTTTT");
    // alert(viewport);

    console.log("TESTTT");

    if (viewport) {
      // alert(`${viewport} HATDOG`);
      console.log("WHY ARE YOU RUNNING?");
      divRef.current.style.height = `${viewport}vh`;
      divRef.current.style.backgroundColor = "red";
    }
  }, []);

  return (
    <iframe
      src="https://client8.me"
      className="container"
      scrolling="no"
    ></iframe>
  );
};

export default App;
