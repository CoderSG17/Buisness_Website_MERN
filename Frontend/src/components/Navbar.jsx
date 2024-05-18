import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { useAuth } from './Auth.jsx'
import { toast } from 'react-toastify';



const Navbar = () => {

    const [toggleButton, setToggleButton] = useState(true);


    const toggle = () => {
        setToggleButton(false)
    }

    const { isLoggedIn } = useAuth();
    console.log(isLoggedIn);

    const showToast=()=>{
    toast.success("Logged out successfully")
}

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light w-100" style={{ height: "70px", width: "100vw" }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand ml-5" to='/' href="/"><h5 style={{height:"15px"}}>RadheRadhe</h5></NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation" onClick={toggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${toggleButton ? "show" : ""} `} id="navbarSupportedContent">

                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item active">
                                <NavLink className="nav-link ml-2" to='/' href="/">Home <span className="sr-only"></span></NavLink>
                            </li>
                            <li className="nav-item active">
                               {isLoggedIn?<NavLink className="nav-link ml-2" to='/about' href="/about">About <span className="sr-only"></span></NavLink>:<NavLink className="nav-link ml-2" to='/login' >About <span className="sr-only"></span></NavLink>} 
                            </li>
                            <li className="nav-item active">
                                {isLoggedIn?<NavLink className="nav-link ml-2" to='/contact' href="/contact">Contact <span className="sr-only"></span></NavLink>:<NavLink className="nav-link ml-2" to='/'>Contact <span className="sr-only"></span></NavLink>}
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link ml-2" to='/services' href="/services">Services <span className="sr-only"></span></NavLink>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            {isLoggedIn ? (

                                <NavLink to='/logout' href='/logout'><button className="btn btn-outline-danger pt-0 mt-1 ml-2 mr-5 pt-0 pb-0 mb-1" type="submit" onClick={showToast}>Logout</button></NavLink>
                            ) : (
                                <>

                                    <NavLink to='/login' href='/login' ><button className="btn btn-outline-success mr-3 mt-1 ml-2 mb-1 pt-0 pb-0" type="submit" >Login</button></NavLink>
                                    <NavLink to='/signup' href="/signup"><button className="btn btn-outline-success pt-0 mt-1 mr-5 pt-0 pb-0 mb-1" type="submit" >SignUp</button></NavLink>

                                </>
                            )}


                        </form>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default Navbar