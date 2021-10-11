import axios from "axios";

export const searchAnime = (animeName) => async (dispatch) => {
  dispatch({ type: "LOADING_SEARCH" });
  try {
    const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${animeName}&page[limit]=5&page[offset]=0`);
    dispatch({
      type: "SEARCH_ANIME",
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "ERROR_SEARCH",
      payload: error.message,
    });
  }
};