import React from "react";
import { useFormik } from 'formik';
import axios from 'axios'

const Login = () => {
  const formik = useFormik({
      initialValues: {
          username: '',
          password: '',
      },
      onSubmit: values => {
          console.log(values)
          axios.post('http://localhost:8000/login/', values)
            .then(res => console.log(res))
            .catch(err => console.log(err))
      },
  });
  return (
      <>
      <h1>Login</h1>
      <form className='register-form' onSubmit={formik.handleSubmit}>
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
