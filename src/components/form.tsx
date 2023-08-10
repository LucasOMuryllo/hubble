import { Button, TextField } from "@mui/material";
import React from "react";

const Form: React.FC = () => {
    return (
        <div className="form">
            <TextField
                className="form-textfield"
                id="outlined-name"
                label="Your Name"
                defaultValue=""
            />
            <TextField
                className="form-textfield"
                id="outlined-email"
                label="Your email"
                defaultValue=""
            />
            <Button
                className="form-button"
                variant="contained">
                Get Started
            </Button>
        </div>
    )
}

export default Form