import Button from "@mui/material/Button";
import React from "react";

const Header: React.FC = () => {
    return (
        <div className="App-header">
            <h1>Start Up</h1>
            <p>Products</p>
            <p>Pricing</p>
            <p>Community</p>

            <Button variant="text">
                <p>Help</p>
            </Button>
            <Button variant="text">
                <p>Login</p>
            </Button>
            <Button variant="outlined">
                <p>Sign Up</p>
            </Button>
        </div>
    )
}

export default Header