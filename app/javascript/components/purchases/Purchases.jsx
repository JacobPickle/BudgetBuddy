import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import PurchaseList from "./PurchaseList";

const Purchases = () => {    
    return (
        <>
            <Sidebar></Sidebar>
            <div className="main">
                <main>
                    <h3>Purchases</h3>
                    <PurchaseList></PurchaseList>
                    <div>
                        <Link to="/purchase" className="btn btn-primary rounded-pill">
                            Log New Purchase
                        </Link>
                    </div>
                    <div>
                        <Link to="/store" className="btn  btn-secondary rounded-pill">
                            Create New Store
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
};
  
export default Purchases;