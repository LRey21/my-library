import React, { useState } from "react";

const AddBook = ({ booksData, setBooksData }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    coverPage: "",
    pages: "",
    status: "to read",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
        id: booksData.length + 1,
        title: formData.title,
        author: formData.author,
        coverPage: formData.coverPage,
        pages: parseInt(formData.pages),
        pagesRead: 0, 
        status: formData.status,
        minutesRead: 0, 
        rating: "",
        notes: "", 
      };

    setBooksData([...booksData, newBook]);

    const updatedMyBooks = [...booksData, newBook];
    localStorage.setItem("my_books", JSON.stringify(updatedMyBooks));

    setFormData({
      title: "",
      author: "",
      coverPage: "",
      pages: "",
      status: "to read",
    });
  };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="form-group row my-3">
                <div className="col-sm-6">
                    <label>Title:</label>
                </div>
                <div className="col-sm-6">
                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                 </div>
            </div>
            <div className="form-group row my-3">
                <div className="col-sm-6">
                    <label>Author:</label>
                </div>
                <div className="col-sm-6">
                    <input
                    className="form-control"
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group row my-3">
                <div className="col-sm-6">
                    <label>Cover Page URL:</label>
                </div>
                <div className="col-sm-6">
                    <input
                        className="form-control"
                        type="text"
                        name="coverPage"
                        value={formData.coverPage}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group row my-3">
                <div className="col-sm-6">
                    <label>Pages:</label>
                </div>
                <div className="col-sm-6">
                    <input
                        className="form-control"
                        type="number"
                        name="pages"
                        value={formData.pages}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group row my-3">
            <div className="col-sm-6">
                <label>Status:</label>
            </div>
            <div className="col-sm-6">
                <select
                    className="form-control"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                >
                    <option value="to read">To Read</option>
                    <option value="reading">Reading</option>
                    <option value="read">Read</option>
                </select>
            </div>
        </div>
            </form>
        </div>
    

  );
};

export default AddBook;
