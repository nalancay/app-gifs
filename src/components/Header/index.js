import React from "react";
import { useLocation, Link } from "react-router-dom";

import useUser from "hooks/useUser";
import { GfHeader } from "./Header.styles";

const RenderLoginButtons = ({ isLogged, logout }) => {
  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };
  return isLogged ? (
    <Link to="#" onClick={handleClick}>
      Logout
    </Link>
  ) : (
    <>
      <Link to="/login">Login</Link>
      <Link to="/register">register</Link>
    </>
  );
};

export default function Header() {
  const { isLogged, logout } = useUser();
  const location = useLocation();
  const matchRoute = location.pathname;

  const ContentHeader =
    matchRoute === "/login" ? null : (
      <RenderLoginButtons isLogged={isLogged} logout={logout} />
    );

  return <GfHeader>{ContentHeader}</GfHeader>;
}
