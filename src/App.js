import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";




function App(){
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  }
  // With empty array, the arrow function gets called once and never again!
  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,
    {
      title:newTitle,
    });
    
    const updatedBooks = books.map((book) => {
      if (book.id === id){
        return { ...book, ...response.data };
      }
      return book;
    })

    setBooks(updatedBooks);

  }

  const DeleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })

    setBooks(updatedBooks);
  }

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };


  return (
    <div className="app">
      <h1>Bookshelf</h1>
      <BookList onEdit={editBookById} books={books} onDelete={DeleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;