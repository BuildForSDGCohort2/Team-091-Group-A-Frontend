import React from "react";
import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./components/pages/home";
// import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
