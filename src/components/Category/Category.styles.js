import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.themeBodyBg};
  font-weight: bold;
  margin-bottom: 0.438rem;
  margin-top: 1.563rem;
`;

export const CategoryList = styled.ul`
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

const generateMultiColorCategory = (props) => {
  const NEED_WHITE_COLOR = [3, 4];
  const colorIndex = (props.index % 5) + 1;
  const needWhite = NEED_WHITE_COLOR.includes(colorIndex);
  const colorText = needWhite
    ? "white"
    : `${({ theme }) => theme.colors.themeBodyBg}`;

  return `
    background-color: ${({ theme }) => theme.colors.brandColor + colorIndex};
    color: ${colorText};`;
};

export const CategoryListItem = styled.li`
  list-style: none;
  padding: 0.3rem;
  margin: 0.2rem;
  font-size: 1.2rem;

  ${generateMultiColorCategory}
`;

export const CategoryLink = styled(Link)`
  color: inherit;
  font-size: 1em;
  text-decoration: none;
  font-size: 1em;
  transition: color ease-in 0.1s;
`;
