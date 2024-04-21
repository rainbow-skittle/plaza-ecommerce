import React from "react";
import { Link } from "react-router-dom";
export default function Topbrand(props) {
  return (
    <div className="topcontent">
      <Link to={`/${props.id}`}>
        <img src={`images/${props.image}`} />
      </Link>
      <p className="toptitle">{props.title}</p>
      <div className="pricelist">
        <p className="topprice">Rs.{props.price}</p>
        <p className="orprice">Rs.{props.orprice}</p>
      </div>
    </div>
  );
}
