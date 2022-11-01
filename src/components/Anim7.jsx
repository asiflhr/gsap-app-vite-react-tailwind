import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

// Avoiding flash of unstyled content (FOUC)

// simulate loading data from a server
const fetchFakeData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, color: "blue-700" },
        { id: 2, color: "yellow-400" },
        { id: 3, color: "rose-600" },
      ]);
    }, 2000);
  });
};

const Box = ({ children, color }) => {
  return (
    <h1 className={`content-center h-40 w-40 rounded-3xl bg-${color}`}>
      {children}
    </h1>
  );
};

const Anim7 = () => {
  const app = useRef();

  const [data, setData] = useState([]);
  const [loadingState, setLoadingState] = useState();

  useEffect(() => {
    if (loadingState !== "start") return;

    const loadData = async () => {
      const data = await fetchFakeData();
      setData(data);
      setLoadingState("complete");
    };
    loadData();
  }, [loadingState]);

  useLayoutEffect(() => {
    if (loadingState !== "complete") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".box",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.2,
        }
      );
    }, app);
    return () => ctx.revert();
  }, [loadingState]);

  const startLoading = () => {
    if (!loadingState) {
      setLoadingState("start");
    }
  };

  return (
    <div
      ref={app}
      className="container flex flex-col bg-teal-600 h-full py-10 gap-5 content-center"
    >
      {!loadingState ? (
        <div>
          <button
            onClick={startLoading}
            className="bg-white px-3 py-1 rounded-xl"
          >
            Press to Start Loading...
          </button>
        </div>
      ) : null}

      {loadingState === "start" ? <div>Loading fake Data...</div> : null}

      {data.map((item) => (
        <Box key={item.id} {...item}>
          Box {item.id}
        </Box>
      ))}
    </div>
  );
};

export default Anim7;
