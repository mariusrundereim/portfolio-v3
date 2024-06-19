// import styled from "styled-components";
import tw from "tailwind-styled-components";

const SlideImage = tw.img`
  w-full
  h-full
  object-cover
  absolute
  top-0
  left-0
  transition-opacity
  duration-1000
  ease-in-out
  animate-slide-in
`;

function Slide({ image, currentIndex, slideIndex }) {
  return (
    <SlideImage
      src={image}
      alt="Case study"
      style={{ opacity: currentIndex === slideIndex ? 1 : 0 }}
    />
  );
}

export default Slide;
