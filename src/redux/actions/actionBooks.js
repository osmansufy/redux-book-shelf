export const addBook = (book) => {
  return {
    type: "ADD_TO_READING_LIST",
    payload: book,
  };
};
