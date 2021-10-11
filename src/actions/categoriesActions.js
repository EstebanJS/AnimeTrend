import axios from "axios";

export const getAllCategories = () => async (dispatch) => {
  dispatch({ type: "LOADING_CATEGORIES" });
  try {
    const response = await axios.get("https://kitsu.io/api/edge/categories?page%5Blimit%5D=40&sort=-total_media_count");
    dispatch({
      type: "GET_ALL_CATEGORIES",
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "ERROR_CATEGORIES",
      payload: error.message,
    });
  }
};
