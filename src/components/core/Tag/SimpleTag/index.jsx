import styled from "styled-components";
import classNames from "classnames";

const sizes = {
  small: "px-2 py-4 text-sm",
  large: "px-4 py-2 text-lg",
};

const baseStyles = "rounded transition-colors outline duration-300";
const stateStyles = {
  inactive: "bg-black text-white hover:bg-gray-800",
  hover: "bg-cyan-600 text-black",
  active: "bg-gray-200 hover:bg-gray-300 text-black outline-1 outline-gray-400",
  featured:
    "bg-gray-300 hover:bg-gray-600 hover:text-gray-100   outline-1 outline-gray-400",
};

const StyledTag = styled.a.attrs(({ $size, $state }) => ({
  className: classNames(sizes[$size], stateStyles[$state], baseStyles),
}))``;

function Tag({
  size,
  state,
  iconLeft: IconLeft,
  iconRight: IconRight,
  iconSize,
  children,
  href,
}) {
  return (
    <StyledTag
      $size={size}
      $state={state}
      className="flex gap-2 items-center no-underline hover:opacity-80"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {IconLeft && <IconLeft size={iconSize} />}
      {children}
      {IconRight && <IconRight size={iconSize} />}
    </StyledTag>
  );
}

export default Tag;
