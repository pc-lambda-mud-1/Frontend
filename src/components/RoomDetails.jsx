import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import { axiosWithToken } from '../utils/axiosWithAuth';

const RoomDetails = ( { room, setRoom }) => {

    React.useEffect(() => {
        axiosWithToken('53f092959b011f35d6f46c76218b51c8433f1ca9')
            .get('https://lambda-mud-build.herokuapp.com/api/game/init')
            .then(res => {
                console.log(res.data)
                setRoom(res.data)
            })
    }, [])

    return(
        <StyledDiv>
            <p>Room Details</p>
            <p>Room Title: {room.title}</p>
            <p>Description: {room.description}</p>
            <p>{room?.error_msg}</p>
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