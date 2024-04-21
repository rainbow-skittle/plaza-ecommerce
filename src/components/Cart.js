import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart }) {
  return (
    <>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div className="cartcontainer">
            <div key={item.id} className="Cartdata">
              <img src={`images/${item.image}`} alt={item.title} />
              <div>
                <h3 className="cartTitle">{item.title}</h3>
                <p className="cartDesc">{item.description}</p>
                <p className="cartQuan">Quantity: {item.quantity}</p>
                <p className="cartPrice">
                  Total Price: {item.price * item.quantity}
                </p>
                <Link to="/Buy">
                  <button className="buybtn">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="emptyCart">
          <img src="images/emptycart.png" />
          <h1>Cart is Empty !!</h1>
        </div>
      )}
    </>
  );
}
