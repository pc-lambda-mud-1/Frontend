import React from "react";
import Directions from "./Directions";
import Map from "./Map";
import RoomDetails from "./RoomDetails";
import styled from "styled-components";
import game_image from "../Images/game_image.jpeg";
import { Route } from "react-router-dom";

const Dashboard = () => {
  const [room, setRoom] = React.useState({})
  console.log(room)
  return (
    <StyledDiv>
      <StyledHead>
          <h1>TIME TUNNEL</h1>
          <h1>LOG OUT</h1>
      </StyledHead>
      <StyledMain>
      <div >
        <RoomDetails room={room} setRoom={setRoom}/>
        <Directions room={room} setRoom={setRoom}/>
      </div>
      <Map />
      </StyledMain>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* padding-top: 80px; */
  background-image: url(${game_image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

`;

const StyledHead = styled.nav`
display: flex;
font-family: 'Kodchasan', sans-serif;
color: #07ABDF;
justify-content: space-between;
height: 75px;
width: 90%;
margin: 0 auto;
h1 {
    padding: 10px;
}
`;

const StyledMain = styled.div`
margin: 0 auto;
display: flex;
padding-top: 80px;
`;


export default Dashboard;
