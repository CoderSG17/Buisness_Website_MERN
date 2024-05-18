import React ,{useState} from 'react'
import Navbar from '../components/Navbar'
import '../css/SignUp.css'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../components/Auth'
import {  toast } from 'react-toastify';


const SignUp = () => {

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate()
  const {storeTokensInLS} = useAuth() 

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value, //yeh hai dynamic bananae ke liye ; user jo bhi field bharega usme yeh convert ho jayega aur baaki sab as it is rahega  
    });
  };

  // handle form on submit
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(`http://localhost:7000/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data : ", response);
      
      const resData = await response.json();
      console.log(resData);

      if (response.ok) {
        
        //storing tokens in LS through context api 
        storeTokensInLS(resData.token)
        
        
        //storing tokens in LS in simple way
        // localStorage.setItem('token',resData.token)
        
        setUser({ firstname: "", lastname:"", email: "", phone: "", password: "" ,confirmpassword:"" });
        navigate('/home')
        toast.success("Registration successful");  
        console.log(resData);
      } else {
        toast.error(resData.extraDetails?resData.extraDetails:resData.message)
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.error("Error", error);
    }

    // try {
    //     const api = "http://localhost:7000/signup"
    //     const response = await axios.get(api)
    //     console.log(response);
    // } catch (error) {
    //     console.log(error);
    // }
  };
  

  return (
    <>
    <Navbar></Navbar>
    <div className='box'>
    <div className="ctn1">
    <div className="title">Registration</div>
    <div className="cntnt">
      <form onSubmit={handleSubmit} method='POST'>
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input type="text"  placeholder="Enter your name"  name='firstname' onChange={handleInput} value={user.firstname} required/>
          </div>
          <div className="input-box">
            <span className="details">Last Name</span>
            <input type="text" placeholder="Enter your username" name='lastname' onChange={handleInput} value={user.lastname} required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email"  name='email' onChange={handleInput} value={user.email} required/>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="number" placeholder="Enter your number"  name='phone' onChange={handleInput} value={user.phone} required/>
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="password" placeholder="Enter your password" name='password'  onChange={handleInput} value={user.password} required/>
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="password" placeholder="Confirm your password"  name='confirmpassword' onChange={handleInput} value={user.confirmpassword} required/>
          </div>
        </div>
       
        <div className="button">
          <input type="submit" value="Register"/>
          <div style={{textAlign:'center',marginTop:"5px"}}>Already Registered?<a href="/login"> Login Now</a></div>
        </div>
      </form>
    </div>
  </div>
  </div>
  </>
  )
}

export default SignUp