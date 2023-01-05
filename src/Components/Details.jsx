import { Divider, Grid, Typography } from "@mui/material";
import React from "react";


const Details = ({exerciseDetails}) => {

    const { name, bodyPart, gifUrl, target, equipment } = exerciseDetails
 
    return (
        <Grid container>
            <Grid xs={12} md={6} item>
                <img style={{width:'100%'}} src={gifUrl} alt="exercise" />
            </Grid>
            <Grid sx={{py:2, px:4}} xs={12} md={6} item>
                <Typography sx={{mt:2}} variant="h4">{name}</Typography>
                <Typography sx={{mt:4}} variant="body1">
                    Exercise keeps you Strong. {name} is a very good exercise to
                    strenthen your body. It highly emphasis on building your{" "}
                    {target} and can be performed only using {equipment}.
                </Typography>
                <Typography variant="body1">
                    Enjoy staying fit and keep working out.
                </Typography>
                <Divider sx={{my:2}}></Divider>
                <Typography sx={{mt:4}} variant='h6'>
                    Bodypart: {bodyPart}
                </Typography>
                <Typography sx={{mt:2}} variant='h6'>
                    Target: {target}
                </Typography>
                <Typography sx={{mt:2}} variant='h6'>
                    Equipment: {equipment}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Details;
