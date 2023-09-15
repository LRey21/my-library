import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { House, Sticky, BlockquoteLeft, ClockHistory, BookmarkPlus, Book } from "react-bootstrap-icons";

import { NavLink } from "react-router-dom";

const SideBar = ({children}) => {
    const menuItem = [
        {
            path:"/",
            name:"Home",
            icon:<House className="menu-icon"/>,
        },
        {
            path:"/new",
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
    return (
        <div className="container">
            <div className="sidebar">
                <div className="icon-section">
                    <div>
                        {
                            menuItem.map((item, index) => (
                                <NavLink to={item.path} key={index} className="link-icon">
                                    <div className="icon">{item.icon}</div>
                                </NavLink>
                            ))
                        }
                    </div>
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
};
export default SideBar