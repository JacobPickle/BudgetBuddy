import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        <div key={index} className="col-md-6 col-lg-4">
          <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{store.name}</h5>
                <Link to={`/store/${store.id}`} className="btn custom-button">
                    View Store
                </Link>
            </div>
          </div>
        </div>
    ));
    const noStore = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
                No stores yet. Why not <Link to="/store">create one</Link>
            </h4>
        </div>
    );
    
    return (
        <>
            <div>
                <main>
                    <div>
                        {stores.length > 0 ? allStores : noStore}
                    </div>
                    <div className="text-end mb-3">
                        <Link to="/store" className="btn custom-button">
                            Create New Store
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
  
  export default Stores;