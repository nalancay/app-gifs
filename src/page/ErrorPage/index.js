import React, { useContext } from "react";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";
import Button from "components/Button";
import GifsContext from "context/gifsContex";
//import { css, jsx } from "@emotion/core";

const gifsErrors = [
  "d2jjuAZzDSVLZ5kI",
  "Bp3dFfoqpCKFyXuSzP",
  "hv5AEBpH3ZyNoRnABG",
  "hLwSzlKN8Fi6I",
];

/*const pageErrorStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;

const codeErrorStyles = css`
  font-size: 5rem;
  font-weight: bold;
  font-style: italic;
`;

const msgErrorStyles = css`
  font-size: 1.5rem;
  margin: 1rem auto;
`;

const SIZE = "350px";

const gifErrorStyles = css({
  margin: "1rem auto",
  width: SIZE,
  height: SIZE,
  objectFit: "cover",
});*/

export default function ErrorPage() {
  const { errorState: errorFromApiGifs } = useContext(GifsContext);
  const randomImage = () => {
    return `https://media.giphy.com/media/${
      gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]
    }/giphy.gif`;
  };

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div>
          <span>
            {errorFromApiGifs.hasError
              ? errorFromApiGifs.message
              : "Sometimes gettings lost isn't that bad"}
          </span>
          <img src={randomImage()} alt="alt-page-404" />
          <Button href="/">Go back home</Button>
        </div>
      </div>
    </>
  );
}
