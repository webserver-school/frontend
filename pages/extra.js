import React, { Component } from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function MyClock() {
  let [date, setDate] = useState(new Date().toLocaleString("en-us"));

  setInterval(() => {
    setDate(new Date().toLocaleString("en-us"));
  }, 1000);
  const [value, onChange] = useState(new Date());
  return (
    <div className="bg-background w-full min-h-screen">
      <div className="text-white py-4 pl-4 text-xl">
        <h3>Digital Clock:</h3>
        <p> {date} </p>
      </div>
      <div className="w-3/4 flex m-auto">
        <Carousel>
          <div>
            <img src="/image1.jpg" alt="image1" />
            <p className="legend">Acustic</p>
          </div>
          <div>
            <img src="/image2.jpg" alt="image2" />
            <p className="legend">House</p>
          </div>
          <div>
            <img src="/image3.jpg" alt="image3" />
            <p className="legend">Classical</p>
          </div>
          <div>
            <img src="/image4.jpg" alt="image4" />
            <p className="legend">EDM</p>
          </div>
          <div>
            <img src="/image5.jpg" alt="image5" />
            <p className="legend">Retro</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default MyClock;
