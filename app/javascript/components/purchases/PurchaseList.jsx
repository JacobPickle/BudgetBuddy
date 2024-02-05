import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const PurchaseList = ({recent}) => {
    const navigate = useNavigate();
    const [purchases, setPurchases] = useState([]);
    const [filteredPurchases, setFilteredPurchases] = useState([]);
    const [stores, setStores] = useState([]);
    const [storeTypes, setStoreTypes] = useState([]);
    const [storeFilter, setStoreFilter] = useState([]);
    const [storeTypeFilter, setStoreTypeFilter] = useState([]);
    const dayjs = require('dayjs')
    var localizedFormat = require('dayjs/plugin/localizedFormat')
    dayjs.extend(localizedFormat)

    useEffect(() => {
        getPurchases();
        getStores();
        getStoreTypes();
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
          .then((res) => {setPurchases(res);setFilteredPurchases(res)})
          .catch(() => navigate("/"));
    };

    async function getStores(){
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

    async function getStoreTypes(){
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
    };

    const storeOptions = stores.length > 0 ? stores.map((store, index) => (
        <option key={index} value={store.id}>{store.name}</option>
    )) : <option></option>;

    const storeTypeOptions = storeTypes.length > 0 ? storeTypes.map((storeType, index) => (
        <option key={index} value={storeType.id}>{storeType.name}</option>
    )) : <option></option>;

    const onChangeStore = (event, setFunction) => {
        setFilteredPurchases(purchases.filter(purchase => purchase.store_id == event.target.value));
        setFunction(event.target.value);
    };

    const onChangeStoreType = (event, setFunction) => {
        filteredStores = stores.filter(store => store.store_type_id == event.target.value);
        setFilteredPurchases(purchases.filter(purchase => purchase.store_id == event.target.value));
        setFunction(event.target.value);
    };
    
    const allPurchases = filteredPurchases.map((purchase, index) => (
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
        <div>
            <form>
                <select className="form-control" defaultValue={'DEFAULT'} onChange={(event) => onChangeStore(event, setStoreFilter)}>
                    <option value="DEFAULT" disabled>Choose a store filter</option>
                    {storeOptions}
                </select>
                <select className="form-control" defaultValue={'DEFAULT'} onChange={(event) => onChangeStoreType(event, setStoreTypeFilter)}>
                    <option value="DEFAULT" disabled>Choose a store type filter</option>
                    {storeTypeOptions}
                </select>
            </form>
            <ul className="list-group">
                {purchases.length > 0 ? allPurchases : noPurchase}
            </ul>
        </div>
    );
};
  
export default PurchaseList;