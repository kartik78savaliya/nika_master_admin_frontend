import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Customers from "./pages/customers";
import Inventory from "./pages/Inventory";
import Products from "./pages/Products";
import Payment from "./pages/Payment";
// import Location from "./pages/Location";
import Branch_Details from "./pages/Branch_Details";
import Branch_Orders from "./pages/Branch_Orders";
import Branch_Stock from "./pages/Branch_Stock";
import Counter_Details from "./pages/Counter_Details";
import Counter_Orders from "./pages/Counter_Orders";
import Offline_Sell from "./pages/Offline_Sell";
import Online_Orders from "./pages/Online_Orders";
import Party from "./pages/Party";
import Purchase from "./pages/Purchase";
import Request from "./pages/Request";
import Return from "./pages/Return";
import Login from "./pages/Login";
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home cookies={cookies} />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Payment" element={<Payment />} />
          {/* <Route path="/Location" element={<Location />} /> */}
          <Route path="/Branch_Details" element={<Branch_Details />} />
          <Route path="/Branch_Orders" element={<Branch_Orders />} />
          <Route path="/Branch_Stock" element={<Branch_Stock />} />
          <Route path="/Counter_Details" element={<Counter_Details />} />
          <Route path="/Counter_Orders" element={<Counter_Orders />} />
          <Route path="/Offline_Sell" element={<Offline_Sell />} />
          <Route path="/Online_Orders" element={<Online_Orders />} />
          <Route path="/Party" element={<Party />} />
          <Route path="/Purchase" element={<Purchase />} />
          <Route path="/Request" element={<Request />} />
          <Route path="/Return" element={<Return />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
