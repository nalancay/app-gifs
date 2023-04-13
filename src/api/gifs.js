import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return gifs;
  }
  return [];
};

export default async function getGifs({
  limit = 15,
  rating = "g",
  keyword = "morty",
  page = 0,
} = {}) {
  const URL_ENDPOINT = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=en`;

  try {
    const response = await fetch(URL_ENDPOINT);
    if (!response.ok) {
      throw new NetworkError();
    }
    const apiResponse = await response.json();

    return fromApiResponseToGifs(apiResponse);
  } catch (err) {
    throw err;
  }
}

class NetworkError extends Error {
  constructor() {
    super("404 Network error from gifs api");
  }
}
