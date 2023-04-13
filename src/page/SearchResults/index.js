import React, { useCallback, useRef, useEffect } from "react";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListGifs";
//import SearchForm from "components/SearchForm";

import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import { useParams } from "react-router-dom";

import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";
import SearchForm from "components/SearchForm";

export default function SearchResults() {
  let { keyword, rating } = useParams();
  const { loading, gifs, setPage } = useGifs({ keyword, rating });

  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : "";

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="rating" content="General" />
      </Helmet>
      <header className="o-header">
        <SearchForm initialKeyword={keyword} initialRating={rating} />
      </header>
      <div className="App-wrapper">
        <h3 className="App-title">
          Resultado de tu busqueda: {decodeURI(keyword)}
        </h3>
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </div>
    </>
  );
}
