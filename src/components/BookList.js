import BookShow from "./BookShow";
import React from "react";


function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book) => {
    return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
  });


  return <div className="book-list">{renderedBooks}</div>
}

export default BookList;