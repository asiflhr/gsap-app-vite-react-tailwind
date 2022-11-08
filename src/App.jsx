import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Anim1 from "./components/Anim1";
import Anim2 from "./components/Anim2";
import Anim3 from "./components/Anim3";
import Anim4 from "./components/Anim4";
import Anim5 from "./components/Anim5";
import Anim6 from "./components/Anim6";
import Anim7 from "./components/Anim7";
import Anim8 from "./components/Anim8";
import Anim9 from "./components/Anim9";

function App() {
  const comp = useRef();

  useLayoutEffect(() => {
    // animation code here
    let ctx = gsap.context(() => {
      // gsap.to(".box", { rotation: "+=360" });
      gsap.to(".animate", {
        x: 100,
        y: 50,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });
    }, comp);

    return () => ctx.revert();
  });

  return (
    <>
      <Anim1 />
      <Anim2 />
      <Anim3 />
      <Anim4 />
      <Anim5 />
      <Anim6 />
      <Anim7 />
      <Anim8 />
      <Anim9 />
    </>
  );
}

export default App;
