import React from "react";
import Register from "./Register";
import Login from "./Login";
import register_image from "../Images/register_image.jpeg";
import styled from "styled-components";

const Onboarding = () => {
  return (
    <StyledContainer>
      <StyledHead>
        <h1>TIME TUNNEL</h1>
      </StyledHead>

      <StyledDiv>
        <div>
          <Register />
        </div>
        <div>
          <Login />
        </div>
      </StyledDiv>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
  /* padding-top: 80px; */
  background-image: url(${register_image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const StyledHead = styled.nav`
  display: flex;
  font-family: "Kodchasan", sans-serif;
  color: #07abdf;
  justify-content: space-between;
  height: 75px;
  width: 90%;
  margin: 0 auto;
  h1 {
    padding: 10px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 200px;
  margin: 0 auto;
  width: 1000px;
  align-items: center;
  /* flex-direction: column; */
  /* height: 100vh;
  /* padding-top: 80px; */
  /* background-image: url(${register_image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;  */
`;

export default Onboarding;
