import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const PurchaseList = ({recent}) => {
    const navigate = useNavigate();
    const [purchases, setPurchases] = useState([]);
    const [stores, setStores] = useState([]);
    const dayjs = require('dayjs')
    var localizedFormat = require('dayjs/plugin/localizedFormat')
    dayjs.extend(localizedFormat)

    useEffect(() => {
        getPurchases();
    }, []);

    async function getPurchases(){
        url = "";
        if(recent) {
            url = "/api/v1/purchases/recent";
        }
        else {
            url = "/api/v1/purchases/index";
        }
        await fetch(url)
          .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
          })
          .then((res) => setPurchases(res))
          .catch(() => navigate("/"));

        const storeurl = "/api/v1/stores/index";
        await fetch(storeurl)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then((res) => setStores(res))
          .catch(() => navigate("/"));
    };
    
    const allPurchases = purchases.map((purchase, index) => (
        <li key={index}>
            <Link to={`/purchase/${purchase.id}`} className="list-group-item d-flex justify-content-between">
                <div>
                    <div>
                        {stores.filter((element)=>element.id==purchase.store_id).map((store, index) => (
                            <b key={index}>{store.name}</b>
                        ))}
                    </div>
                    <div>
                        {dayjs(purchase.purchase_date).format('LL')}
                    </div>
                    <div>
                        ${purchase.total.toFixed(2)}
                    </div>
                </div>
                <div>
                    <br></br>
                    <b className="opacity-50">{'View >'}</b>
                </div>
            </Link>
        </li>
    ));
    const noPurchase = (
        <div>
            <h4>
                No purchases yet. Why not <Link to="/purchase">create one</Link>
            </h4>
        </div>
    );
    
    return (
        <ul className="list-group">
            {purchases.length > 0 ? allPurchases : noPurchase}
        </ul>
    );
};
  
export default PurchaseList;