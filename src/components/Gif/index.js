import Fav from "components/Fav";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import { GifContainer } from "./Gif.styles";

function Gif({ id, title, url }) {
  return (
    <GifContainer>
      <div className="Gif-buttons">
        <Fav id={id}></Fav>
      </div>
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img loading="lazy" alt={title} src={url} />
      </Link>
    </GifContainer>
  );
}

export default memo(Gif);
