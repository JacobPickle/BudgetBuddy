import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stores from "../components/stores/Stores";
import Store from "../components/stores/Store";
import NewStore from "../components/stores/NewStore";
import Purchases from "../components/purchases/Purchases";
import Purchase from "../components/purchases/Purchase";
import NewPurchase from "../components/purchases/NewPurchase";
import Items from "../components/items/Items";
import Item from "../components/items/Item";
import Home from "../components/Home";
import About from "../components/About";
import Resume from "../components/Resume";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Resume" element={<Resume />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/store/:id" element={<Store />} />
      <Route path="/store" element={<NewStore />} />
      <Route path="/purchases" element={<Purchases />} />
      <Route path="/purchase/:id" element={<Purchase />} />
      <Route path="/purchase" element={<NewPurchase />} />
      <Route path="/items" element={<Items />} />
      <Route path="/item/:id" element={<Item />} />
    </Routes>
  </Router>
);