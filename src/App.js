import React, { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
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
import About from "./components/pages/about";
import Services from './components/pages/services';
import Contact from "./components/pages/contact";
import NotFound from "./components/layouts/page";
import ChangePassword from "./components/users/changePassword";
import UserOrders from "./components/users/UserOrders";
import Chat from './components/users/chat';

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
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/contactus" component={Contact} />
                <PrivateRoute
                  path="/payment"
                  component={Payment}
                  next={"payment"}
                />
                <PrivateRoute
                  path="/thanks"
                  component={Thanks}
                  next={"thanks"}
                />
                <Route path="/travel/info" component={DisplayResult} />
                <PrivateRoute
                  path="/users/dashboard"
                  component={Dashboard}
                  next={"users/dashboard"}
                />
                <PrivateRoute
                  path="/users/change-password"
                  component={ChangePassword}
                  next={"users/change-password"}
                />
                <PrivateRoute
                  path="/users/orders"
                  component={UserOrders}
                  next={"users/orders"}
                />
                <PrivateRoute
                  path="/users/chat"
                  component={Chat}
                  next={"users/chat"}
                />
                <Route component={NotFound} />
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