import React from 'react'
import Navbar from '../components/Navbar'
// import {img5} from '../images/ServicesPics/AI.avif'
// import {img6} from '../images/ServicesPics/cloud_computing.avif'
// import {img7} from '../images/ServicesPics/AI.avif'
// import {img8} from '../images/ServicesPics/it_supporting.avif'
// import {img9} from '../images/ServicesPics/network_security.avif'
// import {img10} from '../images/ServicesPics/web_developement.avif'
import '../css/Service.css'
import { useAuth } from '../components/Auth'
import Footer from '../components/Footer';

const Service = () => {

  const { services } = useAuth();
  console.log(services.data)



  return (
    <>
      <Navbar></Navbar>
      <h2 style={{ margin: "30px 0px 0px 60px" }}>Services</h2>

      <div className='outerDiv'>
        {
          services.map((elem) => {
            const { description, image, price, provider, service } = elem
            return (
             
                <div className='mainDiv'>
                  <div className="image">
                    <img src={image} alt="error" className='img1' />
                  </div>
                  <div className="price">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <div className='abt'>
                    <h5>{service}</h5>
                    <p>{description}</p>
                  </div>
                </div>
    

            )
          })}

      </div>
      <Footer></Footer>
    </>
  )
}

export default Service