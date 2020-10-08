import React, { useState } from "react"
import "../../styles/home.css"
import { NavLink } from 'react-router-dom';
import { findServices } from "../../actions/services"
import { useDispatch } from "react-redux";

const Card = ({headText, word}) => (
    <div className="card d-block w-100">
        <div className="card-header">
            <h5>{headText}</h5>
        </div>
        <div className="card-body">
            <p>{word} </p>
            <NavLink to="#try-it">
                <button className="btn btn-primary" id="#try-it">Try it Out</button>
            </NavLink>
        </div>
    </div>
)
const Carousel = () =>{ 
   return (
        <div id="carouselExampleControls" className="carousel slide carousel-cont" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      {/* <Img src={"../../images/bg1.jpg"}  alt="..." /> */}
      <Card headText={"Get To Where you are going"} word={"Calculate the estimation of your travelling expenses and make inform decision"} />
    </div>
    <div className="carousel-item">
      {/* <Img src={"../../images/bg3.jpg"}  alt="..." /> */}
      <Card headText={"You have Many Options"}  word={"You can checkout prices of travels from Flights, Rails, Buses and Cars"} />
    </div>
    <div className="carousel-item">
     {/* <Img src={"../../images/bg2.jpg"}  alt="..." /> */}
     <Card headText={"Get Information about"} word={"You'll Get Recommendations about Hotels, Tourist centers tc"} />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
   )
}
const Input = ({placeholder, handleChange, value, name}) => (
<div className="form-group mx-sm-3 mb-2">
    <input 
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder} 
    />
</div>
)


const WhatWeDo = () => (
    <div className="our-offer">
        <h3>What We Offer</h3>
        <div className="offer-box-cont">
            <div className="top">
                <div className="offer-box offer-box-1">
                    <div className="icon">
                        <i className="fas fa-bus fa-4x"></i>
                    </div>
                    <div className="offer-box-body">
                        <h5>Booking</h5>
                        <p>You don not need to visit any park or garage, Book a tickket with us and let us deliver it to you</p>
                    </div>
                </div>
                <div className="offer-box offer-box-2">
                    <div className="icon">
                        <i className="fas fa-calculator fa-4x"></i>
                    </div>
                    <div className="offer-box-body">
                        <h5>Travel Expense Estimatation</h5>
                        <p>Calculate the estimation of your travelling expenses and make inform decisions </p>
                    </div>
                </div>
            </div>
            <div className="top">
                <div className="offer-box offer-box-3">
                    <div className="icon">
                        <i className="fas fa-globe fa-4x"></i>
                    </div>
                    <div className="offer-box-body">
                        <h5>Recommendations</h5>
                        <p>Get Recommendations of hotels, restaurant and Tourist attractions centers</p>
                    </div>
                </div>
                <div className="offer-box offer-box-4">
                    <div className="icon">
                        <i className="fas fa-plane fa-4x"></i>
                    </div>
                    <div className="offer-box-body">
                        <h5>Tour Guides</h5>
                        <p>Take a guide with you. We provide with you Tour guides to aid you on your journey . This provides maximum experience</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
)
const Li = ({fontType, type}) => (
    <li>
        <i className={fontType}></i> 
        <span>{type}</span>    
    </li>
)
const Industry = () => (
    <div className="industry">
        <div className="industry-box-1">
            <h4>Our Industry Coverage</h4>
            <p>We cover the following industry and have Partners/Providers in those ready tpo make your travel seamless</p>
            <ul>
                <Li fontType={"fas fa-plane"} type={"Flights"}  />
                <Li fontType={"fas fa-plane"} type={"Busses"}  />
                <Li fontType={"fas fa-plane"} type={"Car"}  />
                <Li fontType={"fas fa-plane"} type={"Rail"}  />
                <Li fontType={"fas fa-plane"} type={"Ferry"}  />
                <Li fontType={"fas fa-plane"} type={"Hotel Bookings"}  />
                <Li fontType={"fas fa-plane"} type={"Tour Guides"}  />
            </ul>
        </div>
        <div className="industry-box-2">
            <img src="https://res.cloudinary.com/kayode/image/upload/v1601754894/TransAll/annie-spratt-tG822f1XzT4-unsplash_c8x8rz.jpg" alt="Bus"/>
        </div>
    </div> 
)
const Home = (props) => {
    const dispatch = useDispatch()

    const [inputs, setInputs] = useState({
        origin: "",
        destination: ""
    })
    const {destination, origin} = inputs;
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            destination,
            origin
        }
        dispatch(findServices(data))
        setInputs({
            origin: "",
            destination: ""
        })
        props.history.push("/travel/info")
    }
    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    }
    return (
        <div>
            
            <div className="container-fluid home-banner">
                <div className="info-box">
                    <h1>Your Surest Way to Get Travel Information</h1>
                <Carousel />
                </div>
            <div id="try-it" className="getInfoContainer">
            <form onSubmit= {handleSubmit}>
            <h3 className="text-center">Get a Quote</h3> 
                <Input placeholder="Where are you Going?" handleChange={handleChange} value={destination} name="destination" />
                <Input placeholder="From Where?" handleChange={handleChange} value={origin} name="origin" />
                <button type="submit">Try It Out</button>
            </form>
        </div>
    )
            </div>
            <WhatWeDo />
            <Industry />
        </div>
    )
}

export default Home
