const BASE_URL = "https://kitsu.io/api/edge";
const PER_PAGE = 20;

async function request(endpoint = "") {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (response.ok) {
      const { data } = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchPopular(limit = PER_PAGE) {
  return await request(`/anime?page[limit]=${limit}&sort=-user_count`);
}
export async function fetchHighestRated(limit = PER_PAGE) {
  return await request(`/trending/anime?limit=${limit}`);
}
export async function fetchTrending(limit = PER_PAGE) {
  return await request(`/anime?page[limit]=${limit}&sort=-average_rating`);
}
