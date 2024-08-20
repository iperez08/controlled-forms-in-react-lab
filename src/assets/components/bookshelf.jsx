import { useState } from "react";
import "../../index.css"

const Bookshelf = () => {

    const [books, setBooks] = useState(
        [
            { title: 'Fourth Wing', author: 'Rebecca Yarros' },
            { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
        ]
    )

    const [newBook, setNewBook] = useState(
        {
            title: '',
            author: ''
        }
    )

    const handleInputChange = (event) => {
        setNewBook(
            {
                ...newBook,
                [event.target.name]: event.target.value
            }
        )
    }

    const handleSubmit = (event) => {
        const title = event.target.title.value
        const author = event.target.author.value
        event.preventDefault()
        setBooks([...books, {title, author}])
        setNewBook(
            {
                title: '',
                author: ''
            }
        )
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title"></label>
                    <input
                        id="title"
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                    /> <br />
                    <label htmlFor="author"></label>
                    <input
                        id="author"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                    />
                    <button>Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book) => {
                    return (
                        <li className="bookCard" key={book.title}>
                            <p>{book.title}</p>
                            <p>by {book.author}</p>
                        </li>
                    )
                })}
            </div>
        </div>
    )
}

export default Bookshelf