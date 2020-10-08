/* eslint-disable complexity */
/* eslint-disable max-statements */
/* eslint-disable sort-imports */
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';


class Alerts extends Component {
  static propTypes = {
    alert: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.error){
            alert.error(`${error.msg.error}`);
          }
      if (error.msg) {
        if (error.msg.message) {
            alert.error(`Message: ${error.msg.message}`);
          } else {
            alert.error(error.msg);
          }
      }
    }
    if (message !== prevProps.message) {
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
      if (message.notNull) alert.error(message.notNull);
      if (message.emailNotValid) alert.error(message.emailNotValid);
      if (message.paymentSuccess) alert.success(message.paymentSuccess);
      if (message.paymentClose) alert.info(message.paymentClose);
      if (message.paymentError) alert.error(message.paymentError);
    }
  }

  render() {
    return (
      <Fragment />
    );
  }
}
const MapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages
});
export default connect(MapStateToProps)(withAlert()(Alerts));
