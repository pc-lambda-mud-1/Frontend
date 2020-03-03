import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import { axiosWithToken } from '../utils/axiosWithAuth';

const RoomDetails = () => {

    const [room, setRoom] = React.useState({})

    React.useEffect(() => {
        axiosWithToken('efc60d4aec6d9aa461dad04901e68c40eddbeea2')
            .get('https://lambda-mud-build.herokuapp.com/api/game/init')
            .then(res => {
                setRoom(res.data)
            })
    }, [])

    return(
        <StyledDiv>
            <p>Room Details</p>
            <p>Room Title: {room.title}</p>
            <p>Description: {room.description}</p>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
height: 510px;
width: 470px;
border: 5px solid #DF07CA;
border-radius: 20px;
background: black;
color: white;
`;

export default RoomDetails