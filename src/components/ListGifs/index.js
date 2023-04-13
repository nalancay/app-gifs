import Gif from "../Gif";
import { ListGifsContainer } from "./ListGifs.styles";

const ListGifs = ({ gifs = [] }) => {
  return (
    <ListGifsContainer>
      {gifs.map((singleGif) => {
        const { id, url, title } = singleGif;
        return <Gif key={`ItemGif-${id}`} id={id} title={title} url={url} />;
      })}
    </ListGifsContainer>
  );
};

export default ListGifs;
