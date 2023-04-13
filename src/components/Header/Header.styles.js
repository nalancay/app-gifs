import styled from "styled-components";

export const GfHeader = styled.header`
  display: flex;
  justify-content: flex-end;

  a {
    color: ${({ theme }) => theme.colors.themeBodyBg};
    font-size: 16px;
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline;
  }

  a + a {
    margin: 0 12px;
  }
`;
