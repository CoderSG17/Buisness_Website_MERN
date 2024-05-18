import React, { useState } from 'react'
import '../css/Login.css'
import Navbar from '../components/Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../components/Auth'
import {  toast } from 'react-toastify';

const Login = () => {
  const [loginUser , setloginUser] = useState({
    email:"",
    password:""
  })

  const navigate = useNavigate()
  const {storeTokensInLS} = useAuth() 

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setloginUser({
      ...loginUser,
      [name]: value, //yeh hai dynamic bananae ke liye ; user jo bhi field bharega usme yeh convert ho jayega aur baaki sab as it is rahega  
    });
  };
  
  // handle form on submit
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(loginUser);

    try {
      const response = await fetch(`http://localhost:7000/login`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser),
      });
      console.log("response data : ", response);
      
      const resData = await response.json();
      console.log(resData);

      if (response.ok) {
        
        //storing tokens in LS through context api 
        storeTokensInLS(resData.token)
        
        //storing tokens in LS in simple way
        // localStorage.setItem('token',resData.token)
        
        
        setloginUser({ email: "",password: "" });
        navigate('/home')
        console.log(resData);
        toast.success("login successfully");  
      } else {
        toast.error(`${resData.extraDetails?resData.extraDetails:resData.msg}`)
        console.log("error inside response ", "error");
      }
    } catch (error) {
      toast.error('Error fetching Api')
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="ctn">
      <div className="wrapper">
        <div className="title"><span>Login Form</span></div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Email" name='email' value={loginUser.email} onChange={handleInput} required/>
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" name='password' value={loginUser.password} onChange={handleInput} required/>
          </div>
          <div className="pass"><NavLink to="/forgotpassword">Forgot password?</NavLink></div>
          <div className="row button">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">Not a member? <a href="/signup">Signup now</a></div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login