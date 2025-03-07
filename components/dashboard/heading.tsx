import React from "react";

type headingProps = {
  heading: string;
  description: string;
};

const HeadingComp = ({ heading, description }: headingProps) => {
  return (
    <div className="md:px-8 px-2 leading-1.5">
      <h1 className="font-bold text-xl">{heading}</h1>
      <small className="text-zinc-500">{description}</small>
    </div>
  );
};

export default HeadingComp;
