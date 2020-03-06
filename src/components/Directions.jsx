import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { axiosWithToken } from '../utils/axiosWithAuth';


const Directions = ({ room, setRoom }) => {
  const handleClick = e => {
    if (e.currentTarget.value === "n") console.log("You went north");
    else if (e.currentTarget.value === "e") console.log("You went east");
    else if (e.currentTarget.value === "s") console.log("You went south");
    else if (e.currentTarget.value === "w") console.log("You went west");
  
    axiosWithToken('53f092959b011f35d6f46c76218b51c8433f1ca9')
      .post('https://lambda-mud-build.herokuapp.com/api/game/move', { direction: e.currentTarget.value })
      .then(res => {
        console.log(res.data)
        setRoom(res.data)
      })
  };  

  return (
    <StyledDiv>
      <StyledButton onClick={e => handleClick(e)} value="n">
        <FontAwesomeIcon icon={faAngleUp} />
      </StyledButton>

      <StyledButton onClick={e => handleClick(e)} value="e">
        <FontAwesomeIcon icon={faAngleRight} />
      </StyledButton>

      <StyledButton onClick={e => handleClick(e)} value="s">
        <FontAwesomeIcon icon={faAngleDown} />
      </StyledButton>

      <StyledButton onClick={e => handleClick(e)} value="w">
        <FontAwesomeIcon icon={faAngleLeft} />
      </StyledButton>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
width: 470px;
height: 115px;
border: 5px solid #DF07CA;
border-radius: 20px;
margin-top: 60px;
background-color: black;
display: flex;
justify-content: space-between;
/* Temporary styling for now */
`;

const StyledButton = styled.button`
width: 20%;
background-color: #07ABDF;
height: 30px;
border-radius: 10px;
margin-top: 20px;
`

export default Directions;
