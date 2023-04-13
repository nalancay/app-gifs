import styled from "styled-components";

export const ListGifsContainer = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  grid-template-rows: masonry;
  grid-auto-flow: row dense;
  grid-gap: 6px;
  gap: 6px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors?.brandColor1};

  @media screen and (min-width: 37.5rem) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-auto-rows: 200px;
  }

  @media screen and (min-width: 60rem) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 210px;
  }
`;
