const INITIAL_STATE = {
    categories: [],
    loading: false,
    error: "",
  };

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "GET_ALL_CATEGORIES":
        return {
          ...state,
          loading: false,
          categories: action.payload,
          error: "",
        };
      case "LOADING_CATEGORIES":
        return {
          ...state,
          loading: true,
        };
      case "ERROR_CATEGORIES":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }