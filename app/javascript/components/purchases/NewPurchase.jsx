import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-lg-6 offset-lg-3">
                    <h1 className="font-weight-normal mb-5">
                        Add a new purchase to the database.
                    </h1>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>Purchase total</label>
                            <input
                                type="number"
                                name="total"
                                id="purchaseTotal"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setTotal)}
                            />
                            <br></br>
                            <label>Purchase Date</label>
                            <input
                                type="date"
                                name="purchaseDate"
                                id="purchaseDate"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setPurchaseDate)}
                            />
                            <label>Example multiple select</label>
                            <select className="form-control" defaultValue={'DEFAULT'} onChange={(event) => onChange(event, setStore)}>
                                <option value="DEFAULT" disabled>Choose a store</option>
                                {storeOptions}
                            </select>
                        </div>
                        <button type="submit" className="btn custom-button mt-3">
                            Create purchase
                        </button>
                        <Link to="/purchases" className="btn btn-link mt-3">
                            Back to purchases
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewPurchase;