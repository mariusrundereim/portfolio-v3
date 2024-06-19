import { useEffect, useState } from "react";
import Slide from "./Slide";
import Countdown from "./Countdown";
import styled from "styled-components";

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  background-color: #000;
  overflow: hidden; /* Ensures the images are contained within the container */
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const SpeedButton = styled.button`
  background: ${(props) => (props.active ? "#ccc" : "#fff")};
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
`;

function Slideshow({ images, speedOptions = ["1x", "2x"] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSpeed, setSelectedSpeed] = useState(speedOptions[0]);

  useEffect(() => {
    let interval;
    if (selectedSpeed !== "0x") {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, getIntervalFromSpeed(selectedSpeed));
    }

    return () => clearInterval(interval);
  }, [images.length, selectedSpeed]);

  const getIntervalFromSpeed = (speed) => {
    switch (speed) {
      case "0x":
        return null;
      case "1x":
        return 10000; // 10 seconds
      case "2x":
        return 6000; // 6 seconds
      default:
        return 10000;
    }
  };

  const handleCountdownEnd = () => {
    if (selectedSpeed !== "0x") {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <SlideshowContainer>
      <Countdown time={3} onCountdownEnd={handleCountdownEnd} />
      {images.map((image, index) => (
        <Slide
          key={index}
          image={image.url}
          currentIndex={currentSlide}
          slideIndex={index}
        />
      ))}
      <Controls>
        {speedOptions.map((speed) => (
          <SpeedButton
            key={speed}
            active={selectedSpeed === speed}
            onClick={() => setSelectedSpeed(speed)}
          >
            {speed}
          </SpeedButton>
        ))}
      </Controls>
    </SlideshowContainer>
  );
}

export default Slideshow;
