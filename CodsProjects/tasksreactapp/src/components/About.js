import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Component</h1>

      <Link to={"/"}>
        <h1>HomePage</h1>
      </Link>
    </div>
  );
}

export default About;
