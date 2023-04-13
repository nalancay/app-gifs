import { useState, useEffect } from "react";
import { useGifs } from "../hooks/useGifs";
import getSingleGif from "../api/gif";

export default function useSingleGif({ id }) {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState({ hasError: false });

  const handleError = (err) =>
    setErrorState({ hasError: true, message: err.message });

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      // llamar al servicio si no tenemos gif
      getSingleGif({ id })
        .then((gif) => {
          setGif(gif);
          setIsLoading(false);
          setErrorState({ hasError: false });
        })
        .catch((err) => {
          setIsLoading(false);
          handleError(err);
        });
    }
  }, [gif, id]);

  return { gif, isLoading, errorState };
}
