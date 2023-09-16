import React, { useEffect, useState } from "react";
import { List, Grid } from "react-bootstrap-icons";

import { my_books } from "./data/my_books";

const MyLibrary = ({ booksData }) => {
    const [viewType, setViewType] = useState('list'); 
    const [booksToRead, setBooksToRead] = useState([]);
    const [booksReading, setBooksReading] = useState([]);
    const [booksRead, setBooksRead] = useState([]);

    useEffect(() => {
        const toRead = booksData.filter(book => book.status === 'to read');
        const reading = booksData.filter(book => book.status == 'reading');
        const read = booksData.filter(book => book.status == "read");

        setBooksToRead(toRead);
        setBooksReading(reading);
        setBooksRead(read);
    }, [booksData]);
  
    const toggleView = (type) => {
        setViewType(type);
      };
    
    const renderBookList = (books) => {
      return books.map((book, index) => (
        <li key={index}>
          {viewType === 'gallery' ? (
            <img className="book-cover column-sm" src={book.coverPage} alt={book.title} />
          ) : (
            book.title
          )}
        </li>
      ));
    };

    return (
        <div className="container-fluid mt-4">
          <div className="row">
            <h3 className="text-center">My Library</h3>
          </div>
          <div className="row">
            <div className="btn-toolbar mb-3 justify-content-end">
                <div className="btn-group">
                    <button
                        className={`view-btn ${viewType === 'list' ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => toggleView('list')}
                        style={{ marginRight: '10px'}}
                    >
                        <List className="icon"/>
                    </button>
                    <button
                        className={`view-btn ${viewType === 'gallery' ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => toggleView('gallery')}
                    >
                        <Grid className="icon"/>
                    </button>
                </div>
            </div>
          </div>
          <div className="spacer-sm"></div>
          <div className="row container-fluid justify-content-center">
          <div className="col list-reading">
            <h5 className="mb-5 text-center">To Read</h5>
            <div className={`d-flex ${viewType === 'gallery' ? 'flex-wrap' : ''}`}>
              <ul className={viewType === 'gallery' ? 'gallery-list' : ''}>
                    {renderBookList(booksToRead)}
                </ul>
            </div>
          </div>
          <div className="col list-reading">
            <h5 className="mb-5 text-center">Reading</h5>
            <div className={`d-flex ${viewType === 'gallery' ? 'flex-wrap' : ''}`}>
              <ul className={viewType === 'gallery' ? 'gallery-list' : ''}>
                {renderBookList(booksReading)}
              </ul>
            </div>
          </div>
          <div className="col">
            <h5 className="mb-5 text-center">Read</h5>
              <div className={`d-flex ${viewType === 'gallery' ? 'flex-wrap' : ''}`}>
                <ul className={viewType === 'gallery' ? 'gallery-list' : ''}>
                  {renderBookList(booksRead)}
                </ul>
              </div>
            </div>
          </div>
        <div className="spacer"></div>
      </div>
    );
  };
  
export default MyLibrary