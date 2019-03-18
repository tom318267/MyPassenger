import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
        <div className="container top text-center">
          <h1 className="title-text">Welcome to MyPassenger</h1>
          <h6 className="list-pass mb-4">To view all passengers click the button below</h6>
          <Link to="/passengers">
            <button className="btn btn-md">Passengers</button>
          </Link>
        </div>
  )

}

export default Home
