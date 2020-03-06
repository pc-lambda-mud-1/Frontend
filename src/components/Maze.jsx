import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { v4 as uuid } from "uuid";



function generateGrid(height, width) {
  return Array(height)
    .fill(null)
    .map(() =>
      Array(width)
        .fill(null)
        .map(() => 0)
    );
}

const StyledCell = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  height: 49px;
  width: 49px;
  color: black;
`;

const Cell = ({ rowI, colI }) => {
  return (
    <StyledCell>
      {rowI}
      {colI}
    </StyledCell>
  );
};  

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  border: 1px solid black;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const Grid = () => {
  const [grid, setGrid] = useState(generateGrid(10, 10));
  console.log(grid);
  return (
    <>
      <GridContainer>
        {grid.map((el, rowI) =>
          grid[rowI].map((el, colI) => (
            <Cell rowI={rowI} colI={colI} key={uuid()} />
          ))
        )}
      </GridContainer>
    </>
  );
};

const Maze = () => {
  const [rooms, setRooms] = useState({});

  useEffect(() => {
    axios
      .get("https://lambda-mud-build.herokuapp.com/api/game/rooms")
      .then(res => setRooms(res.data));
  }, []);

  console.log(rooms);
  return (
    <div>
      <h1>Maze</h1>
      <Grid />
    </div>
  );
};

export default Maze;
