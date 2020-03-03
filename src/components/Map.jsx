import React from 'react';
import styled from 'styled-components';

function Map() {
  return (
    <StyledDiv>
      <p style={{color: "#ffffff"}}>This is the map</p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 700px;
  width: 730px;
  margin-left: 60px;
  border: 5px solid #df07ca;
  border-radius: 20px;
  background: black;
`;

export default Map;
