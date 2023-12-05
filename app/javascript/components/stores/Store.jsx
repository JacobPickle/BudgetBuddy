import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";

const Store = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [store, setStore] = useState([]);
    const [storeTypes, setStoreTypes] = useState([]);

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

        const type_url = "/api/v1/store_types/index";
        fetch(type_url)
            .then((res) => {
            if (res.ok) {
                return res.json();
            }
                throw new Error("Network response was not ok.");
            })
            .then((res) => setStoreTypes(res))
            .catch(() => navigate("/"));
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
                        {storeTypes.filter((element)=>element.id==store.store_type_id).map((storeType, index) => (
                            <p key={index}>Store type: {storeType.name}</p>
                        ))}
                        <button type="button" className="btn btn-danger rounded-pill" onClick={deleteStore}>
                            Delete Store
                        </button>
                    </div>
                </div>
                <Link to="/stores" className="btn btn-secondary rounded-pill">
                    Back to stores
                </Link>
            </div>
        </div>
    );
};
  
  export default Store;