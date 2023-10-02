import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidenav">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/purchases" >Purchases</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/stores">Stores</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Resume" >My Resume</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;