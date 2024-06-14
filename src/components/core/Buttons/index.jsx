import React from "react";
import styled from "styled-components";
import classNames from "classnames";

const sizes = {
  small: "px-4 py-2 text-sm",
  large: "px-6 py-3 text-lg",
};

const baseStyles = "rounded font-bold transition-colors duration-300";
const stateStyles = {
  inactive: "bg-black text-white hover:bg-gray-800",
  hover: "bg-gray-200 text-black",
  active: "bg-gray-300 text-black",
};

const StyledButton = styled.button.attrs(({ $size, $state }) => ({
  className: classNames(sizes[$size], stateStyles[$state], baseStyles),
}))``;

const Button = ({ size, state, children }) => {
  return (
    <StyledButton $size={size} $state={state}>
      {children}
    </StyledButton>
  );
};

export default Button;
