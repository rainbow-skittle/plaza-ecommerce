import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

export default function Product(props) {
  const [quantity, setQuantity] = useState(1); // State for quantity

  const discount = Math.round(
    ((props.orprice - props.price) / props.orprice) * 100
  );

  const onClickHandler = () => {
    const item = {
      key: props.id,
      image: props.image,
      title: props.title,
      description: props.description,
      price: props.price,
      orprice: props.orprice,
      category: props.category,
      quantity: quantity, // Set quantity based on selected option
    };
    props.handler(item);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value)); // Update quantity state based on selected option
  };

  return (
    <div className="prodinfo">
      <img src={`images/${props.image}`} alt={props.title} />
      <div>
        <p className="title">{props.title}</p>
        <p className="desc">{props.description}</p>
        <p className="timedeal">Limited time deal</p>
        <div className="prices">
          <p className="disprice">save {discount}%</p>
          <p className="topprice">
            <span>
              <FontAwesomeIcon icon={faIndianRupeeSign} />
            </span>
            {props.price}
          </p>
        </div>
        <p className="orprice">
          <span>
            <FontAwesomeIcon icon={faIndianRupeeSign} />
          </span>
          {props.orprice}
        </p>
        <label>Quantity: </label>
        <select value={quantity} onChange={handleQuantityChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
        <br />
        <br />
        <Link to="/Cart">
          <button className="cartbtn" onClick={onClickHandler}>
            Add to Cart
          </button>
        </Link>

        <Link to="/Buy">
          <button className="buybtn">Buy Now</button>
        </Link>
      </div>
    </div>
  );
}
