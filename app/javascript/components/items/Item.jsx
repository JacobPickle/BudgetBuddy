import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Item = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const url = `/api/v1/items/show/${params.id}`;
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
            .then((response) => setItem(response))
            .catch(() => navigate("/items"));
    }, [params.id]);

    const deleteItem = () => {
        const url = `/api/v1/items/destroy/${params.id}`;
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
        .then(() => navigate("/items"))
        .catch((error) => console.log(error.message));
    };
  
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-2">
                        <p>{item.name}</p>
                        <button type="button" className="btn btn-danger" onClick={deleteItem}>
                            Delete Item
                        </button>
                    </div>
                </div>
                <Link to="/items" className="btn btn-link">
                    Back to items
                </Link>
            </div>
        </div>
    );
};
  
  export default Item;