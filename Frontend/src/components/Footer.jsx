import React from 'react'
import '../css/Footer.css'
const Footer = () => {
    return (
        <>
            <footer className="mainfooter" role="contentinfo">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row chng">
                            <div className="col-md-3">
                                <div className="footer-pad">
                                    <h4>Company</h4>
                                    <ul className="list-unstyled">
                                        {/* <li> <a href="https://www.facebook.com/"> </a> </li>
                                        <li> <a href="https://www.facebook.com/">Payment Center</a></li>
                                        <li> <a href="https://www.facebook.com/"> Contact Directory </a></li> */}
                                        <li> <a href="https://www.facebook.com/">Forms</a></li>
                                        <li> <a href="https://www.facebook.com/">News and Updates</a></li>
                                        <li> <a href="https://www.facebook.com/">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-pad">
                                    <h4> Support </h4>
                                    <ul className="list-unstyled">
                                        {/* <li><a href="https://www.facebook.com/"> Blog </a> </li>
                                        <li><a href="https://www.facebook.com/">Accessibility</a> </li>
                                        <li><a href="https://www.facebook.com/">Disclaimer</a></li> */}
                                        <li><a href="https://www.facebook.com/">Privacy Policy</a></li>
                                        <li><a href="https://www.facebook.com/">FAQs</a></li>
                                        <li><a href="https://www.facebook.com/">Webmaster</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-pad">
                                    <h4>Services </h4>
                                    <ul className="list-unstyled">
                                        {/* <li> <a href="https://www.facebook.com/"> Parks and Recreation </a> </li>
                                        <li> <a href="https://www.facebook.com/"> Public Works </a> </li> */}
                                        <li> <a href="https://www.facebook.com/">Police Department</a> </li>
                                        <li> <a href="https://www.facebook.com/"> Fire </a> </li>
                                        <li> <a href="https://www.facebook.com/"> Mayor and City Council </a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h4> Follow Us </h4>
                                <ul className="social-network social-circle">
                                    <li> <a href="https://www.facebook.com/" className="icoFacebook"  title="Facebook"> <i className="fa fa-facebook"> </i> </a> </li>
                                    <li> <a href="https://www.instagram.com/"   className="icoInstagram"  title="Instagram"> <i className="fa fa-instagram"> </i> </a> </li>
                                    <li> <a href="https://www.github.com/"  className="icoGithub"    title="Github"> <i className="fa fa-github"> </i> </a> </li>
                                    <li> <a href="https://www.linkedin.com/" className="icoLinkedin" title="Linkedin"> <i className="fa fa-linkedin"> </i> </a> </li>
                                    <li> <a href="https://www.youtube.com/" className="icoYoutube"  > <i className="fa fa-youtube" aria-hidden="true"> </i> </a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-32 copy">
                                <p className="text-center"> © Copyright 2021 - Company Name.  All rights reserved. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> 
    </>
  )
}

export default Footer