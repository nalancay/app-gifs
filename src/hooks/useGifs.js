import { useContext, useEffect, useState } from "react";
import getGifs from "api/gifs";
import GifsContext from "context/gifsContex";

const INITIAL_PAGE = 0;

export function useGifs({ keyword, rating } = { keyword: "oso" }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs, errorState, setErrorState } = useContext(GifsContext);

  const handleError = (err) =>
    setErrorState({ hasError: true, message: err.message });

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse, rating })
      .then((gifs) => {
        setGifs(gifs);
        setLoading(false);

        localStorage.setItem("lastKeyword", keyword);
      })
      .catch(handleError);
  }, [keyword, keywordToUse, rating, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getGifs({ keyword: keywordToUse, page, rating })
      .then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      })
      .catch(handleError);
  }, [keywordToUse, page, rating, setGifs]);

  return { loading, loadingNextPage, gifs, errorState, setPage };
}
