import React from "react";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div className="topsign">
      <div className="signin">
        <h1>Sign In</h1>
        <form>
          <input type="username" placeholder="Enter Name" />
          <input type="password" placeholder="Enter Password" />
          <Link to="#">Forgot Password?</Link>
          <Link to="/SignUp">Dont have an account? Sign Up</Link>
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
}
