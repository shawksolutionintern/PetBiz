import Calender from "./Calender"
import ApptList from "./ApptList";
import React from "react";

const Home = () => {
    return(
        <div className="homepage">
            <Calender />
            <ApptList />
        </div>
    )
}


export default Home;