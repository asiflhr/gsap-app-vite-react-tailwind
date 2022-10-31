import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const Anim1 = ({ txt }) => {
  const comp = useRef();

  useLayoutEffect(() => {
    // animation code here
    let ctx = gsap.context(() => {
      gsap.to(".box", { rotation: "+=360" });
    }, comp);

    return () => ctx.revert();
  });

  return (
    <div
      ref={comp}
      className="container clip-path bg-teal-600 h-screen content-center"
    >
      <h1 className="box p-20 text-2xl font-extrabold bg-yellow-400">
        Hello
      </h1>
    </div>
  );
};

export default Anim1;
