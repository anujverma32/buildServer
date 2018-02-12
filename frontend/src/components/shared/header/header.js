import React from 'react'
import { Link } from "react-router-dom";
const Header = () => (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/setting">Setting</Link>
        </nav>
    </div>
)
export default Header;