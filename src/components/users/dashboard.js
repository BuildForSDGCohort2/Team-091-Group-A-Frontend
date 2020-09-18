import React from "react"
import Navbar from "../layouts/navbar"
import Footer from "../layouts/footer"
import {Redirect} from "react-router-dom"
import {isLoggedIn} from "../helpers/utility"


const Dashboard = () => {

    if(!isLoggedIn()) return <Redirect to='/sign-in' />
    return (
        <div>
            <Navbar />
            <div className="container spaced">
                <h1>You are logged In</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
