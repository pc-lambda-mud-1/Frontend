import React from "react";
import Directions from './Directions';
import Map from './Map';
import RoomDetails from './RoomDetails';

const Dashboard = () => {
    return (
        <div>
            <Directions />
            <Map />
            <RoomDetails />
        </div>
    )
}

export default Dashboard;