import React from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="topsign">
      <div className="signin">
        <h1>Sign Up</h1>
        <form>
          <input type="username" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <input type="password" placeholder="Confirm Password" />
          <Link to="/Profile">Already have an Account? Sign In</Link>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
