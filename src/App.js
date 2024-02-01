import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App(){
  const [books, setBooks] = useState([]);

  const DeleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })

    setBooks(updatedBooks);
  }

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { 
        // Generate random ID.
        id: Math.round(Math.random() * 999), 
        title, 
      },
    ];
    setBooks(updatedBooks);
  };


  return (
    <div className="app">
      <BookList books={books} onDelete={DeleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;