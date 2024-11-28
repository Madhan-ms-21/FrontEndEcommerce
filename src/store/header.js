
const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";

const initialState = {
    default: "jewelery",
    selectedCategory: ""
}

export const setSelectedCategory = (payload) => ({
    type: SET_SELECTED_CATEGORY,
    payload
});
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SELECTED_CATEGORY:
        return {
          ...state,
          selectedCategory: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;

