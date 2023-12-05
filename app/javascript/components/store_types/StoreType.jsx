import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";

const StoreType = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [store, setStore] = useState([]);

    useEffect(() => {
        const url = `/api/v1/store_types/show/${params.id}`;
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
            .then((response) => setStore(response))
            .catch(() => navigate("/store_types"));
    }, [params.id]);

    const deleteStore = () => {
        const url = `/api/v1/store_types/destroy/${params.id}`;
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
        .then(() => navigate("/store_types"))
        .catch((error) => console.log(error.message));
    };
  
    return (
        <div>
            <Sidebar></Sidebar>
            <div className="main">
                <div>
                    <div>
                        <p>Store Type: {store.name}</p>
                        <button type="button" className="btn btn-danger rounded-pill" onClick={deleteStore}>
                            Delete Store Type
                        </button>
                    </div>
                </div>
                <Link to="/store_types" className="btn btn-secondary rounded-pill">
                    Back to store types
                </Link>
            </div>
        </div>
    );
};
  
  export default StoreType;