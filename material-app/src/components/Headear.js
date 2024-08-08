import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Headear = () => {
    
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{flexGrow:1}}>
                    Mi aplicacion
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
};

export default Headear;