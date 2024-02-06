import { useState } from "react";
import React
 from "react";
function BookCreate({ onCreate }) {
  const [title, setTitle ] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
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