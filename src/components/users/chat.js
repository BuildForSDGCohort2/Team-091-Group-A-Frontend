import React from "react";
import "../../styles/dashboard.css";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Chat = () => {
  const user = useSelector(state => state.auth.user);
  return (
    <div className="dashboard-cont">
      <div className="dashboard-sidebar bg-primary">
        <div className="avatar">
          <img src="https://via.placeholder.com/150/000000/FFFFFF" alt="avatar"/>
          <p>{user ? `${user.firstname} ${user.lastname}`: "" }</p>
        </div>
        <ul>
          <li>
            <NavLink to="/users/dashboard" className="nav-link" activeClassName="selected">
              <i className="fas fa-columns"></i>
              <span>Dashboard</span> 
            </NavLink>
          </li>
          <li>
            <NavLink to="/users/change-password" className="nav-link" activeClassName="selected">
              <i className="fas fa-unlock"></i>
              <span>Change Password</span> 
            </NavLink>
          </li>
          <li>
            <NavLink to="/users/orders"  className="nav-link" activeClassName="selected">
              <i className="fas fa-book"></i>
              {/* <i className="glyphicon glyphicon-shopping-cart"></i> */}
              <span>Orders</span>  
            </NavLink>
          </li>
          <li>
            <NavLink to="/users/chat"  className="nav-link" activeClassName="selected">
              {/* <i className="glyphicon glyphicon-envelope"></i> */}
              <i className="fas fa-comment"></i>
              <span>Chat with an Agent</span>  
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout"  className="nav-link" activeClassName="selected">
              <i className="fas fa-truck"></i>
              {/* <i className="glyphicon glyphicon-new-window"></i> */}
              <span>Logout</span>  
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="dashboard-mainbar">
        <div className="dashboard-mainbar-header">
          <h3>Chat</h3>
        </div>
      </div>
    </div>
  );
};

export default Chat;
