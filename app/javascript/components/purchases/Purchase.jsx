import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";

const Purchase = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [purchase, setPurchase] = useState([]);
    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = `/api/v1/purchases/show/${params.id}`;
        fetch(url)
            .then((response) => {
                if (response.ok) 
                {
                    return response.json();
                }
                else 
                {
                    throw new Error("Network response was not ok.");
                }
                
            })
            .then((response) => setPurchase(response))
            .then(
                fetch(`/api/v1/items/show_by_purchase/${params.id}`)
                    .then((response) => {
                        if (response.ok) 
                        {
                            return response.json();
                        }
                        else 
                        {
                            throw new Error("Network response was not ok.");
                        }
                        
                    })
                    .then((response) => {
                        setItems(response)
                    })
                    .catch(() => navigate("/purchases"))
            )
            .catch(() => navigate("/purchases"));
    }, [params.id]);

    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        const url = "/api/v1/items/create";

        const purchase_id = params.id;
    
        const body = {
            name,
            price,
            purchase_id
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
        .then(window.location.reload(false))
        .catch((error) => console.log(error.message));
    };

    const deletePurchase = () => {
        const url = `/api/v1/purchases/destroy/${params.id}`;
        const token = document.querySelector('meta[name="csrf-token"]').content;
    
        fetch(url, {
            method: "DELETE",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            if (response.ok) {
                return;
            }
            throw new Error("Network response was not ok.");
        })
        .then(() => navigate("/purchases"))
        .catch((error) => console.log(error.message));
    };

    const itemRows = items.map((item, index) => (
        <tr key={index}>
            <td>
                {item.name}
            </td>
            <td>
                {item.price}
            </td>
        </tr>
   ));

    
  
    return (
        <div>
            <Sidebar></Sidebar>
            <div className="main">
                <div>
                    <div>
                        <h4>Purchase</h4>
                        <p><label>Date: </label> {purchase.purchase_date}</p>
                        <p><label>Total: </label> ${purchase.total}</p>
                        <p><label>Store ID: </label> {purchase.store_id}</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>{itemRows}</tbody>
                        </table>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <h5>Add Item: </h5>
                                <label>Name: </label>
                                <input
                                    type="text"
                                    name="itemName"
                                    id="itemName"
                                    className="form-control"
                                    required
                                    onChange={(event) => onChange(event, setName)}
                                />
                                <label>Price: </label>
                                <input
                                    type="number"
                                    name="itemPrice"
                                    id="itemPrice"
                                    className="form-control"
                                    required
                                    onChange={(event) => onChange(event, setPrice)}
                                />
                            </div>
                            <button type="submit" className="btn">
                                Add item
                            </button>
                        </form>
                        <Link to="/purchases" className="btn">
                            Back to purchases
                        </Link>
                        <br></br>
                        <button type="button" className="btn btn-danger" onClick={deletePurchase}>
                            Delete Purchase
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
  export default Purchase;