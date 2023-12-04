import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import PurchaseList from "./purchases/PurchaseList";

const Home = () => {   
    const [budget, setBudget] = useState([]);
    const [weeks, setWeeks] = useState([]);
    const [totalSpending, setTotalSpending] = useState([]);

    useEffect(() => {
        getSettings();
    }, []);

    async function getSettings() {
        const url = `/api/v1/settings/weeks`;
        await fetch(url)
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
        .then((response) => {
            setWeeks(response);
        })
        .catch(() => useNavigate("/"));

        const budget_url = `/api/v1/settings/budget`;
        await fetch(budget_url)
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
        .then((response) => {
            setBudget(response);
        })
        .catch(() => useNavigate("/"));

        const total_spent_url = `/api/v1/purchases/recent_total`;
        await fetch(total_spent_url)
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
        .then((response) => {
            setTotalSpending(response);
        })
        .catch(() => useNavigate("/"));
    }

    return (
        <>
            <Sidebar></Sidebar>
            <div className="main">
                <main>
                    <h3>Last {weeks} weeks</h3>
                    <table className="organization">
                        <tbody>
                            <tr>
                                <td className="organization">
                                    <h5>Purchases</h5>
                                    <PurchaseList recent="true"></PurchaseList>
                                    <div>
                                        <Link to="/purchase" className="btn btn-primary rounded-pill">
                                            Log New Purchase
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/store" className="btn  btn-secondary rounded-pill">
                                            Create New Store
                                        </Link>
                                    </div>
                                </td>
                                <td style={{paddingLeft: 50}} className="organization">
                                    <h5>Spending Habits</h5>
                                    <div>Total Spent: ${totalSpending}</div>
                                    <div>Weekly budget: ${budget}</div>
                                    <div>Average weekly spending: ${(totalSpending/weeks).toFixed(2)}</div>
                                    <div>Budget Difference: ${(budget - (totalSpending/weeks)).toFixed(2)}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            </div>
        </>
    );
};
  
export default Home;