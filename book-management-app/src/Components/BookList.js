import React from 'react';
import _ from 'lodash'
import Book from './Book'
const BookList = ({books, setBooks})=> {
    const handleRemoveBook=(id)=>{
        setBooks(books.filter((book)=>book.id !==id))
    };
    return (
        <React.Fragment>
            <div className="book-list">
                { !_.isEmpty(books)?(
                    books.map((book)=>(
                        <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
                    )
                )): (<p className="message"> No books available .pls add books </p>)
                
            }
                </div>
            </React.Fragment>
    )
};

export default BookList;
