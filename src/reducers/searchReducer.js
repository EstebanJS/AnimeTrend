const INITIAL_STATE = {
    results: [],
    loading: false,
    error: "",
  };

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "SEARCH_ANIME":
        return {
          ...state,
          loading: false,
          results: action.payload,
          error: "",
        };
      case "LOADING_SEARCH":
        return {
          ...state,
          loading: true,
        };
      case "ERROR_SEARCH":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }