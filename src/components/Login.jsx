import React from "react";
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import styled from "styled-components";

const Login = () => {
  const history = useHistory();
  const formik = useFormik({
      initialValues: {
          username: '',
          password: '',
      },
      onSubmit: values => {
          console.log(values)
          axios.post('https://lambda-mud-build.herokuapp.com/login/', values)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.key)
                history.push('/welcome')
            })
            .catch(err => console.log(err))
      },
  });
  return (
      <StyledDiv>
      <h1>Login</h1>
      <StyledForm className='register-form' onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Username</label>
          <input type='text' name='username' onChange={formik.handleChange} value={formik.values.username}></input>
          <label htmlFor="password">Password</label>
          <input  type='password' name='password' onChange={formik.handleChange} value={formik.values.password}></input>
          <StyledButton type='submit'>Submit</StyledButton>
      </StyledForm>
      </StyledDiv>
  )
};

const StyledForm = styled.form`
display: flex;
flex-direction: column;
width: 400px;
height: 400px;
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
export default Login;
