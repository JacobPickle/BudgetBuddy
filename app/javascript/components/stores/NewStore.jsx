import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

const NewStore = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [storeTypes, setStoreTypes] = useState("");
    const [store_type_id, setStoreType] = useState("");

    useEffect(() => {
        const url = "/api/v1/store_types/index";
        fetch(url)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then((res) => setStoreTypes(res))
          .catch(() => navigate("/"));
    }, []);

    const storeTypeOptions = storeTypes.length > 0 ? storeTypes.map((storeType, index) => (
        <option key={index} value={storeType.id}>{storeType.name}</option>
    )) : <option></option>;
    
    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        const url = "/api/v1/stores/create";
    
        if (name.length == 0)
            return;
    
        const body = {
            name,
            store_type_id
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
        .then((response) => navigate(`/purchase`))
        .catch((error) => console.log(error.message));
    };

    return (
        <div>
            <Sidebar></Sidebar>
            <div className="main">
                <div>
                    <h3>
                        Create a new store.
                    </h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="storeName">Store name</label>
                            <input
                                type="text"
                                name="name"
                                id="storeName"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setName)}
                            />
                            <label htmlFor="storeTypeName">Store type</label>
                            <div>
                                <select style={{display: "inline-block"}} className="form-control" defaultValue={'DEFAULT'} onChange={(event) => onChange(event, setStoreType)}>
                                    <option value="DEFAULT" disabled>Choose a store type</option>
                                    {storeTypeOptions}
                                </select>
                                <Link to="/store_type" style={{width: 50, display: "inline-block"}} className="btn btn-secondary rounded-pill">
                                        +
                                </Link>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary rounded-pill">
                                Create store
                            </button>
                        </div>
                        <div>
                            <Link to="/" className="btn btn-secondary rounded-pill">
                                Home
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewStore;