import React from "react";
import { Link } from "react-router-dom";
import Allcatdata from "../Allcatdata";
export default function Allcat(props) {
  if (Allcatdata.some((item) => item.category == props.category)) {
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
  } else {
    return null;
  }
}
