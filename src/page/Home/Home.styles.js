import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 0.5em;
`;

export const AppMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .App-results {
    flex-shrink: 2;
    width: 100%;
  }

  .App-category {
    margin-bottom: 25px;
    width: 100%;
  }

  @media screen and (min-width: 55rem) {
    flex-direction: initial;

    .App-category {
      position: sticky;
      top: 3rem;
      width: 40%;
      max-width: 300px;
    }
  }
`;
