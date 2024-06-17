import styled from "styled-components";
import classNames from "classnames";

const sizes = {
  small: "px-4 py-2 text-sm",
  large: "px-6 py-3 text-lg",
};

const baseStyles = "rounded transition-colors outline duration-300";
const stateStyles = {
  inactive: "bg-black text-white hover:bg-gray-800",
  hover: "bg-gray-200 text-black",
  active: "bg-gray-100 text-black outline-1 outline-gray-400",
};

const StyledTag = styled.button.attrs(({ $size, $state }) => ({
  className: classNames(sizes[$size], stateStyles[$state], baseStyles),
}))``;

function Tag({
  size,
  state,
  iconLeft: IconLeft,
  iconRight: IconRight,
  iconSize,
  children,
}) {
  return (
    <>
      <StyledTag
        $size={size}
        $state={state}
        className="flex gap-2 items-center"
      >
        {IconLeft && <IconLeft size={iconSize} />}
        {children}
        {IconRight && <IconRight size={iconSize} />}
      </StyledTag>
    </>
  );
}

export default Tag;
