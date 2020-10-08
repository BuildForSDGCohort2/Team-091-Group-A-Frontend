import DatePicker from "react-datepicker";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GetTravelInfo from './getTravelInfo';
import Modal from './../layouts/modal';

import "../../styles/getInfo.css"
import "react-datepicker/dist/react-datepicker.css";
import { getOrderDetails } from "../../actions/services";

const getTimeDuration = (time) => {
  if (time < 1) {
    return `${60 * time} Minutes`
  } else {
    return `${time}hour`
  }
}
const getTourImg = (type) => {
  switch (type) {
    case "tourGuide":
      return "https://res.cloudinary.com/kayode/image/upload/v1601925493/TransAll/29ITINERARIES1-articleLarge_clouyh.jpg"
    case "restaurant":
      return "https://res.cloudinary.com/kayode/image/upload/v1601925819/TransAll/main-restaurant_cplldy.jpg"
    case "tourism":
      return "https://res.cloudinary.com/kayode/image/upload/v1601925642/TransAll/turisms_2_iirlpw.jpg"
    case "hotel":
      return "https://res.cloudinary.com/kayode/image/upload/v1601925450/TransAll/1407953244000-177513283_uk8prw.jpg"
    default:
      break;
  }
}
const Recommendation = ({searchData}) => {
  const { recommendations } = searchData;
  return (
    <div className="table-container">
      <h4>Recommendations</h4>
      <div className="row">
        {
          recommendations ? recommendations.map(item => (
            <div className="card" key={item._id}>
              <img className="card-img-top" src={getTourImg(item.type)} alt="Card" />
              <div className="card-body">
                <h6 className="card-title">{item.name}</h6>
                <p className="card-text">{item.address}</p>
                <a href="/" className="btn btn-primary">Check Website</a>
              </div>
            </div>
          )): "No Recommendation Yet" }
      </div>
    </div>
  )
}
const DisplayData = (props) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false) 
  const [serviceId, setServiceId] = useState("") 
  const [startDate, setStartDate] = useState(new Date());
  const {origin, destination} = props.searchParams;
  const {services} = props.searchData;

  let getFlightData;
  let getRailData;
  let getBusData;
  let getCarData;
  if (services) {
    getFlightData = services.filter(service => service.provider.serviceType === "flight");
    getRailData = services.filter(service => service.provider.serviceType === "rail");
    getBusData = services.filter(service => service.provider.serviceType === "bus");
    getCarData = services.filter(service => service.provider.serviceType === "car");
  }
  const ShowDetail = () => {
    let service;
    if(services) {
      service = services.find(item => item._id === serviceId)
    }
    return (
      <div>
        <div className="card-header">
          <h5 className="card-title">Provider: {service ? service.provider.serviceProvider: ""}</h5> 
        </div>
        <div className="card-body">
          <p>Price: ₦{service ? service.price : ""}</p> 
          <p>Duration: {getTimeDuration(service ? service.estimateTimeOfArrival : 0)}</p> 
        </div>
      </div>
    )
  }
  const showModal = (e) => {
    setServiceId(e.target.id)
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  const handleInvoice = () => {
    const invoiceData = {
      dateOfOrder: startDate,
      services: [
        {
          id: serviceId
        }
      ]
    }
    dispatch(getOrderDetails(invoiceData))
    props.history.push("/payment")
  }
  return (
    <div className="get-info">
      <div className="header">
        <h2>Information About Travels from {origin} to {destination}  </h2>
      </div>
      <Modal show={show} handleClose={hideModal}>
          <div className="card col-6 modal-card">
              <ShowDetail />
              <div className="card-footer">
                <p>Please Select the Date you are Travelling </p>
              <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
              </div>
            <button onClick={handleInvoice} className="btn btn-outline-success">Make Payment</button>
          </div>
          
        </Modal>
    { services ? (
    <>
    <div className="table-responsive table-container">
      <h4>Flight Schedule</h4>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Provider</th>
            <th>Price (₦)</th>
            <th>Availabilty</th>
            <th>Total Duration</th>
          </tr>
        </thead>
        <tbody>
          {
            getFlightData ? getFlightData.map(service => (
              <tr key={service._id} onClick={showModal}>
                <td>{service.provider.serviceProvider}</td>
                <td>{service.price}</td>
                <td>{service.timeOfDeparture}</td>
                <td>{getTimeDuration(service.estimateTimeOfArrival)}</td>
                <td>
                  <button type="button" id={service._id} onClick={() => showModal} className="btn btn-outline-primary">
                    Make Booking
                  </button>
                </td>
              </tr>
              )) : <tr><td> Sorry No Service Provider For that Location</td></tr>
          }
        </tbody>
      </table>
    </div>
    <div className="table-responsive table-container">
      <h4>Rail Schedule</h4>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Provider</th>
            <th>Price (₦)</th>
            <th>Availabilty</th>
            <th>Total Duration</th>
          </tr>
        </thead>
        <tbody>
          {
            getRailData ? getRailData.map(service => (
              <tr key={service._id} onClick={showModal}>
                <td>{service.provider.serviceProvider}</td>
                <td>{service.price}</td>
                <td>{service.timeOfDeparture}</td>
                <td>{getTimeDuration(service.estimateTimeOfArrival)}</td>
                <td>
                  <button type="button" id={service._id} onClick={() => showModal} className="btn btn-outline-primary">
                    Make Booking
                  </button>
                </td>
              </tr>
              )) : <tr><td> Sorry No Service Provider For that Location</td></tr>
          }
        </tbody>
      </table>
    </div>
    <div className="table-responsive table-container">
      <h4>Bus Schedule</h4>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Provider</th>
            <th>Price (₦)</th>
            <th>Availabilty</th>
            <th>Total Duration</th>
          </tr>
        </thead>
        <tbody>
          {
            getBusData ? getBusData.map(service => (
              <tr key={service._id} onClick={showModal}>
                <td>{service.provider.serviceProvider}</td>
                <td>{service.price}</td>
                <td>{service.timeOfDeparture}</td>
                <td>{getTimeDuration(service.estimateTimeOfArrival)}</td>
                <td>
                  <button type="button" id={service._id} onClick={() => showModal} className="btn btn-outline-primary">
                    Make Booking
                  </button>
                </td>
              </tr>
              )) : <tr><td> Sorry No Service Provider For that Location</td></tr>
          }
        </tbody>
      </table>
    </div>
    <div className="table-responsive table-container">
      <h4>Car Schedule</h4>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Provider</th>
            <th>Price (₦)</th>
            <th>Availabilty</th>
            <th>Total Duration</th>
          </tr>
        </thead>
        <tbody>
          {
            getCarData ? getCarData.map(service => (
              <tr key={service._id} onClick={showModal}>
                <td>{service.provider.serviceProvider}</td>
                <td>{service.price}</td>
                <td>{service.timeOfDeparture}</td>
                <td>{getTimeDuration(service.estimateTimeOfArrival)}</td>
                <td>
                  <button type="button" id={service._id} onClick={() => showModal} className="btn btn-outline-primary">
                    Make Booking
                  </button>
                </td>
              </tr>
              )) : <tr><td> Sorry No Service Provider For that Location</td></tr>
          }
        </tbody>
      </table>
    </div>
    </>) 
    : <h4 className="text-danger text-center">Sorry, We do not have Service Provider yet for the location</h4>}
    
    
      <Recommendation searchData={props.searchData} />
    </div>
  )
}

const DisplayResult = (props) => {
  const searchData = useSelector((state) => state.services.searchData);
  const searchParams = useSelector((state) => state.services.searchParams);
  return (
    <div>
      <GetTravelInfo />
      {
        searchData ? <DisplayData searchData={searchData} searchParams={searchParams} {...props} /> : <h3>Sorry No Information Yet </h3>
      }
      
    </div>
  )
}

export default DisplayResult;
