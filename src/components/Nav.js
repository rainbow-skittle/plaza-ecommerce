import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSquareParking } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const handleSelectChange = (e) => {
    e.preventDefault();

    const selectedOption = e.target.value;
    if (selectedOption !== "") {
      window.location.href = selectedOption;
    }
  };
  return (
    <div className="k">
      <h1>
        <span>
          <FontAwesomeIcon icon={faSquareParking} />
        </span>
        <Link to="/">PLAZA</Link>
      </h1>
      <select className="category" onChange={handleSelectChange}>
        <option>Categories</option>
        <optgroup className="column">
          <option disabled>Skin Care</option>
          <option value="/Moisturizer">Moisturizer</option>
          <option value="/Cleanser">Cleanser</option>
          <option value="/Sunscreen">Sunscreen</option>
          <option value="/FaceSerum">Face serum</option>
        </optgroup>
        <optgroup className="column">
          <option disabled>Hair Care</option>
          <option value="/HairSerum">Hair serum</option>
          <option value="/Shampoo">Shampoo</option>
          <option value="/Conditioner">Conditioner</option>
          <option value="HairOil">Hair Oil</option>
          <option value="HairGel">Hair Gel</option>
        </optgroup>
      </select>

      <ul>
        <li className="searchInp">
          <input className="inp" placeholder="Enter for product" type="text" />
          <button className="searchBtn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </li>
        <li className="navbtns">
          <button>
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <Link to="/Profile">Profile</Link>
          </button>
        </li>
        <li className="navbtns">
          <button>
            <span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            <Link to="/Cart">Cart</Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
