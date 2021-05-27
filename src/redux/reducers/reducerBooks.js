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
    case "REMOVE_FROM_READING_LIST":
      return {
        ...state,
        readingList: state.readingList.filter(
          (list) => list.id != action.bookId
        ),
      };
    case "ADD_TO_FINISHED_LIST":
      return {
        ...state,
        readingList: state.readingList.filter(
          (list) => list.id != action.book.id
        ),
        finishedList: [...state.finishedList, action.book],
      };

    default:
      return state;
  }
};

export default reducerBooks;
