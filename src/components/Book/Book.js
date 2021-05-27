import React from "react";
import {
  HiCheckCircle,
  HiMinusCircle,
  HiPlusCircle,
  // HiMinusCircle,
  // HiCheckCircle
} from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/actions/actionBooks";
import styles from "./book.module.css";
const SingleBook = (props) => {
  const { title, author, coverImageUrl, synopsis, id } = props.book;
  const { removeFromList, reading, addToFinishedList, book, finished } = props;
  const dispatch = useDispatch();
  // const addToReadingList=(book)=>dispatch(addBook(book))

  return (
    <div className="card d-flex mb-3 p-3" style={{ position: "relative" }}>
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid" src={coverImageUrl} alt="" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6>{author}</h6>
            <p className="card-text">{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons}>
        {reading ? (
          <>
            <HiMinusCircle
              title="Remove from list"
              onClick={() => removeFromList(id)}
              className={styles.minus_icon}
            />
            <HiCheckCircle
              title="Mark as Finish"
              onClick={() => addToFinishedList(book)}
              className={styles.check_icon}
            />
          </>
        ) : finished ? (
          ""
        ) : (
          <HiPlusCircle
            onClick={() => dispatch(addBook(props.book))}
            title="Add to Reading"
            className={styles.plus_icon}
          />
        )}
      </div>
    </div>
  );
};

export default SingleBook;
