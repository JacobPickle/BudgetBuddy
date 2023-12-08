import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

const NewStoreType = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    
    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        const url = "/api/v1/store_types/create";
    
        if (name.length == 0)
            return;
    
        const body = {
            name
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
        .then((response) => navigate(`/store`))
        .catch((error) => console.log(error.message));
    };

    return (
        <div>
            <Sidebar></Sidebar>
            <div className="main">
                <div>
                    <h3>
                        Create a new store type.
                    </h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="storeType">Store Type</label>
                            <input
                                type="text"
                                name="name"
                                id="storeType"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setName)}
                            />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary rounded-pill">
                                Create store Type
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

export default NewStoreType;