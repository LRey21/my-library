import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { House, Sticky, BlockquoteLeft, ClockHistory, BookmarkPlus, Book } from "react-bootstrap-icons";

import { NavLink } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import AddBook from "./AddBook";

const SideBar = ({children}) => {

    const menuItem = [
        {
            path:"/",
            name:"Home",
            icon:<House className="menu-icon"/>,
        },
        {
            name:"New Book",
            icon:<BookmarkPlus className="menu-icon"/>,
        },
        {
            path:"/timer",
            name:"Timer",
            icon:<ClockHistory className="menu-icon"/>,
        },
        {
            path:"/quotes",
            name:"Quotes",
            icon:<BlockquoteLeft className="menu-icon"/>,
        },
        {
            path:"/notes",
            name:"Notes",
            icon:<Sticky className="menu-icon"/>,
        },
        {
            path:"/library",
            name:"My Library",
            icon:<Book className="menu-icon"/>,
        }
    ]

    const [showModal, setShowModal] = useState(false);

    const handleNewBookClick = () => {
        setShowModal(true); 
      };
    
      const handleCloseModal = () => {
        setShowModal(false); 
      };
    
      const [bookData, setBookData] = useState(() => {
        const storedData = localStorage.getItem("my_books");
        return storedData ? JSON.parse(storedData) : [];
    });
    
    return (
        <div className="container">
            <div className="sidebar">
                <div className="icon-section">
                    <div>
                        {menuItem.map((item, index) => (
                        <div
                            key={index}
                            onClick={
                                item.name === "New Book" ? handleNewBookClick : undefined  
                            } 
                        >
                        <NavLink to={item.path} className="link-icon">
                            <div className="icon">{item.icon}</div>
                        </NavLink>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <main style={{ width: '100%' }}>{children}</main>
            <Modal show={showModal} onHide={handleCloseModal} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>New Book, New Friend</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddBook booksData={bookData} setBooksData={setBookData}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-bg" onClick={handleCloseModal}>
                        Save Book
                    </Button>
                </Modal.Footer>
            </Modal>
    </div>
    )
};
export default SideBar