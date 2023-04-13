import styled from "styled-components";

export const GifContainer = styled.div`
  margin-bottom: 0.5em;
  position: relative;
  height: 100%;

  .Gif-buttons {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 1;
  }

  .Gif-link {
    color: #000;
    display: block;
    text-decoration: none;
    position: relative;
    width: 100%;
    height: 100%;

    h4 {
      background: rgba(0, 0, 0, 0.3);
      bottom: 0;
      font-size: 12px;
      color: #fff;
      margin: 0;
      position: absolute;
    }

    img {
      height: inherit;
      object-fit: cover;
    }
  }

  img {
    width: 100%;
    object-fit: contain;
    vertical-align: top;
  }

  &:nth-child(5n + 1) img {
    background-color: ${({ theme }) => theme.colors?.brandColor1};
  }
  &:nth-child(5n + 2) img {
    background-color: ${({ theme }) => theme.colors?.brandColor2};
  }
  &:nth-child(5n + 3) img {
    background-color: ${({ theme }) => theme.colors?.brandColor3};
  }
  &:nth-child(5n + 4) img {
    background-color: ${({ theme }) => theme.colors?.brandColor4};
  }
  &:nth-child(5n + 5) img {
    background-color: ${({ theme }) => theme.colors?.brandColor5};
  }

  &:hover:nth-child(5n + 1) {
    box-shadow: 0 0 0 6px ${({ theme }) => theme.colors?.brandColor6};
  }
  &:hover:nth-child(5n + 2) {
    box-shadow: 0 0 0 6px ${({ theme }) => theme.colors?.brandColor2};
  }
  &:hover:nth-child(5n + 3) {
    box-shadow: 0 0 0 6px ${({ theme }) => theme.colors?.brandColor3};
  }
  &:hover:nth-child(5n + 4) {
    box-shadow: 0 0 0 6px ${({ theme }) => theme.colors?.brandColor4};
  }
  &:hover:nth-child(5n + 5) {
    box-shadow: 0 0 0 6px ${({ theme }) => theme.colors?.brandColor5};
  }

  &:hover:nth-child(5n + 1) h4 {
    background-color: ${({ theme }) => theme.colors?.brandColor1};
    color: ${({ theme }) => theme.colors?.themeBodyBg};
  }
  &:hover:nth-child(5n + 2) h4 {
    background-color: ${({ theme }) => theme.colors?.brandColor2};
    color: ${({ theme }) => theme.colors?.themeBodyBg};
  }
  &:hover:nth-child(5n + 3) h4 {
    background-color: ${({ theme }) => theme.colors?.brandColor3};
    color: white;
  }
  &:hover:nth-child(5n + 4) h4 {
    background-color: ${({ theme }) => theme.colors?.brandColor4};
    color: white;
  }
  &:hover:nth-child(5n + 5) h4 {
    background-color: ${({ theme }) => theme.colors?.brandColor5};
    color: ${({ theme }) => theme.colors?.themeBodyBg};
  }

  &:nth-child(11n + 1) {
    grid-column: span 2;
    grid-row: span 2;
  }

  &:nth-child(8n + 1) {
    grid-column-end: span 2;
    grid-row-end: span 2;
  }

  &:nth-child(10n + 3) {
    grid-column: span 2;
    grid-row: span 1;
  }

  @media screen and (max-width: 45rem) {
    &:nth-child(11n + 1),
    &:nth-child(8n + 1),
    &:nth-child(10n + 3) {
      grid-column: span 1;
      grid-row: span 1;
    }
  }
`;
