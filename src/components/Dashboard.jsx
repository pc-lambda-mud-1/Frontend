import React from "react";
import Directions from "./Directions";
import Map from "./Map";
import RoomDetails from "./RoomDetails";
import styled from "styled-components";
import game_image from "../Images/game_image.jpeg";
import { withRouter, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <StyledDiv>
      
      <div>
        <RoomDetails />
        <Directions />
      </div>
      <Map />
    
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  padding: 80px;
  background-image: url(${game_image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default withRouter(Dashboard);
