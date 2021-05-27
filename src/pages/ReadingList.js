import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleBook from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";

const ReadingList = (props) => {
  const readingBooks = useSelector((state) => state.books.readingList);

  useEffect(() => {
    console.log(readingBooks);
  }, []);
  return (
    <PageLayout>
      {readingBooks?.length ? (
        readingBooks?.map((book) => <SingleBook key={book.id} book={book} />)
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
