import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGif = (apiResponse) => {
  const { data } = apiResponse;
  const { images, title, id } = data;
  const { url } = images.downsized_medium;
  return { title, id, url };
};

export default async function getSingleGif({ id }) {
  try {
    const response = await fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new NetworkError();
    }
    const apiResponse = await response.json();

    return fromApiResponseToGif(apiResponse);
  } catch (err) {
    throw err;
  }
}

class NetworkError extends Error {
  constructor() {
    super("Network error");
  }
}
