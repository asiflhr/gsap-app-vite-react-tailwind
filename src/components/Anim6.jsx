import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

// Animating on interaction

const Anim6 = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "bg-rose-600", scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  };

  return (
    <div className="container flex flex-col bg-teal-600 h-full py-10 gap-5 content-center">
      <h1
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="box-3 content-center h-40 w-40 rounded-3xl bg-yellow-400"
      >
        Hover Me
      </h1>
    </div>
  );
};

export default Anim6;
