import React ,{ useState} from 'react'
import {  toast } from 'react-toastify';
// import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; 

const ChangePassForm = (props) => {

    const navigate = useNavigate()
    // console.log(props)

    const [ changePass, setchangePass] = useState({
        email:`${props.email.email}`,
        otp:"",
        password:"",
        confirmpassword:""

      });
      
      const handleInput = (e) => {
        // console.log(e);
        let name = e.target.name;
        let value = e.target.value;
    
        setchangePass({
          ...changePass,
          [name]: value, //yeh hai dynamic bananae ke liye ; user jo bhi field bharega usme yeh convert ho jayega aur baaki sab as it is rahega  
        });
      };
      
      // handle form on submit
      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(changePass);
        // Object.assign(changePass,props)
        
        try {
          const response = await fetch(`http://localhost:7000/changepassword`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(changePass),
          });
          // const response = await axios.post('http://localhost:7000/changepassword', changePass, {
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          // });
      
          // console.log('response data : ', response);
          
          const resData = await response.json();
          console.log(resData);
          // console.log(response.json());
          
          if (response.ok) {
            
            //storing tokens in LS through context api 
            // storeTokensInLS(resData.token)
            
            //storing tokens in LS in simple way
            // localStorage.setItem('token',resData.token)
            
            
            // setchangePass({ otp: "",password: "" ,confirmpassword:"",email:""});
            navigate('/login')
            // console.log(resData);
            toast.success("Password changed successfully");  
            
          } else {
            toast.error(`${resData.extraDetails?resData.extraDetails:resData.message}`)
            // console.log("error inside response ", "error");
            // toast.error("Something went wrong")

          }
        } catch (error) {
            toast.error('Error fetching Api')
        }
      };
    
    return (
        <>
  
        <form onSubmit={handleSubmit} >
        <label ><h5 style={{ margin: "0px 0px -3px -10px" }} >Your Email</h5></label>
            <div className="row">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Email" name='email'  onChange={handleInput}  value={changePass.email} readOnly/>
            </div>

            <label ><h5 style={{ margin: "0px 0px -3px -10px" }} >Enter OTP</h5></label>
            <div className="row">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="OTP" name='otp'  onChange={handleInput} maxLength='6' value={changePass.otp} required/>
            </div>


            <label ><h5 style={{ margin: "0px 0px -3px -10px" }} >Enter Password</h5></label>
            <div className="row">
                <i className="fas fa-user"></i>
                <input type="password" placeholder="Password" name='password'  onChange={handleInput} value={changePass.password} required/>
            </div>


            <label ><h5 style={{ margin: "0px 0px -3px -10px" }} >Confirm Password</h5></label>
            <div className="row">
                <i className="fas fa-user"></i>
                <input type="password" placeholder="Confirm Password" name='confirmpassword'  onChange={handleInput} value={changePass.confirmpassword} required/>
            </div>


            <div className="row button">
                <input type="submit" value="Change Password" />
            </div>

        </form>
        
    </>
    )
}

export default ChangePassForm