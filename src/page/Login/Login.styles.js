import styled from "styled-components";

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 320px;
  width: 100%;

  label {
    display: block;
    font-size: 14px;
  }

  .form-error,
  .form small {
    color: red;
    font-size: 12px;
    margin-top: -12px;
    display: block;
  }

  .error {
    border: 1px solid red;
  }

  input {
    background: #ffff;
    border: none;
    display: block;
    line-height: 2;
    font-size: 16px;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 8px;
  }

  button {
    width: 100%;
    background-color: ${({ theme }) => theme.colors?.brandColor3};
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors?.textColor};
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-top: 16px;
    :hover {
      background-color: ${({ theme }) => theme.colors?.brandColor6};
    }
    [disabled] {
      opacity: 0.3;
      pointer-events: none;
    }
  }
`;
