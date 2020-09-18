import React from "react"
import {Redirect} from "react-router-dom"
import {isLoggedIn} from "../helpers/utility"

const Dashboard = () => {

    if(!isLoggedIn()) return <Redirect to='/sign-in' />
    return (
        <div>
            <div className="container">
                <h1>You are logged In</h1>
            </div>
        </div>
    )
}

export default Dashboard
