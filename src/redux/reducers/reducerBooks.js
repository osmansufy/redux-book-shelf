const initialState = {
  readingList: [],
  discoverList: [],
  finishedList: [],
};
const reducerBooks = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_READING_LIST":
      return {
        ...state,
        readingList: [...state.readingList, action.payload],
      };

    default:
      return state;
  }
};

export default reducerBooks;
