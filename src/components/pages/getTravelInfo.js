import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findServices } from "./../../actions/services";

const Input = ({ placeholder, handleChange, value, name }) => (
  <div className="form-group mx-sm-3 mb-2">
    <input
      className="form-control"
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  </div>
);

const GetTravelInfo = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    origin: "",
    destination: "",
  });
  const { destination, origin } = inputs;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      destination,
      origin,
    };
    dispatch(findServices(data));
    console.log(data);
  };
  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  return (
    <div className="get-Info-Form">
      <form className="form-inline" onSubmit={handleSubmit}>
        <Input
          placeholder="Where are you Going?"
          handleChange={handleChange}
          value={destination}
          name="destination"
        />
        <Input
          placeholder="From Where?"
          handleChange={handleChange}
          value={origin}
          name="origin"
        />
        <button type="submit" className="btn btn-primary">
          Find
        </button>
      </form>
    </div>
  );
};

export default GetTravelInfo;
