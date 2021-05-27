export const addBook = (book) => {
  return {
    type: "ADD_TO_READING_LIST",
    payload: book,
  };
};
export const removeBook = (bookId) => {
  return {
    type: "REMOVE_FROM_READING_LIST",
    bookId,
  };
};
export const finishedBook = (book) => {
  return {
    type: "ADD_TO_FINISHED_LIST",
    book,
  };
};
