import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      window.location.href = '/home'; 
    } 
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    const validationError = {}
    if (!formData.email.trim()) {
      validationError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationError.email = "Email is not a valid";
    }
    if (!formData.password.trim()) {
      validationError.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationError.password = "Password should be at least 6 characters";
    }
    // if (!value.trim()) {
    //   validationErrors[name] = ${name.charAt(0).toUpperCase() + name.slice(1)} is required;
    // } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
    //   validationErrors.email = "Email is not valid";
    // } else if (name === 'password' && value.length < 6) {
    //   validationErrors.password = "Password should be at least 6 characters";
    // }
    setErrors(validationError);
    if (Object.keys(validationError).length === 0) {
      // alert("Form  Successfully")
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('email:', formData?.email);
    // console.log('password:', formData?.password);
    // console.log(formData , "==========")
    // return;
    try {
      const response = await axios.post('http://3.90.31.196:2414/login ', {
        email : formData?.email,
        password : formData?.password
      },{
        headers:{
          'Content-Type':'application/json'
        }
      });
      // console.log(response,'-j-k-j-k-jk')
      if (response?.data?.success){
        const  {token } = response?.data?.data;
        localStorage.setItem('token', token);
        alert("Form Submitted Successfully") ;
        window.location.href = '/home ';
      }else{
        alert("Invalid Credential") ;
      }
    } catch (error) {
      console.error('Login Error:', error)
      alert('invalid credential')
      setErrors('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit" className="btn-login">Login</button>
        {/* {errors && <p>{errors}</p>} */}
      </form>
      <div className="signup-link">
        <p>Don't have an account? <Link to="/SignUp">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;