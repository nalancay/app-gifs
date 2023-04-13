import React, { useState } from "react";
import { useEffect } from "react";
import ApiFavorites from "api/favorites";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [favs, setFavs] = useState([]);
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem("jwt"));

  useEffect(() => {
    if (!jwt) return setFavs([]);
    ApiFavorites.getFavs({ jwt }).then(setFavs);
  }, [jwt]);

  return (
    <Context.Provider
      value={{
        favs,
        jwt,
        setFavs,
        setJWT,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
