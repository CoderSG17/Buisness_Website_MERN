import React, { useState } from 'react'
import ParaApi from '../Api/ParaApi'
import '../css/Home.css'
import Navbar from '../components/Navbar'
import img3 from '../images/photo-1531537571171-a707bf2683da.avif'
import Panel from '../components/Panel'
import AboutPanelApi from '../Api/AboutPanelApi'
import Footer from '../components/Footer'
import '../../src/index.css'
import { useAuth } from '../components/Auth'



const About = () => {

    const {user} = useAuth()

    const [para, getPara] = useState(ParaApi)
    return (
        <>
            <Navbar></Navbar>
            <div className='main' style={{ height: "85vh" }}>
                <div className="leftdiv" style={{ height: "85vh" ,marginTop:"20px"}}>
                
                    {user?(<h5>Hi, {user.firstname} {user.lastname}</h5>):
                    (<h5>Welcome To Our Website</h5>)}

                    <h1>Lorem ipsum dolor sit amet.</h1>
                    {
                        para.map((elem) => {
                            const { id, text } = elem
                            return (
                                <div>
                                    <p>{text}</p>
                                </div>
                            )
                        })
                    }
                    <div className='innerleftdiv'>
                        <button className='butn' ><a href="/contact" style={{textDecoration:"none",color:"black"}}>Connect Now</a></button>
                        <button className='butn1'><a href="/" style={{textDecoration:"none",color:"black"}}>Learn More</a></button>
                    </div>
                </div>
                <div className="rightdiv" style={{ height: "85vh" }}>
                    <img src={img3} alt="error" className='img' />
                </div>
            </div>

            <div className='outerdiv'>
                {
                    AboutPanelApi.map((value) => {
                        return (
                            <>
                                <Panel
                                    key={value.id}
                                    count={value.count}
                                    text={value.text}></Panel>
                            </>
                        )
                    })
                }
            </div>

            <Footer></Footer>
        </>
    )
}

export default About