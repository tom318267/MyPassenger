import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

export const PassengerTable = ({
  passengers,
  loader,
  handleChange,
  handleSubmit,
  handleDelete,
  stateValue
}) => (
  <div>
    {loader ? (
      <i className="fa fa-spinner fa-spin fa-5x" />
    ) : (
      <div>
        {" "}
        <div className="container d-flex justify-content-center">
          <table className="table table-striped mb-5">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email Address</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {passengers.map(passenger => (
                <tr key={passenger.PassengerID}>
                  <th scope="row">{passenger.PassengerID}</th>
                  <td>{passenger.FirstName}</td>
                  <td>{passenger.LastName}</td>
                  <td>{passenger.EmailAddress}</td>
                  <td>
                    <Link to={`/passenger/${passenger.PassengerID}/edit`}>
                      <i className="fas fa-edit mr-3" />
                    </Link>
                    <i
                      className="fas fa-trash-alt text-red mr-3"
                      onClick={() => handleDelete(passenger.PassengerID)}
                    />

                    <Link to={`/passenger/${passenger.PassengerID}`}>
                      <i className="fas fa-external-link-alt" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          <button
            className="btn btn-sm add-form mx-auto"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Add passenger
          </button>
        </p>
        <div className="collapse mt-4" id="collapseExample">
          <div className="card card-body form col-md-4 mx-auto">
            <Form
              stateValue={stateValue}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    )}
  </div>
);

export default PassengerTable
