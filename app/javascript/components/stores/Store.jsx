import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";

const Store = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [store, setStore] = useState([]);

    useEffect(() => {
        const url = `/api/v1/stores/show/${params.id}`;
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
            .catch(() => navigate("/stores"));
    }, [params.id]);

    const deleteStore = () => {
        const url = `/api/v1/stores/destroy/${params.id}`;
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
        .then(() => navigate("/stores"))
        .catch((error) => console.log(error.message));
    };
  
    return (
        <div>
            <Sidebar></Sidebar>
            <div className="main">
                <div>
                    <div>
                        <p>Store Name: {store.name}</p>
                        <button type="button" className="btn btn-danger" onClick={deleteStore}>
                            Delete Store
                        </button>
                    </div>
                </div>
                <Link to="/stores" className="btn">
                    Back to stores
                </Link>
            </div>
        </div>
    );
};
  
  export default Store;