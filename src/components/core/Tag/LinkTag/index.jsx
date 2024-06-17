import styled from "styled-components";
import classNames from "classnames";
import { FaExternalLinkAlt } from "react-icons/fa";
const brandColors = {
  linkedin: "#0077B5",
  instagram: "#E4405F",
  github: "#333",
  spotify: "#1DB954",
};

const baseStyles =
  "flex justify-between items-center p-4 w-full rounded-md transition duration-300";
const defaultStyle = "bg-gray-100 text-black";

const StyledTagContainer = styled.a`
  &:hover {
    ${({ brand }) => `
      background-color: ${brandColors[brand]} !important;
      color: white !important;
    `}
  }
`;

function LinkTag({ brand, href, children }) {
  return (
    <>
      <StyledTagContainer
        brand={brand}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames(baseStyles, defaultStyle)}
      >
        <h3 className="text-lg">{children}</h3>
        <FaExternalLinkAlt />
      </StyledTagContainer>
    </>
  );
}

export default LinkTag;
