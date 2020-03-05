import React from "react";
import styled from "styled-components";

const rooms_test = [{ name: "room1", n_to: 0 }, { name: "room2", n_to: 5 }, { name: "room3", n_to: 0 }];

function Map() {
  return (
    <StyledDiv>
      <p >This is the map</p>
    
    </StyledDiv>
  );
}

const StyledRooms = styled.div;

const StyledDiv = styled.div`
  height: 700px;
  width: 730px;
  margin-left: 60px;
  border: 5px solid #df07ca;
  border-radius: 20px;
  background: black;
  font-family: 'Kodchasan', sans-serif;
  color: #07ABDF;
`;

export default Map;
