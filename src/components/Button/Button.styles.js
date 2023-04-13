import { Link as LinkRouter } from "react-router-dom";
import styled from "styled-components";

const SIZES = {
  small: "1rem",
  medium: "2rem",
  large: "3rem",
};

const getFontSize = (props) => {
  const size = SIZES[props.size];
  if (!size) {
    console.warn(
      `[Button Styled Component] This size is not correct. Use ${Object.keys(
        SIZES
      ).join(", ")}`
    );
    return SIZES.small;
  }
  return size;
};

export const Link = styled(LinkRouter)`
  background-color: ${({ theme }) => theme.colors?.brandColor3};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors?.textColor};
  cursor: pointer;
  font-size: ${getFontSize};
  padding: 0.5rem 1rem;
  :hover {
    background-color: ${({ theme }) => theme.colors?.brandColor2};
  }
  [disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const Button = Link.withComponent("button");
