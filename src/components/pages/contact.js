import React, { useState } from 'react';
import "../../styles/contact.css";
import { useDispatch } from 'react-redux';
import { createMessage } from './../../actions/messages';
import sendMessage from './../../actions/contact';
import { Redirect } from 'react-router-dom';

const Input = ({handleChange, placeholder, name }) => (
  <div className="form-group">
    <label htmlFor="">{placeholder}</label>
    <input type="text" onChange={handleChange} name={name} placeholder={placeholder} className="form-control" />
  </div>
);

const TextArea = ({handleChange}) => (
  <div className="form-group">
    <label htmlFor="">Message</label> 
    <textarea name="message" placeholder="Message" onChange={handleChange} className="form-control"></textarea>
  </div> 
)
const Contact = () => {
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    message: ""
  })
  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  }
  const {email, message, name} = inputs;
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
    // check if all fields are filled
    if (!email || !name || !message) {
      dispatch(createMessage({ notNull: "All fields are required" }));
    } else if (!emailRegex.test(email)) {
      dispatch(createMessage({ emailNotValid: "Email not Valid" }));
    } else {
      const data = {
        email,
        name,
        message
      }
      dispatch(sendMessage(data))
      console.log(data)
      setInputs({
        email: "",
        name: "",
        message: ""
      })
      return <Redirect to={"/"} />
    }
  }
  return (
    <div className="contact">
      <section className="contact-header">
        <h4>Contact Us</h4>
      </section>
      <section className="contact-body-cont">
        <div className="contact-body">
          <form onSubmit={handleSubmit}>
            <Input handleChange={handleChange} name="name" placeholder="Name" />
            <Input handleChange={handleChange} name="email" placeholder="Email" />
            <TextArea handleChange={handleChange} />
            <button  type="submit" className="btn btn-outline-primary">Send Message</button>
          </form>
          <article>
            <h5>Head Office</h5>
            <p>2675, Etim Eyang Cresent, Victoria Island, Lagos</p>
            <p><b>Phone:</b> 09072420769</p>
            <p><b>Email:</b> transAll95@yahoo.com </p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Contact;
