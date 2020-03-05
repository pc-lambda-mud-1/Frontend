import React from 'react';
import styled from "styled-components";

const RoomDetails = ({rooms}) => {
    return(
        <StyledDiv>
            <p>Room Details</p>
            {/* <p>Room Title: {rooms.title}</p>
            <p>Description: {rooms.description}</p> */}
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
height: 510px;
width: 470px;
border: 5px solid #DF07CA;
border-radius: 20px;
background: black;
font-family: 'Kodchasan', sans-serif;
color: #07ABDF;

`;

export default RoomDetails