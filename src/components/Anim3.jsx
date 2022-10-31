import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

const Anim3 = () => {
  const [reversed, setReversed] = useState(false);

  /// creating timeline
  const app = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // add a box and circle animation to our timeline and play on first render
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap
        .timeline()
        .to(".box", {
          rotate: 360,
        })
        .to(".circle", {
          x: 100,
        });
    }, app);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // toggle the direction of our timeline
    console.log("toggling rverse to ", reversed);
    tl.current.reversed(reversed);
  }, [reversed]);

  return (
    <div
      ref={app}
      className="container flex flex-col bg-teal-600 h-screen content-center"
    >
      <button
        onClick={() => setReversed(!reversed)}
        className="bg-white px-3 py-1 rounded-xl"
      >
        Toggle
      </button>
      <h1 className="box p-20 rounded-3xl text-2xl font-extrabold bg-yellow-400">
        Box
      </h1>
      <h1 className="circle px-14 py-[4.5rem] text-2xl rounded-full font-extrabold bg-yellow-400">
        Circle
      </h1>
    </div>
  );
};

export default Anim3;
