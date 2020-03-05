import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import styled from "styled-components";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password1: "",
      password2: ""
    },
    onSubmit: values => {
      console.log(values);
      axios
        .post("https://lambda-mud-build.herokuapp.com/registration", values)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  });
  return (
    <StyledDiv>
      <h1>Register</h1>
      <StyledForm className="register-form" onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        ></input>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password1"
          onChange={formik.handleChange}
          value={formik.values.password1}
        ></input>
        <label htmlFor="confirm password">Confirm Password</label>
        <input
          type="password"
          name="password2"
          onChange={formik.handleChange}
          value={formik.values.password2}
        ></input>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
};

const StyledButton = styled.button`
width: 100px;
padding: 15px 15px;
background-color: #07ABDF;
font-family: 'Kodchasan', sans-serif;
color: white;
border-radius: 8px;
text-align: center;
font-size: 16px;
margin-left: 38%;
border:solid 1px #07ABDF;
`;

const StyledForm = styled.form`
display: flex;
flex-direction: column;
width: 400px;
height: 500px;
justify-content: space-evenly;
label {
    text-align: left;
    color: #DF07CA;
    margin-left: 15px;
}
input {
    font-family: 'Kodchasan', sans-serif;
    margin: 10px;
    height: 30px;
    border-radius: 8px;
}    
`;

const StyledDiv = styled.div`
font-family: 'Kodchasan', sans-serif;
color: #07ABDF;
display: flex;
flex-direction: column;
background-color: rgba(0,0,0,0.75);
border: 5px solid #DF07CA;
border-radius: 20px;
text-align: center;

`;


export default Register;
