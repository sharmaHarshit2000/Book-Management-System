/**
 * BookList Component
 * Book Component
*/

import BookList from "./components/BookList";
import { Books } from "./utils/mockData";
import "./components/style.css"
import { useState } from "react";

function App() {
  const [serachText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);

  function handleSearch() {
    const filterBooks = Books.filter((book) => book.title.toLowerCase().includes(serachText.trim().toLowerCase()))
    
    setFilteredBooks(filterBooks)

  }
  return (
    <>
      <div className="search">
        <h2 >Search Books</h2>
        <div className="input-div">
          <input type="text" name="" id="" onChange={(e) => setSearchText(e.target.value)} />
          <button onClick={handleSearch} className="search-btn">Serach</button>
        </div>

      </div>
      <BookList booksData={filteredBooks} />
    </>

  )
}

export default App;