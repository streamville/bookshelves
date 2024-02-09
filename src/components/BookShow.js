import { useState, useContext } from "react";
import React from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";


function BookShow({ book }) {
  const [showEdit, setEdit ] = useState();
  const { DeleteBookById } = useContext(BooksContext);

  const handleDeleteClick = () => {
    DeleteBookById(book.id);
  }
   const handleEditClick = () => {
    setEdit(!showEdit);
   }

   const handleSubmit = () => {
    setEdit(false);
   }

let content = <h3>{book.title} </h3>
if (showEdit){
  content = <BookEdit onSubmit={handleSubmit} book={book} />
}


  return <div className="book-show">
    {content}
    <div className="actions">
      <button className="edit" onClick={handleEditClick}>Edit</button>
      <button className="delete" onClick={handleDeleteClick}>Delete</button>
    </div>
  </div>
}

export default BookShow;