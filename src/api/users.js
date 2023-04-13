const ENDPOINT = "https://deno-api-users-login.herokuapp.com";

export default class Users {
  static async loginUser({ username, password }) {
    try {
      const response = await fetch(`${ENDPOINT}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new NetworkError();
      }

      const data = response.json();
      return data;
    } catch (err) {
      const { jwt } = err;
      return jwt;
    }
  }

  static async registerUser({ username, password }) {
    try {
      const response = await fetch(`${ENDPOINT}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new NetworkError();
      }

      return true;
    } catch (err) {
      throw err;
    }
  }
}

class NetworkError extends Error {
  constructor() {
    super("Network error");
  }
}
