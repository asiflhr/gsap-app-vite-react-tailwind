import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

// Controlling when React creates our animation

const Anim4 = () => {
  const app = useRef();

  const [count, setCount] = useState(0);
  const [delayedCount, setDelayedCount] = useState(0);

  // only runs on first render
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box-1", { rotation: "+=360" });
    }, app);
    return () => ctx.revert();
  }, []);

  // runs on first render and every time delayedCount changes
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box-2", { rotation: "+=360" });
    }, app);
    return () => ctx.revert();
  }, [delayedCount]);

  // runs on every render
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box-3", { rotation: "+=360" });
    }, app);
    return () => ctx.revert();
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedCount(count);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div
      ref={app}
      className="container flex flex-col bg-teal-600 h-full py-10 gap-5 content-center"
    >
      <button
        onClick={() => setCount(count + 1)}
        className="bg-white px-3 py-1 rounded-xl"
      >
        Click to trigger a render
      </button>

      <p>Count: {count}</p>
      <p>Delayed Count: {delayedCount}</p>
      <p>Renders: {1 + delayedCount + count}</p>

      <div className="flex flex-row gap-5">
        <h1 className="box-1 p-5 h-40 w-40 rounded-3xl bg-yellow-400">
          First render
        </h1>

        <h1 className="box-2 p-5 h-40 w-40 rounded-3xl bg-yellow-400">
          First render & delayed count change
        </h1>

        <h1 className="box-3 p-5 h-40 w-40 rounded-3xl bg-yellow-400">
          Every render
        </h1>
      </div>
    </div>
  );
};

export default Anim4;
