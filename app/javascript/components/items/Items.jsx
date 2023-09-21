import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Items = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = "/api/v1/items/index";
        fetch(url)
          .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
          })
          .then((res) => setItems(res))
          .catch(() => navigate("/"));
    }, []);
    
    const allItems = items.map((item, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="card mb-4">
            <div className="card-body">
                <p>{item.name}</p>
                <Link to={`/item/${item.id}`} className="btn custom-button">
                    View Item
                </Link>
            </div>
          </div>
        </div>
    ));
    const noItem = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
                No items yet. Why not <Link to="/item">create one</Link>
            </h4>
        </div>
    );
    
    return (
        <>
            <div>
                <main>
                    <div>
                        {items.length > 0 ? allItems : noItem}
                    </div>
                    <div className="text-end mb-3">
                        <Link to="/item" className="btn custom-button">
                            Create New Item
                        </Link>
                    </div>
                    <Link to="/" className="btn btn-link">
                        Home
                    </Link>
                </main>
            </div>
        </>
    );
};
  
  export default Items;