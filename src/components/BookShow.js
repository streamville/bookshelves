import { useState } from "react";
import BookEdit from "./BookEdit";


function BookShow({ book, onDelete }) {
  const [showEdit, setEdit ] = useState();

  const handleDeleteClick = () => {
    onDelete(book.id);
  }
   const handleEditClick = () => {
    setEdit(!showEdit);
   }

let content = <h3>{book.title} </h3>
if (showEdit){
  content = <BookEdit />
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