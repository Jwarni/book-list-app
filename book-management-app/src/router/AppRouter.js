import React from 'react';
import {BrowserRouter, Switch , Route }from 'react-router-dom';
import Header from '../Components/Header';
import AddBook from '../Components/AddBook';
import BookList from '../Components/BookList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../Components/EditBook';
import { Redirect } from 'react-router-dom';
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
                        <Route render ={(props) =>(
                            <EditBook {...props} books={books} setBooks={setBooks}/>
                        )}
                        path="/edit/:id"
                        />
                        <Route component={()=> <Redirect to="/" />} />
                        </Switch>
                    </div>
            </div>
    </BrowserRouter>

);

};
export default AppRouter;
