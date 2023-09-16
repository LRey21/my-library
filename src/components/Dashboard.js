import React, { useState } from "react";
import dayjs from "dayjs";
import Calendar from "react-calendar";

import Spacer from "./Spacer";
import { Button } from "bootstrap";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";

dayjs.locale('en');

const Dashboard = () => {
      
    const todayDate = dayjs().format('dddd, MMMM D');

    return (
        <div className="container-fluid">
            <div className="spacer"></div>
            <p>{todayDate}</p>
            <div className="card">
                <div className="row container-fluid d-flex align-items-center">
                    <div className="col-sm-1">
                        <CaretLeftFill type="button" style={{ color: '#DED6D2' }}/>
                    </div>
                    <div className="col-sm-10">
                        <p style={{ marginBottom: 0 }}>Reading: </p>
                        <h1 style={{ marginTop: 0 }}>La Vida en el Arte</h1>
                    </div>
                    <div className="col-sm-1">
                        <CaretRightFill type="button" style={{ color: '#DED6D2', marginRight: '20px' }}/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2">
                        <img 
                            className="img-fluid img-sm shadow-sm" 
                            src="https://aliaseditorial.com/wp-content/uploads/2020/10/portada-clara-porset.jpg" 
                            alt="La Vida en el Arte"/>
                    </div>
                    <div className="col-sm-5">
                        <p>Page <b className="text-bigger">138</b>/332 </p>
                        <div className="mt-4">
                            <p style={{ marginBottom: 3 }}>Today I read</p>
                            <div className="row align-items-center">
                                <div className="col-sm-3">
                                    <input className="form-control" type="number"/>
                                </div>
                                <div className="col mr-auto">
                                    <label className="col-form-label">Pages</label>
                                </div>
                                <div className="col-sm-3">
                                    <input className="form-control" type="number"/>
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
                    </div>
                    <div className="col-sm-3">
                        <Calendar/>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Dashboard