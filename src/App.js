import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App(){
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id){
        return { ...book, title: newTitle };
      }
      return book;
    })

    setBooks(updatedBooks);

  }

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
      <h1>Bookshelf</h1>
      <BookList onEdit={editBookById} books={books} onDelete={DeleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;