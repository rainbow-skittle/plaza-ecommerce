import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Topbrand from "./components/Topbrand";
import Topbranddata from "./Topbranddata";
import Allcatdata from "./Allcatdata";
import Allcat from "./components/Allcat";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import Allcatban from "./components/Allcatban";
import Product from "./components/Product";
import Buy from "./components/Buy";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import css from "./App.css";

export default function App() {
  const TopBrand = Topbranddata.map((item) => (
    <Topbrand key={item.id} {...item} />
  ));

  const ComponentsNames = function (categoryname) {
    return Allcatdata.filter((x) => x.category === categoryname).map((x) => (
      <Allcat key={x.id} category={categoryname} {...x} />
    ));
  };

  const comproutes = Allcatdata.map((category) => {
    return (
      <Route
        key={category.id}
        path={`/${category.category}`}
        element={
          <>
            <Allcatban category={category.category} />
            <section className="topbrand">
              {ComponentsNames(category.category)}
            </section>
          </>
        }
      />
    );
  });
  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(item);
  };

  const Productinfo = function (id) {
    return Allcatdata.filter((x) => x.id == id).map((x) => {
      return <Product key={id} image={x.image} {...x} handler={addToCart} />;
    });
  };

  const ProductRoutes = Allcatdata.map((t) => {
    return <Route path={`/${t.id}`} element={Productinfo(t.id)} />;
  });

  const [cart, setCart] = React.useState([]);

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <h2 className="tophead">Top Brands</h2>
                <section className="topbrand">{TopBrand}</section>
              </>
            }
          />
          {comproutes}

          <Route path="/profile" element={<Profile />} />
          <Route path="/SignUp" element={<SignUp />} />
          {ProductRoutes}
          <Route path="/Buy" element={<Buy />} />
          <Route path="/Cart" element={<Cart cart={cart} />} />
          <Route path="/Payments" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
