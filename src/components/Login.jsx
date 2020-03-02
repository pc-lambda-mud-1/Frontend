import React from "react";
import { useFormik } from 'formik';
import axios from 'axios'

const Login = () => {
  const formik = useFormik({
      initialValues: {
          email: '',
          username: '',
          password: '',
      },
      onSubmit: values => {
          alert(JSON.stringify(values, null, 2))
      },
  });
  return (
      <>
      <h1>Login</h1>
      <form className='register-form' onSubmit={formik.handleSubmit}>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' onChange={formik.handleChange} value={formik.values.email}></input>
          <label htmlFor='email'>Username</label>
          <input type='text' name='username' onChange={formik.handleChange} value={formik.values.username}></input>
          <label htmlFor='email'>Password</label>
          <input type='password' name='password' onChange={formik.handleChange} value={formik.values.password}></input>
          <button type='submit'>Submit</button>
      </form>
      </>
  )
};

export default Login;
