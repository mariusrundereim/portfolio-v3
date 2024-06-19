import styled from "styled-components";

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container without distortion */
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 1s ease-in-out; /* Adds a fade-in transition */
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
