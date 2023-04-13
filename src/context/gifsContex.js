import React, { useState } from "react";

const Context = React.createContext({});

export function GifsContextProvider({ children }) {
  const [errorState, setErrorState] = useState({ hasError: false });
  const [gifs, setGifs] = useState([]);

  return (
    <Context.Provider value={{ gifs, setGifs, errorState, setErrorState }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
