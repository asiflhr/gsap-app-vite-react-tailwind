import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import { gsap } from "gsap";
//      Passing down a callback to build a timeline

function Box({ children, addAnimation, index }) {
  const el = useRef();

  useLayoutEffect(() => {
    console.log("Box effect");
    const animation = gsap.to(el.current, { x: -100 });
    addAnimation(animation, index);

    return () => animation.progress(0).kill();
  }, [addAnimation, index]);

  return (
    <div className="content-center h-40 w-40 rounded-3xl bg-teal-500" ref={el}>
      {children}
    </div>
  );
}

function Circle({ children, addAnimation, index, rotation }) {
  const el = useRef();

  useLayoutEffect(() => {
    console.log("Circle effect");
    const animation = gsap.to(el.current, { rotate: rotation, x: 100 });
    addAnimation(animation, index);

    return () => animation.progress(0).kill();
  }, [addAnimation, index, rotation]);

  return (
    <div className="content-center h-40 w-40 rounded-full bg-rose-600" ref={el}>
      {children}
    </div>
  );
}

const Anim9 = () => {
  const [reversed, setReversed] = useState(false);
  const [tl, setTl] = useState();

  useLayoutEffect(() => {
    console.log("App effect");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);

  const addAnimation = useCallback(
    (animation, index) => {
      tl && tl.add(animation, index * 0.1);
    },
    [tl]
  );

  useLayoutEffect(() => {
    console.log("Reverse effect");
    tl && tl.reversed(reversed);
  }, [reversed, tl]);

  return (
    <div className="container flex flex-col bg-teal-600 h-full py-10 gap-5 content-center">
      <button
        className="bg-white px-3 py-1 rounded-xl"
        onClick={() => setReversed(!reversed)}
      >
        Toggle
      </button>
      <Box addAnimation={addAnimation} index={0}>
        Box
      </Box>
      <Circle addAnimation={addAnimation} index={1} rotation="360">
        Circle
      </Circle>
    </div>
  );
};

export default Anim9;
