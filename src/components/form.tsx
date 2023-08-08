import { Button, TextField } from "@mui/material";
import React from "react";

const Form: React.FC = () => {
    return (
        <div>
            <TextField
                id="outlined-name"
                label="Your Name"
                defaultValue=""
            />
            <TextField
                id="outlined-email"
                label="Your email"
                defaultValue=""
            />
            <Button
                variant="contained">
                Get Started
            </Button>
        </div>
    )
}

export default Form