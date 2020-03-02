import React from "react";
import { useFormik } from 'formik';
import axios from 'axios';

const Register = () => {
  const formik = useFormik({
      initialValues: {
          email: '',
          username: '',
          password1: '',
          password2: '',
      },
      onSubmit: values => {
          axios.post('https://lambda-mud-test.herokuapp.com/api/registration', values)
            .then(res => console.log(res))
      },
  });
  return (
      <>
      <h1>Register</h1>
      <form className='register-form' onSubmit={formik.handleSubmit}>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' onChange={formik.handleChange} value={formik.values.email}></input>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' onChange={formik.handleChange} value={formik.values.username}></input>
          <label htmlFor='passwor'>Password</label>
          <input type='password' name='password1' onChange={formik.handleChange} value={formik.values.password1}></input>
          <label htmlFor='confirm password'>Confirm Password</label>
          <input type='password' name='password2' onChange={formik.handleChange} value={formik.values.password2}></input>
          <button type='submit'>Submit</button>
      </form>
      </>
  )
};

export default Register;
