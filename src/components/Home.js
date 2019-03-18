import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container top">
      <h1 className="title-text text-center">Welcome to MyPassenger</h1>
      <h6 className="text-center list-pass mb-4">
        To view all passengers click the button below
      </h6>
      <div className="row">
        <div className="col-md-2 mx-auto">
          <Link to="/passengers">
          <button className="btn btn-md">Passengers</button>
          </Link>
        </div>
      </div>
    </div>
  )

}

export default Home
