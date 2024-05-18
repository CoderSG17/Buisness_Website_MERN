import React from 'react'
import Navbar from '../components/Navbar'
import '../css/Home.css'
import Panel from '../components/Panel'
import TopHome from '../components/TopHome'
import BottomHome from '../components/BottomHome'
import Footer from '../components/Footer'
import HomePanelApi from '../Api/HomePanelApi'
import { toast } from 'react-toastify'


const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <TopHome></TopHome>
      <div className='outerdiv'>
      {
        HomePanelApi.map((value)=>{
          return(
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
      <BottomHome></BottomHome>
      <Footer></Footer>
      

    </>
  )
}

export default Home