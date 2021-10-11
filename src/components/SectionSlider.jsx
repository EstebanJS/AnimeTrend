import React, { useState, useRef, useEffect } from "react";
import "@styles/SectionSlider.sass";
import arrowLeft from "@icons/arrow-left.svg";
import arrowRight from "@icons/arrow-right.svg";
import Card from "./Card";

const SectionSlider = ({
  name = "Section Name",
  data = [],
  loading = true,
  error = null,
}) => {
  const [slider, setSlider] = useState(0);
  const [sizeSlider, setSizeSlider] = useState(0);
  const contentSlider = useRef(null);
  useEffect(() => {
    setSizeSlider(data.length * 170 - contentSlider.current.clientWidth);
  }, [contentSlider, data]);

  const nextSlide = () => {
    if (slider < sizeSlider) {
      setSlider(
        slider + Math.floor(contentSlider.current.clientWidth / 170) * 170
      );
    }
  };
  const backSlide = () => {
    if (slider > 0) {
      setSlider(
        slider - Math.floor(contentSlider.current.clientWidth / 170) * 170
      );
    }
  };
  return (
    <section className="sectionSlider" ref={contentSlider}>
      <div className="sectionSlider__header">
        <h2 className="sectionSlider__header-title">{name}</h2>
      </div>
      <div className="sectionSlider__slider">
        <button
          className="sectionSlider__slider-btnControl left"
          onClick={backSlide}
        >
          <img src={arrowLeft} alt="" />
        </button>
        <div className="sectionSlider__slider-main">
          <div
            className="sectionSlider__slider-cards"
            style={{ transform: `translateX(-${slider}px)` }}
          >
            {data.map((cardInfo) => (
              <Card key={cardInfo.id} data={cardInfo} loading={loading} />
            ))}
          </div>
        </div>

        <button
          className="sectionSlider__slider-btnControl right"
          disabled={slider === sizeSlider}
          onClick={nextSlide}
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </section>
  );
};

export default SectionSlider;
