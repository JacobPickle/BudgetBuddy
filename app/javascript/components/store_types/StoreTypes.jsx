import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

const StoreTypes = () => {
    const navigate = useNavigate();
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const url = "/api/v1/store_types/index";
        fetch(url)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then((res) => setStores(res))
          .catch(() => navigate("/"));
    }, []);
    
    const allStores = stores.map((store, index) => (
        <li key={index}>
            <div>
                <Link to={`/store_type/${store.id}`} className="list-group-item">
                    {store.name}
                </Link>
            </div>
        </li>
    ));
    const noStore = (
        <div>
            <h4>
                No store type yet. Why not <Link to="/store_type">create one</Link>
            </h4>
        </div>
    );
    
    return (
        <>
            <Sidebar></Sidebar>
            <div className="main">
                <h3>Store Types</h3>
                <main>
                    <ul className="list-group">
                        {stores.length > 0 ? allStores : noStore}
                    </ul>
                    <div>
                        <Link to="/store_type" className="btn btn-primary rounded-pill">
                            Create New Store Type
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
};
  
  export default StoreTypes;