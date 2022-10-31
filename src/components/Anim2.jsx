import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const Anim2 = () => {
  const comp = useRef();

  useLayoutEffect(() => {
    // animation code here
    let ctx = gsap.context(() => {
      gsap.to(".animate", {
        x: 100,
        y: 50,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });

      gsap.to(".rotate", {
        rotate: "+=360",
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });
    }, comp);

    return () => ctx.revert();
  });

  return (
    <div
      ref={comp}
      className="container bg-teal-600 h-screen content-center"
    >
      <h1 className="animate p-20 text-2xl font-extrabold bg-yellow-400">
        Hello
      </h1>
      <h1 className="p-20 text-2xl font-extrabold bg-yellow-400">
        Dont Animate me
      </h1>
      <h1 className="rotate p-20 text-2xl font-extrabold bg-yellow-400">
        Hello
      </h1>
    </div>
  );
};

export default Anim2;
