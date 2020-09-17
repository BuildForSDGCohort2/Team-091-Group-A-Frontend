import React from "react"
import "../../styles/home.css"

const Home = () => {
    return (
        <div>
            <div className="container-fluid home-banner">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-12 col-sm-8 card bg-transparent mt-5">
                        <div className="row mt-4 mb-4">
                            <div className="col-12 col-sm-4 input-group pr-0">
                                <input type="search" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-3 input-group pr-0">
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-3 input-group pr-0">
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-2 pr-0">
                                <button className="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    )
}

export default Home
