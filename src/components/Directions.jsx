import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";


const handleClick = e => {
  if (e.currentTarget.value === "n") console.log("You went north");
  else if (e.currentTarget.value === "e") console.log("You went east");
  else if (e.currentTarget.value === "s") console.log("You went south");
  else if (e.currentTarget.value === "w") console.log("You went west");
};

const Directions = () => {
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
