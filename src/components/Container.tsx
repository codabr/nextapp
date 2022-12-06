import React, { FC } from "react";
import { useInView } from "react-intersection-observer";

const Container: FC<any> = ({ title, children }) => {
  const [ref, inView] = useInView();

  return (
    <div className="flex flex-col justify-center items-center w-full space-y-10">
      <h1
        style={{
          transform: inView ? "none" : "translateX(-200px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        ref={ref}
        className="text-4xl"
      >
        {title}
      </h1>
      {children}
    </div>
  );
};

export default Container;
