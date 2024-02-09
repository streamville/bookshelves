import { useState,  useContext } from "react";
import React from "react";
import BooksContext from "../context/books";


function BookCreate() {
  const [title, setTitle ] = useState('');
  const { createBook } = useContext(BooksContext);


  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  }

  return <div className="book-create">
    <form onSubmit={handleSubmit} >
      <label>Title:</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="buttton">Create </button>
    </form>
    
  </div>
}

export default BookCreate;