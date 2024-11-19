import { useSelector, useDispatch } from "react-redux"
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs"
import {
  deleteBook,
  toggleFavorite,
  selecteBooks,
} from "../../redux/slices/bookSlice"
import {
  selecteTtilteFilter,
  selecteAuthorFilter,
  selecteOnlyFavorite,
} from "../../redux/slices/filterSlice"
import "./BookList.css"
const BookList = () => {
  const dispatch = useDispatch()

  const books = useSelector(selecteBooks)
  const titleFilter = useSelector(selecteTtilteFilter)
  const authorFilter = useSelector(selecteAuthorFilter)
  const onlyFavoriteFilter = useSelector(selecteOnlyFavorite)
  const onClickDelete = (id) => {
    dispatch(deleteBook(id))
  }
  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())
    const matchesuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())
    const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true
    return matchesTitle && matchesuthor && matchesFavorite
  })
  const highlightMatch = (text, filter) => {
    if (!filter) return text
    const regex = new RegExp(`(${filter})`, "gi")
    return text.split(regex).map((part, i) => {
      if (part.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {part}
          </span>
        )
      }
      return part
    })
  }
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {highlightMatch(book.title, titleFilter)} by{" "}
                <strong>{highlightMatch(book.author, authorFilter)}</strong>
                {" "}({book.source})
              </div>
              <div className="book-actions">
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
                <button onClick={() => onClickDelete(book.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
