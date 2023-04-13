import styled from "styled-components";

export const FavButton = styled.button`
  background: rgba(255, 172, 172, 0.3);
  border: 0;
  border-radius: 100px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 172, 172, 0.8);
  }

  span {
    display: block;
    width: 20px;
  }
`;
