import React, { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
import Hotels from "./components/pages/hotels";
import Flights from "./components/pages/flights";
import Trains from "./components/pages/trains";
import Cars from "./components/pages/cars";
import Tours from "./components/pages/tours";
import Attractions from "./components/pages/attractions";
import Dashboard from "./components/users/dashboard";
import store from "./store";
import Alerts from "./components/layouts/Alerts";
import PrivateRoute from "./components/layouts/PrivateRoute";
import { loadUser } from "./actions/auth";
import Navbar from "./components/layouts/navbar";
import DisplayResult from "./components/pages/displayResult";
import Footer from "./components/layouts/footer";
import Test from "./components/layouts/Test";
import Payment from "./components/pages/payment";
import Thanks from "./components/pages/thanks";

const alertOptions = {
  position: "top center",
  timeout: 4000,
};

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <BrowserRouter>
          <Fragment>
            <div className="App">
              <Navbar />
              <Alerts />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/test" component={Test} />
                <Route path="/sign-in" component={Signin} />
                <Route path="/sign-up" component={Signup} />
                <Route path="/hotels" component={Hotels} />
                <Route path="/flights" component={Flights} />
                <Route path="/trains" component={Trains} />
                <Route path="/cars" component={Cars} />
                <PrivateRoute
                  path="/payment"
                  component={Payment}
                  next={"payment"}
                />
                <Route path="/tours" component={Tours} />
                <PrivateRoute
                  path="/thanks"
                  component={Thanks}
                  next={"thanks"}
                />
                <Route path="/attractions" component={Attractions} />
                <Route path="/travel/info" component={DisplayResult} />
                <PrivateRoute
                  path="/users/dashboard"
                  component={Dashboard}
                  next={"users/dashboard"}
                />
              </Switch>
              <Footer />
            </div>
          </Fragment>
        </BrowserRouter>
      </AlertProvider>
    </Provider>
  );
}

export default App;
