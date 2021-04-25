import React from 'react';
import {BrowserRouter, Switch , Route }from 'react-router-dom';
import Header from '../Components/Header';
import AddBook from '../Components/AddBook';
import BookList from '../Components/BookList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = ()=>{
    const [books, setBooks] = useLocalStorage('books',[]);

return (
    <BrowserRouter>
        <div>
            <Header />
                <div className="main-content">
                    <Switch>
                        <Route render ={(props)=>(
                            <BookList {...props} books={books} setBooks={setBooks} />
                        )} 
                        path="/"
                        exact={true}
                        />
                        <Route render ={(props)=> (
                            <AddBook {...props} books={books} setBooks={setBooks} />

                        )}
                            path ="/add"
                        />
                        </Switch>
                    </div>
            </div>
    </BrowserRouter>

);

};
export default AppRouter;
