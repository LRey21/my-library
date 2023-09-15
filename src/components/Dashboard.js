import React from "react";
import dayjs from "dayjs";

dayjs.locale('en');

const Dashboard = () => {
      
    const todayDate = dayjs().format('dddd, MMMM D');

    return (
        <div>
            <p>{todayDate}</p>
        </div>
    )
};
export default Dashboard