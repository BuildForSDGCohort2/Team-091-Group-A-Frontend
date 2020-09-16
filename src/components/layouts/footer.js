import React from "react"
import { Link } from "react-router-dom"
import '../../styles/footer.css'

const Footer = () => {
    return (
        <div>
        <hr className="text-grey mb-5"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-7 mb-3 order-2 order-md-1">
                        <h5 className="footer-headings footer-logo">About Us</h5>
                        <p className="footer-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum qui nam ipsum dolor temporibus reiciendis, sequi reprehenderit facere alias illo velit, eveniet ratione rem? Facere ipsum molestiae nobis recusandae! Tenetur?</p>
                        <p className="footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum enim ut minima doloremque quod suscipit ad aut quos minus dicta commodi error incidunt, laborum facilis provident non hic! Distinctio.</p>
                        <p className="footer-copyright">&copy; 2020 TransAll. All rights reserved | Developed with <span className="text-danger">♥</span> by <a href="#" target="_blank" rel="noopener noreferrer">Team-091-Group A</a></p>
                    </div>
                
                    <div className="col-12 col-sm-5 order-1 order-md-2">
                        <div className="row">
                            <div className="col-12 col-sm-6 mb-3">
                                <h5 className="footer-headings">Quick Links</h5>
                                <div className="quick_links">
                                <ul className="">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/flights">Flights</Link></li>
                                    <li><Link to="/trains">Trains</Link></li>
                                    <li><Link to="/cars">Cars</Link></li>
                                    <li><Link to="/tours">Tours</Link></li>
                                    <li><Link to="/attractions">Attractions</Link></li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <h5 className="footer-headings">TransAll</h5>
                                <div className="service_links">
                                <ul>
                                    <li><Link to="#">Bookings</Link></li>
                                    <li><Link to="#">Support</Link></li>
                                    <li><Link to="#">Careers</Link></li>
                                    <li><Link to="#">Term of Service</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li className="social_links">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><span className="fab fa-facebook"></span></a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><span className="fab fa-twitter"></span></a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><span className="fab fa-instagram"></span></a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
