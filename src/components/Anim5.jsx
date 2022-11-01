import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

const randomX = gsap.utils.random(-200, 200, 1, true);

const Box = ({ children, endX }) => {
  const boxRef = useRef();
  const ctx = useRef();

  useEffect(() => {
    ctx.current = gsap.context(() => {}); // nothing
    // initially (we'll add() to the context when endX changes)
    return () => ctx.current.revert();
  }, []);

  // run when 'endX' changes
  useEffect(() => {
    ctx.current.add(() => {
      gsap.to(boxRef.current, {
        x: endX,
      });
    });
  }, [endX]);
  return (
    <h1 ref={boxRef} className="box-3 content-center h-40 w-40 rounded-3xl bg-yellow-400">
      {children}
    </h1>
  );
};

const Anim5 = () => {
  const [endX, setEndX] = useState(0);
  return (
    <div className="container flex flex-col bg-teal-600 h-full py-10 gap-5 content-center">
      <button
        onClick={() => setEndX(randomX())}
        className="bg-white px-3 py-1 rounded-xl"
      >
        Pass a randomozed value
      </button>

      <Box endX={endX}>{endX}</Box>
    </div>
  );
};

export default Anim5;
