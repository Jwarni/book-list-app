import React from 'react';
import {BrowserRouter, Switch , Route }from 'react-router-dom';
import Header from '../Components/Header';
import AddBook from '../Components/AddBook';
import BookList from '../Components/BookList';

const AppRouter = ()=>{
return (
    <BrowserRouter>
        <div>
            <Header />
                <div className="main-content">
                    <Switch>
                        <Route component={BookList} path="/" exact ={true} />
                        <Route component={AddBook} path="/add" />

                        </Switch>
                    </div>
            </div>
    </BrowserRouter>

);

};
export default AppRouter;
