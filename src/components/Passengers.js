import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import { PassengerTable } from "./PassengerTable";
import validator from "../validator";

class Passengers extends Component {
  state = {
    passengers: [],
    passenger: [],
    loader: true,
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    errors: {}
  };

  componentDidMount() {
    axios
      .get("https://www.taurix.com/api/passengers")
      .then(response => {
        this.setState({
          passengers: response.data.passengers,
          loader: false
        });
      })
      .catch(error => {
        console.log(error);
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
    const { FirstName, LastName, EmailAddress, passengers } = this.state;
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
        url: "https://www.taurix.com/api/passengers",
        data: bodyData,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      }).then(response => {
        this.setState(
          {
            passengers: [...passengers, response.data.passenger]
          },
          () => {
            this.setState({
              FirstName: "",
              LastName: "",
              EmailAddress: "",
              errors: {}
            });
          }
        );
      });
    }
  };

  handleDelete = id => {
    swal({
      title: "Are you sure you want to delete this passenger?",
      icon: "warning",
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        axios.delete(`https://www.taurix.com/api/passengers/${id}`).then(() => {
          const newPassengers = this.state.passengers.filter(
            passenger => passenger.PassengerID !== id
          );
          this.setState({
            passengers: newPassengers
          });
          swal("Deleted!", "Passenger deleted successfully", "success");
        });
      }
    });
  };

  render() {
    const { passengers, loader } = this.state;
    return (
      <div className="container">
        <h2 className="title-text col-md-12 mt-5 mb-5 text-center">
          Passengers List
        </h2>
        <PassengerTable
          stateValue={this.state}
          passengers={passengers}
          loader={loader}
          className="col-md-4 mx-auto"
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Passengers
