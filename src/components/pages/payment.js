import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment'
import { Redirect } from 'react-router-dom';
import { makePayment } from '../../actions/services';
import { createMessage } from './../../actions/messages';
import { useFlutterwave } from 'react-flutterwave';

const formatMoney = (money) => money.toLocaleString('en-US', {
  style: 'currency',
  currency: 'NGN',
});
const Payment = () => {
  const {order, services} = useSelector(state => state.services.orderDetails)
  const key = useSelector((state) => state.services.key);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const config = {
    public_key: key,
    tx_ref: Date.now(),
    amount: order ? order.amount : "",
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: user  ? user.email : "gabkay007@gmail.com",
      phonenumber: '08102909304',
      name: `${user.lastname} ${user.firstname}`,
    },
    customizations: {
      title: "Transall Ticket",
      description: 'Payment for ticket',
      logo: 'https://res.cloudinary.com/kayode/image/upload/v1601716486/TransAll/tlogo_rmuzjy.png',
    },
  };
  const handleFlutterPayment = useFlutterwave(config);
  
  return (
    <div className="card payment-card">
      <div className="card-header">
        <h1 className="card=title">Invoice Summary</h1>
      </div>
      <div className="card-body">
        <h5>Total Amount: <span className="order-amount">{formatMoney(order ? order.amount : "")}</span></h5> 
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Provider Name</th>
              <th>Departure Date</th>
              <th>From</th>
              <th>Destination</th>
              <th>Price(₦)</th>
            </tr>
          </thead>
          <tbody>
          {
            services ? services.map(service => (
              <tr key={service._id}>
                <td>{service.provider.serviceProvider}</td>
                <td>{moment(order ? order.dateOfOrder :  "").format("L")}</td>
                <td>{service.origin}</td>
                <td>{service.destination}</td>
                <td>{service.price} </td>
              </tr>
            )) : <tr></tr>
          }
          </tbody>
        </table>
      </div>
      <div className="card-footer">
        <button
        className="btn btn-lg btn-outline-primary"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              dispatch(makePayment(order._id));
              return <Redirect to="/thanks" />;
            },
            onClose: () => {
              createMessage({paymentClose: "Payment platform Closed"})
            },
          });
        }}
      >
        Pay With Flutterwave
      </button>
      </div>
    </div>
  )
}

export default Payment;
