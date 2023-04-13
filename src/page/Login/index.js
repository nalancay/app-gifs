import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "hooks/useUser";
import { FormLogin } from "./Login.styles";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();

  useEffect(() => {
    if (isLogged) {
      navigate("/");
      onLogin && onLogin();
    }
  }, [isLogged, navigate, onLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading && (
        <FormLogin onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label>
            Username
            <input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>

          <button>Login</button>
          {hasLoginError && <strong>Credentials are invalid</strong>}
        </FormLogin>
      )}
    </>
  );
}
