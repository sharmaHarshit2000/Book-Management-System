import "./style.css"
function Book(props) {
    return (
        <div className="book-card">
            <img src={props.bookDetails.coverImageUrl} alt={props.bookDetails.title} width="200px" height="200px" />
            <h2 className="book-title">{props.bookDetails.title}</h2>
            <p className="book-author"><span>Author:</span> {props.bookDetails.author}</p>
            <p className="book-publish-date"><span>Publish Date:</span> {props.bookDetails.publishDate}</p>
            <p className="book-pages"><span>Pages:</span> {props.bookDetails.pages}</p>
            <p className="book-description"><span>Description:</span> {props.bookDetails.description}</p>
        </div>
    )
}

export default Book