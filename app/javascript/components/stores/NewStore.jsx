import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewStore = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    
    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        const url = "/api/v1/stores/create";
    
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
        .then((response) => navigate(`/store/${response.id}`))
        .catch((error) => console.log(error.message));
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-lg-6 offset-lg-3">
                    <h1 className="font-weight-normal mb-5">
                        Add a new store to the database.
                    </h1>
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
                        </div>
                        <button type="submit" className="btn custom-button mt-3">
                            Create store
                        </button>
                        <Link to="/" className="btn btn-link mt-3">
                            Home
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewStore;