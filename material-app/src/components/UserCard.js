import React from "react";
import {Card, CardContent, Typography,CardMedia  } from '@mui/material'
import '../styles/styles.css'

const UserCard = ({user}) => {
    return(
        <Card className="Card">
            <CardMedia className="CardMedia"
                component="img"
                image={user.avatar}
                alt={user.name} />
            <CardContent>
                <Typography variant="h5" component="div">
                    {user.name}
                </Typography>
                <Typography  
                    variant="body2"
                    color="text.secondary">
                        {user.email}
                </Typography>
            </CardContent>

        </Card>
    )
};

export default UserCard;