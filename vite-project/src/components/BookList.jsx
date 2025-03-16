import Book from "./Book";
import "./style.css"
function BookList(props) {

    return (
        <div className="book-list">
            {
                props.booksData.map((bookData) => {
                    return (

                        <Book
                            key={bookData.id}
                            bookDetails={bookData}
                        />)
                })
            }
        </div>
    )
}

export default BookList;