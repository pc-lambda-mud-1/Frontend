import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function Map() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios
      .get("https://lambda-mud-build.herokuapp.com/api/game/rooms")
      .then(res => setRooms(res.data.rooms));
  }, []);

  return (
    <StyledDiv>
      <MapContainer>
        {rooms.map((el, i) => (
          <Cell index={i} room={el} />
        ))}
      </MapContainer>
    </StyledDiv>
  );
}

const StyledCell = styled.div`
  box-sizing: border-box;
  border: 1px solid white;
  height: 49px;
  width: 49px;
  color: white;
`;

const Cell = ({ index, room }) => {
  return <StyledCell onClick={(e) => console.log(room)}>{index}</StyledCell>;
};

const MapContainer = styled.div`
  display: flex;
  height: 500px;
  width: 500px;
  border: 1px solid white;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledDiv = styled.div`
  height: 700px;
  width: 730px;
  margin-left: 60px;
  border: 5px solid #df07ca;
  border-radius: 20px;
  background: black;
  font-family: "Kodchasan", sans-serif;
  color: #07abdf;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Map;
