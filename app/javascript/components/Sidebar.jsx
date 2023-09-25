import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidenav">
                <Link to="/" >Home</Link>
                <Link to="/stores">Stores</Link>
                <Link to="/store">New Store</Link>
            </div>
        );
    }
}

export default Sidebar;