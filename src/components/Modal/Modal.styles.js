import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: rgba(200, 200, 200, 0.5);
  backdrop-filter: blur(4px);
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000000;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.themeBodyBg};
  background-color: rgba(24, 6, 31, 0.9);
  width: 300px;
  padding: 10px 20px;
  height: 80vh;
  margin: 10vh auto;
  position: relative;
  color: ${({ theme }) => theme.colors.brandColor8};

  .btnModal {
    background: rgba(255, 255, 255, 0.7);
    border: 0;
    border-radius: 100px;
    margin: 10px 12px 32px;
    position: relative;
    left: 266px;
    display: block;
    width: 26px;
    font-size: 16px;

    &:hover {
      cursor: pointer;
    }
  }
`;
