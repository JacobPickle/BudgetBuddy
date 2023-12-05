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
import Settings from "../components/Settings";
import StoreTypes from "../components/store_types/StoreTypes"
import StoreType from "../components/store_types/StoreType"
import NewStoreType from "../components/store_types/NewStoreType"

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Resume" element={<Resume />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/store/:id" element={<Store />} />
      <Route path="/store" element={<NewStore />} />
      <Route path="/store_types" element={<StoreTypes />} />
      <Route path="/store_type/:id" element={<StoreType />} />
      <Route path="/store_type" element={<NewStoreType />} />
      <Route path="/purchases" element={<Purchases />} />
      <Route path="/purchase/:id" element={<Purchase />} />
      <Route path="/purchase" element={<NewPurchase />} />
      <Route path="/items" element={<Items />} />
      <Route path="/item/:id" element={<Item />} />
      <Route path="/settings/" element={<Settings />} />
    </Routes>
  </Router>
);