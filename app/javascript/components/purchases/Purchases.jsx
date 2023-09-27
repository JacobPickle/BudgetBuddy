import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

const Purchases = () => {
    const navigate = useNavigate();
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const url = "/api/v1/purchases/index";
        fetch(url)
          .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
          })
          .then((res) => setPurchases(res))
          .catch(() => navigate("/"));
    }, []);
    
    const allPurchases = purchases.map((purchase, index) => (
        <div key={index}>
            <Link to={`/purchase/${purchase.id}`} className="list-group-item list-group-item-action">
                {purchase.purchase_date}
            </Link>
        </div>
    ));
    const noPurchase = (
        <div>
            <h4>
                No purchases yet. Why not <Link to="/purchase">create one</Link>
            </h4>
        </div>
    );
    
    return (
        <>
            <Sidebar></Sidebar>
            <div className="main">
                <main>
                    <h3>Purchases</h3>
                    <div className="list-group">
                        {purchases.length > 0 ? allPurchases : noPurchase}
                    </div>
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