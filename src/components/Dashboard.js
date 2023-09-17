import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import Calendar from "react-calendar";

import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";
import MyLibrary from "./MyLibrary";
import { my_books } from "./data/my_books";

dayjs.locale('en');

const Dashboard = () => {
    const booksData = my_books  
    const todayDate = dayjs().format('dddd, MMMM D');
    const [readingBooks, setReadingBooks] = useState([]);
    const [currentBookIndex, setCurrentBookIndex] = useState(0);
    const [pages, setPages] = useState(booksData.pagesRead);

    const handleOk = () => {
        const updatedReadingBooks = [...readingBooks];
        const updatedBook = updatedReadingBooks[currentBookIndex];
        const newPagesValue = parseInt(document.querySelector('input[name="pages"]').value, 10) || 0; // Get the value from the input
      
        updatedBook.pagesRead += newPagesValue; 
        updatedReadingBooks[currentBookIndex] = updatedBook;
        setReadingBooks(updatedReadingBooks);
      
        document.querySelector('input[name="pages"]').value = '';
      };
      
    const [bookData, setBookData] = useState(() => {
        const storedData = localStorage.getItem("my_books");
        return storedData ? JSON.parse(storedData) : [];
    });

    useEffect(() =>{
        const reading = booksData.filter(book => book.status === 'reading');
        setReadingBooks(reading);
    }, [booksData]);

    const handlePrevBook = () => {
        setCurrentBookIndex(prevIndex => (prevIndex - 1 + readingBooks.length) % readingBooks.length);
    };

    const handleNextBook = () => {
        setCurrentBookIndex(prevIndex => (prevIndex + 1) % readingBooks.length);
      };

    return (
        <div className="container-fluid">
            <div className="spacer"></div>
            <p>{todayDate}</p>
            <div className="card">
                <div className="row container-fluid d-flex align-items-center">
                    <div className="col-sm-1">
                        <CaretLeftFill type="button" style={{ color: '#DED6D2' }} onClick={handlePrevBook}/>
                    </div>
                    <div className="col-sm-10">
                        <p style={{ marginBottom: 0 }}>Reading: </p>
                        <h1 style={{ marginTop: 0 }}>{readingBooks[currentBookIndex]?.title || "Come on! Read something!"}</h1>
                    </div>
                    <div className="col-sm-1">
                        <CaretRightFill type="button" style={{ color: '#DED6D2', marginRight: '20px' }} onClick={handleNextBook}/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2">
                        <img 
                            className="img-fluid img-sm shadow-sm" 
                            src={readingBooks[currentBookIndex]?.coverPage} 
                            alt={readingBooks[currentBookIndex]?.title}/>
                    </div>
                    <div className="col-sm-5">
                        <p>Page <b className="text-bigger">{readingBooks[currentBookIndex]?.pagesRead}</b>/{readingBooks[currentBookIndex]?.pages} </p>
                        <div className="mt-4">
                            <p style={{ marginBottom: 3 }}>Today I read</p>
                            <div className="row align-items-center">
                                <div className="col-sm-3">
                                    <input className="form-control" type="number" min="0" name="pages"/>
                                </div>
                                <div className="col mr-auto">
                                    <label className="col-form-label">Pages</label>
                                </div>
                                <div className="col-sm-3">
                                    <input className="form-control" type="number" min="0"/>
                                </div>
                                <div className="col mr-auto">
                                    <label className="col-form-label">Minutes</label>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="mt-4">
                            <p style={{ marginBottom: 3 }}>Today's notes</p>
                                <textarea className="form-control" rows="2" id="comment"/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mt-2">
                          <button 
                            className="ok-btn"
                            onSubmit={handleOk} 
                          >
                            Ok
                          </button>
                        </div>
                        
                    </div>
                    <div className="col-sm-3">
                        <Calendar/>
                    </div>
                </div>
            </div>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="container">
                <MyLibrary booksData={booksData}/>
            </div>
            <div className="spacer"></div>
            <div className="container">
            </div>
        </div>
    )
};
export default Dashboard