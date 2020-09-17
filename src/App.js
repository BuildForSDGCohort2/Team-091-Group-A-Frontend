import React from "react";
import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./components/pages/home";
import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";
import Signin from "./components/pages/signin"
import Signup from "./components/pages/signup"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={Signin} />
          <Route path="/sign-up" component={Signup} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
