import React, { useEffect, useState } from "react";
import Book from "../components/Book/Book";
import books from "../fakeData/books.json";
import PageLayout from "../components/PageLayout/PageLayout";
import axios from "axios";
const Discover = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/getAllBook")
      .then((res) => {
        setAllBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <PageLayout>
      {allBooks.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </PageLayout>
  );
};

export default Discover;
