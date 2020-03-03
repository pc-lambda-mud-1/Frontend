import React from "react";
import Directions from './Directions';
// import Map from './Map';
import RoomDetails from './RoomDetails';

const Dashboard = () => {
    return (
        <div>
            {/* <Map /> */}
            <RoomDetails /> 
            <Directions />
        </div>
    )
}

export default Dashboard;