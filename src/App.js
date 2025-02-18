import React from "react";
import { usePlugin } from "@sigmacomputing/plugin";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselPlugin = () => {
  const plugin = usePlugin(); // Enables Sigma interactions

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
  };

  // Use Sigma data if available, fallback to sample slides
  const sigmaData = plugin?.context?.data || [
    { id: 1, text: "Slide 1", color: "#ff6b6b" },
    { id: 2, text: "Slide 2", color: "#1dd1a1" },
    { id: 3, text: "Slide 3", color: "#54a0ff" },
  ];

  return (
    <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Sigma Carousel Plugin</h2>
      <Slider {...settings}>
        {sigmaData.map((slide, index) => (
          <div
            key={index}
            style={{
              height: "200px",
              backgroundColor: slide.color || "#333",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "24px",
              borderRadius: "10px",
            }}
          >
            {slide.text || `Slide ${index + 1}`}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselPlugin;
