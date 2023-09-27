import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

const Stores = () => {
    const navigate = useNavigate();
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const url = "/api/v1/stores/index";
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
        <div key={index}>
          <div>
            <div>
                <Link to={`/store/${store.id}`} className="list-group-item list-group-item-action">
                    {store.name}
                </Link>
            </div>
          </div>
        </div>
    ));
    const noStore = (
        <div>
            <h4>
                No stores yet. Why not <Link to="/store">create one</Link>
            </h4>
        </div>
    );
    
    return (
        <>
            <Sidebar></Sidebar>
            <div className="main">
                <h3>Stores</h3>
                <main>
                    <div className="list-group">
                        {stores.length > 0 ? allStores : noStore}
                    </div>
                    <div>
                        <Link to="/store" className="btn btn-primary rounded-pill">
                            Create New Store
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
};
  
  export default Stores;