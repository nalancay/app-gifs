import React, { Suspense } from "react";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppContainer, AppContent, AppLogo } from "./App.styles";
import Detail from "./page/Detail";
import { GifsContextProvider } from "./context/gifsContex";
import SearchResults from "./page/SearchResults";
import ErrorPage from "./page/ErrorPage";
import Header from "components/Header";
import { UserContextProvider } from "context/UserContext";
import Login from "page/Login";
import RegisterPage from "page/Register";

const HomePage = React.lazy(() => import("../src/page/Home"));

function App() {
  return (
    <UserContextProvider>
      <AppContainer>
        <AppContent>
          <Suspense fallback={null}>
            <GifsContextProvider>
              <BrowserRouter>
                <Header />
                <Link to="/">
                  <AppLogo>
                    <img alt="Giffy logo" src="/logo.png" />
                  </AppLogo>
                </Link>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/gif/:id" element={<Detail />} />
                  <Route
                    path="/search/:keyword/:rating?"
                    element={<SearchResults />}
                  />
                  <Route path="/:rest*" element={<ErrorPage />} />
                </Routes>
              </BrowserRouter>
            </GifsContextProvider>
          </Suspense>
        </AppContent>
      </AppContainer>
    </UserContextProvider>
  );
}

export default App;
