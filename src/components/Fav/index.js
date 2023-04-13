import React, { useState } from "react";
import useUser from "hooks/useUser";
import Modal from "components/Modal";
import Login from "page/Login";
import { FavButton } from "./Fav.styles";

export default function Fav({ id }) {
  const { isLogged, addFav, favs } = useUser();
  const [showModal, setShowModal] = useState(false);

  const isFaved = favs.some((favId) => favId === id);

  const handleClick = () => {
    if (!isLogged) return setShowModal(true);
    addFav({ id });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    setShowModal(false);
  };

  const [label, emoji] = isFaved
    ? ["Remove Gif from favorites", "❌"]
    : ["Add Gif to favorites", "❤️"];

  return (
    <>
      <FavButton onClick={handleClick}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </FavButton>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login onLogin={handleLogin} />
        </Modal>
      )}
    </>
  );
}
