import React, { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
//      Passing down a timeline prop

const Box = ({ children, timeline, index }) => {
  const el = useRef();
  // add 'left 100z animation to timeline
  useLayoutEffect(() => {
    timeline && timeline.to(el.current, { x: -100 }, index * 0.1);
  }, [timeline]);

  return (
    <h1 ref={el} className={`content-center h-40 w-40 rounded-3xl bg-teal-500`}>
      {children}
    </h1>
  );
};

const Circle = ({ children, timeline, index, rotation }) => {
  const el = useRef();

  useLayoutEffect(() => {
    // add 'right 100px, rotate 360deg' animation to timeline
    timeline &&
      timeline.to(el.current, { rotate: rotation, x: 100 }, index * 0.1);
  }, [timeline, rotation]);

  return (
    <h1
      ref={el}
      className={`content-center h-40 w-40 rounded-full bg-rose-600`}
    >
      {children}
    </h1>
  );
};

const Anim8 = () => {
  const [reversed, setReversed] = useState(false);
  const [tl, setTl] = useState();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    tl && tl.reversed(reversed);
  }, [reversed, tl]);

  return (
    <div className="container flex flex-col bg-teal-600 h-full py-10 gap-5 content-center">
      <button
        onClick={() => setReversed(!reversed)}
        className="bg-white px-3 py-1 rounded-xl"
      >
        Toggle
      </button>

      <Box timeline={tl} index={0}>
        Box
      </Box>

      <Circle timeline={tl} rotation={360} index={1}>
        Circle
      </Circle>
    </div>
  );
};

export default Anim8;
