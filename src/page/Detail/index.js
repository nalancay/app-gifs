import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Gif from "components/Gif";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner";
import { Helmet } from "react-helmet";

export default function Detail() {
  let { id } = useParams();
  const { gif, isLoading, errorState } = useSingleGif({ id });
  const title = gif ? gif.title : "";

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    );
  }

  if (errorState.hasError) return <Navigate to="/404" />;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{title} | Giffy</title>
      </Helmet>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
}
