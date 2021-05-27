import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleBook from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";
import { finishedBook, removeBook } from "../redux/actions/actionBooks";

const ReadingList = (props) => {
  const readingBooks = useSelector((state) => state.books.readingList);
  const dispatch = useDispatch();
  const removeFromList = (bookId) => dispatch(removeBook(bookId));
  const addToFinishedList = (book) => dispatch(finishedBook(book));

  useEffect(() => {
    console.log(readingBooks);
  }, []);
  return (
    <PageLayout>
      {readingBooks?.length ? (
        readingBooks?.map((book) => (
          <SingleBook
            removeFromList={removeFromList}
            addToFinishedList={addToFinishedList}
            key={book.id}
            reading={true}
            book={book}
          />
        ))
      ) : (
        <p>
          Looks like you've finished all your books! Check them out in your{" "}
          <Link to="finish">finished books</Link> or{" "}
          <Link to="/">discover more</Link>.
        </p>
      )}
    </PageLayout>
  );
};

export default ReadingList;
