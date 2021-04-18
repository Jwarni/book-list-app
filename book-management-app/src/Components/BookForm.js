import React, { useState } from 'react';
import {Form , Button} from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';

const BookForm = (props) => {
    const [book , setBook] = useState({
        bookname : props.book? props.book.name:'',
         author: props.book? props.book.author: '',
         quantity: props.book? props.book.quantity: '',
         price: props.book? props.book.price:'',
         date: props.date? props.book.date: ''
    });
    const [errorMSG , setErrorMSG]=useState('');
    const [bookname, author, price , quantity]=book;

    const handleOnSubmit = (event)=> {
        event.preventDefault();
        const values = [bookname, author,price , quantity];
        let errorMSG = '';

        const allFieldsFilled = values.every((field)=> {
            const value = `${field}`.trim();
            return value !== '' && value !=='0';


        });

        if (allFieldsFilled){
            const book = {
                id: uuidv4();
                bookname,
                author,
                price,
                quantity,
                date: new Date()

            };
            props.handleOnSubmit(book);
        }
        else {
            errorMSG = 'Please fill out all the field';

        }
        setErrorMSG(errorMSG);
    };
    


}