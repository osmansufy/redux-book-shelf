import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleBook from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";

const FinishedBooks = () => {
  const finishedBooks = useSelector((state) => state.books.finishedList);
  return (
    <PageLayout>
      {finishedBooks.length > 0 ? (
        finishedBooks.map((book) => (
          <SingleBook
            key={book.id}
            reading={false}
            finished={true}
            book={book}
          />
        ))
      ) : (
        <p>
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to the <Link to="/">Discover</Link>{" "}
          page to add books to your list.
        </p>
      )}
    </PageLayout>
  );
};

export default FinishedBooks;
