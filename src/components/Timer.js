import React, { useEffect, useState } from "react";

const Timer = () => {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false)

    useEffect(() => {
        let interval;
        if (running) {
          interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
          }, 10);
        } else if (!running) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [running]);

    return (
        <div className="container-fluid ">
            <div className="spacer"></div>
            <h1 className="mt-6 text-center">Timer</h1>
            <div className="spacer-sm"></div>
            <div className="stopwatch">
                <div className="align-self-center numbers">
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                    <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                </div>
                <div className="mt-6">
                    <button className="btn-timer" onClick={() => setRunning(true)}>Start</button>
                    <button className="btn-timer" onClick={() => setRunning(false)}>Stop</button>
                    <button className="btn-timer" onClick={() => setTime(0)}>Reset</button>       
                </div>
            </div>
          
        </div>
    )
};
export default Timer