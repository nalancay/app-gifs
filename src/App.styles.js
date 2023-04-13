import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppContent = styled.section`
  background-color: ${({ theme }) => theme.colors?.brandColor7};
  color: ${({ theme }) => theme.colors?.themeBodyBg};
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  min-height: 100vh;
  padding: 1rem;
  text-align: left;
`;

export const AppLogo = styled.figure`
  margin: 10px auto;
  padding: 20px 0;
  width: 144px;
  img {
    object-fit: cover;
    width: 100%;
  }
`;
