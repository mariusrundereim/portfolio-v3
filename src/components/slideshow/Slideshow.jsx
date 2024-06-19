import { useEffect, useState } from "react";
import Slide from "./Slide";
import Countdown from "./Countdown";
// import styled from "styled-components";
import tw from "tailwind-styled-components";

const SlideshowContainer = tw.div`
  relative
  w-full      
  aspect-video
  bg-black
  overflow-hidden
`;

const Controls = tw.div`
  flex
  justify-between
  absolute
  top-2
  right-2
`;

const SpeedButton = tw.button`
  ${(props) => (props.active ? "bg-gray-200" : "bg-white")}
  border-none
  p-2
  px-3
  m-1
  rounded-lg
  cursor-pointer
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
