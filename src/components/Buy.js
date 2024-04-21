import React from "react";
import { Link } from "react-router-dom";
export default function Buy() {
  return (
    <div className="buycontain">
      <div className="buydata">
        <form>
          <h1>Address</h1>
          <input type="text" placeholder="Full Name" />
          <br />
          <input type="text" placeholder="Mobile Number" />
          <br />
          {/* <input type="text" placeholder="Alternate Mobile Number" />
          <br /> */}
          <input type="text" placeholder="House No., Building Name" />
          <br />
          <input type="text" placeholder="Street Name, Area, Colony" />
          <br />
          <input type="text" placeholder="Landmark" />
          <br />
          <input type="text" placeholder="City,Pincode" />
          <br />
          <input type="text" placeholder="State" />
          <br />
          {/* <input type="text" placeholder="Pincode" />
          <br /> */}
          <Link to="/Payments">
            <button>Next</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
