import React, { useState } from 'react'
import img4 from '../images/photo-1497366811353-6870744d04b2.avif'
import Navbar from '../components/Navbar'
import '../css/Contact.css'
import Footer from '../components/Footer'
import { useAuth } from '../components/Auth'
import { toast } from 'react-toastify'
import Error from './Error'

const Contact = () => {

  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  const [contact , setContact] = useState({
    firstname:"",
    lastname:"",
    email:"",
    message:""
  })

  const [userData , setUserData] = useState(true)
  const {user} = useAuth()

  if (userData && user) {
    setContact({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value, //yeh hai dynamic bananae ke liye ; user jo bhi field bharega usme yeh convert ho jayega aur baaki sab as it is rahega  
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

    try {
      const response = await fetch(`http://localhost:7000/contact`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      console.log("response data : ", response);

      if (response.ok) {
        toast.success("message send successfully");  
        const resData = await response.json();
        console.log(resData);

        //storing tokens in LS through context api 
        // storeTokensInLS(resData.token)

        //storing tokens in LS in simple way
        // localStorage.setItem('token',resData.token)


        setContact({message: "" });
        // navigate('/home')
        console.log(resData);
      } else {
        console.log("error inside response ", "error");
      }
    } catch (error) {
      res.status(400).send(error)
    }
  };



  return (
    <>
    <Navbar></Navbar>
    <div className="main">

        <div className="outrleftdiv">
        <div className="heading">
            <h2>Contact Us</h2>
        </div>
        <div className='imgDiv'>
            <img src={img4} alt="error" className='img' />
        </div>
        </div>

        <div>
            <form className='lftdiv leftdiv'  onSubmit={handleSubmit}>
                <label><h5>Firstname</h5></label>
                <input className='inp' type="text" name='firstname' value={contact.firstname}  onChange={handleInput} placeholder='Enter your firstname' />
                <label><h5>Lastname</h5></label>
                <input className='inp' type="text" name='lastname' value={contact.lastname}  onChange={handleInput} placeholder='Enter your lastname' />
                <label><h5>Email</h5></label>
                <input className='inp' type="text" name='email' value={contact.email}  onChange={handleInput} placeholder='Enter your email' readOnly/>
                <label><h5>Message</h5></label>
                <textarea className='textarea' type="text" name='message' value={contact.message}  onChange={handleInput} placeholder='Enter your message'/>

                <button className='butn'>Submit</button>
            
                </form>
        </div>
    </div>
    <div className='map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.6077314066074!2d77.59074957471289!3d27.605688676240945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bffc039%3A0xfe5fc3da92c6341!2sGLA%20University!5e0!3m2!1sen!2sin!4v1706085869552!5m2!1sen!2sin" style={{border:0, width:"100vw" , height:"300px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <Footer></Footer> 
    </>
  )
}

export default Contact