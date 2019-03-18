import React, { Component } from "react";
import axios from "axios";
import validator from "../validator";

export default class EditPassenger extends Component {
  state = {
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    loader: true,
    errors: {}
  };

  passengerId = () => {
    return parseInt(this.props.match.params.passengerId);
  };

  componentDidMount() {
    axios
      .get(`https://www.taurix.com/api/passengers/${this.passengerId()}`)
      .then(response => {
        this.setState({
          loader: false,
          FirstName: response.data.passenger.FirstName,
          LastName: response.data.passenger.LastName,
          EmailAddress: response.data.passenger.EmailAddress
        });
      });
  }

  handleChange = event => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let bodyData = new FormData();
    const { FirstName, LastName, EmailAddress } = this.state;
    const validation = validator(this.state);
    if (Object.keys(validation).length > 0) {
      this.setState({
        errors: {
          ...this.state.errors,
          ...validation
        }
      });
    } else {
      bodyData.set("FirstName", FirstName);
      bodyData.set("LastName", LastName);
      bodyData.set("EmailAddress", EmailAddress);
      axios({
        method: "post",
        url: `https://www.taurix.com/api/passengers/${this.passengerId()}`,
        data: bodyData,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      }).then(() => {
        this.props.history.push("/passengers");
      });
    }
  };

  render() {
    return (
      <div className="container mt-5">
        <h2 className="text-capitalize title-text col-md-12 mt-3 mb-5 text-center">
          edit passenger
        </h2>
        {this.state.loader ? (
          <i className="fa fa-spinner fa-spin fa-5x" />
        ) : (
          <div className="row">
            <div className="card card-body form col-md-4 mx-auto">
              <form className="">
                <div className="form-group">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="FirstName"
                    className="form-control"
                    placeholder="Enter First name"
                    value={this.state.FirstName}
                  />
                  {this.state.errors.FirstName && (
                    <span className="field-error d-flex justify-content-end">
                      {this.state.errors.FirstName}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    className="form-control"
                    name="LastName"
                    placeholder="Enter Last name"
                    value={this.state.LastName}
                  />
                  {this.state.errors.LastName && (
                    <span className="field-error d-flex justify-content-end">
                      {this.state.errors.LastName}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    onChange={this.handleChange}
                    name="EmailAddress"
                    placeholder="Enter email"
                    value={this.state.EmailAddress}
                  />
                  {this.state.errors.EmailAddress && (
                    <span className="field-error d-flex justify-content-end">
                      {this.state.errors.EmailAddress}
                    </span>
                  )}
                </div>
                <button
                  onClick={this.handleSubmit}
                  type="submit"
                  className="btn btn-sm form-control"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
