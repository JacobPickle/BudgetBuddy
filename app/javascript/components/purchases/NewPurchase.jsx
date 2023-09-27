import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

const NewPurchase = () => {
    const navigate = useNavigate();
    const [purchase_date, setPurchaseDate] = useState("");
    const [total, setTotal] = useState("");
    const [store_id, setStore] = useState("");
    const [stores, setStores] = useState("");

    useEffect(() => {
        const url = "/api/v1/stores/index";
        fetch(url)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then((res) => setStores(res))
          .catch(() => navigate("/"));
    }, []);

    const storeOptions = stores.length > 0 ? stores.map((store, index) => (
        <option key={index} value={store.id}>{store.name}</option>
    )) : <option></option>;
    
    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        const url = "/api/v1/purchases/create";
    
        const body = {
            total,
            purchase_date,
            store_id
        };
    
        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then((response) => navigate(`/purchase/${response.id}`))
        .catch((error) => console.log(error.message));
    };

    return (
        <div>
            <Sidebar></Sidebar>
            <div className="main">
                <div>
                    <h3>
                        Log a new purchase.
                    </h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>Purchase total</label>
                            <input
                                type="number"
                                step='0.01'
                                name="total"
                                id="purchaseTotal"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setTotal)}
                            />
                            <label>Purchase Date</label>
                            <input
                                type="date"
                                name="purchaseDate"
                                id="purchaseDate"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setPurchaseDate)}
                            />
                            <label>Store</label>
                            <select className="form-control" defaultValue={'DEFAULT'} onChange={(event) => onChange(event, setStore)}>
                                <option value="DEFAULT" disabled>Choose a store</option>
                                {storeOptions}
                            </select>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary rounded-pill">
                                Log purchase
                            </button>
                        </div>
                        <div>
                            <Link to="/purchases" className="btn btn-secondary rounded-pill">
                                Back to purchases
                            </Link>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewPurchase;