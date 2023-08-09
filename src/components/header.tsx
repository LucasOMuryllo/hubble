import Button from "@mui/material/Button";
import React from "react";

const Header: React.FC = () => {
    return (
        <div className="App-header">
            <h1 className="header-title">Start Up</h1>
            <a className="header-itens" href="#">Products</a>
            <a className="header-itens" href="#">Pricing</a>
            <a className="header-itens" href="#">Community</a>

            <a className="header-button" href="#">
                Help
            </a>
            <a className="header-button" href="#">
                Login
            </a>
            <Button className="button-sign" variant="outlined">
                <p>Sign Up</p>
            </Button>
        </div>
    )
}

export default Header