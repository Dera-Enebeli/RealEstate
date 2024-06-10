import React from "react";
import Carousel from "./carousel.components";

export default function Caro() {
  const slides = ["/main_apt1.jpg", "/main_apt2.jpg"];
  return (
    <div>
      <div className="w-[100%] h-[50%]">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
