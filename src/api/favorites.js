const ENDPOINT = "https://deno-api-users-login.herokuapp.com";

export default class Favorites {
  static async addFavService({ id, jwt }) {
    try {
      const response = await fetch(`${ENDPOINT}/favs/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jwt }),
      });
      if (!response.ok) {
        throw new NetworkError();
      }

      const data = response.json();
      return data;
    } catch (err) {
      throw err;
    }
  }

  static async getFavs({ jwt }) {
    try {
      const response = await fetch(`${ENDPOINT}/favs`, {
        method: "GET",
        headers: {
          Authorization: jwt,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new NetworkError();
      }

      const data = response.json();
      return data;
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
