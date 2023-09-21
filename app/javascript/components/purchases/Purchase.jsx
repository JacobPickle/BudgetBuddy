import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Purchase = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [purchase, setPurchase] = useState([]);

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
            .catch(() => navigate("/purchases"));
    }, [params.id]);

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
  
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-2">
                        <p>{purchase.purchase_date}</p>
                        <p>{purchase.total}</p>
                        <p>{purchase.store_id}</p>
                        <button type="button" className="btn btn-danger" onClick={deletePurchase}>
                            Delete Purchase
                        </button>
                    </div>
                </div>
                <Link to="/purchases" className="btn btn-link">
                    Back to purchases
                </Link>
            </div>
        </div>
    );
};
  
  export default Purchase;