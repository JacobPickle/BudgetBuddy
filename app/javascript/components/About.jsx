import React from "react";
import Sidebar from "./Sidebar";

const About = () => {
    return(
        <div>
            <Sidebar></Sidebar>
            <div className="main">
                <p>BudgetBuddy is here to help track your grocery spending.</p>
            </div>
        </div>
    )
}

export default About;