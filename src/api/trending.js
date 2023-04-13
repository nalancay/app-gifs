import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export default async function getTrendingTerms({ signal }) {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  try {
    const response = await fetch(apiURL, { signal });
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
    super("Network error");
  }
}
