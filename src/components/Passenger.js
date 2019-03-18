import React, { Component } from "react";
import axios from "axios";

export default class Passenger extends Component {
  state = {
    passenger: [],
    loader: true
  };

  componentDidMount() {
    const passengerId = parseInt(this.props.match.params.passengerId);
    axios
      .get(`https://www.taurix.com/api/passengers/${passengerId}`)
      .then(response => {
        this.setState({
          passenger: response.data.passenger,
          loader: false
        });
      });
  }

  render() {
    const { passenger, loader } = this.state;
    return (
      <div className="container">
        <h2 className="title-text col-md-12 mt-5 mb-5 text-center">
          Passenger Detail
        </h2>
        {loader ? (
          <i className="fa fa-spinner fa-spin fa-5x" />
        ) : (
          <div className="row">
            <div className="col-md-4 mx-auto">
              <div className="card card-detail">
                <div className="card-body">
                  <p className="card-text">
                    First name:
                    <span> {passenger.FirstName}</span>
                  </p>
                  <br />
                  <p className="card-text">
                    Last name:
                    <span> {passenger.LastName}</span>
                  </p>
                  <br />
                  <p className="card-text">
                    Email:
                    <span> {passenger.EmailAddress}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
