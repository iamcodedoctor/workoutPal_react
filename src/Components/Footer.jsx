import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#f7f8fd" }}>
            <Container sx={{ pt: 4 }}>
                <Grid container>
                    <Grid
                        sx={{
                            p: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                        xs={12}
                        sm={6}
                        md={2}
                        item
                    >
                        <Typography variant="h5" color="textSecondary">
                            Links
                        </Typography>
                        <Typography
                            sx={{ mt: 2 }}
                            variant="body1"
                            color="textSecondary"
                        >
                            Home
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            About
                        </Typography>
                        <Link to='/exercises' style={{textDecoration:'none'}}>
                        <Typography variant="body1" color="textSecondary">
                            Exercises
                        </Typography>
                        </Link>
                        <Typography variant="body1" color="textSecondary">
                            Contact
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Cookies
                        </Typography>
                    </Grid>
                    <Grid
                        sx={{
                            p: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                        xs={12}
                        sm={6}
                        md={5}
                        item
                    >
                        <Typography variant="h5" color="textSecondary">
                            About
                        </Typography>
                        <Typography
                            sx={{ mt: 2 }}
                            variant="body1"
                            color="textSecondary"
                            textAlign={'center'}
                        >
                            I am an solo developer from Nashik Maharashtra. The
                            main aim with this application is to create a free
                            and easy to access resource for beginner as well as
                            intermidate to learn and get into the world of
                            fitness.
                        </Typography>
                    </Grid>
                    <Grid
                        sx={{
                            p: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                        xs={12}
                        sm={6}
                        md={5}
                        item
                    >
                        <Typography variant="h5" color="textSecondary">
                            Contact
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            sx={{display:'flex', justifyContent:'center', alignItems:'center', mt:2}}
                        >
                            <EmailIcon style={{marginRight:'10px'}} /> khareniraj23@gmail.com
                        </Typography>
                        <Typography
                             sx={{display:'flex', justifyContent:'center', alignItems:'center', mt:2}}
                            variant="body1"
                            color="textSecondary"
                        >
                            <PersonPinCircleIcon style={{marginRight:'10px'}} /> Nashik, Maharastra
                        </Typography>
                        <Typography
                             sx={{display:'flex', justifyContent:'center', alignItems:'center', mt:2}}
                            variant="body1"
                            color="textSecondary"
                        >
                            <CallIcon style={{marginRight:'10px'}} /> +91 9370468105
                        </Typography>
                       
                    </Grid>
                </Grid>
                <Typography
                    sx={{ p: 2 }}
                    align="center"
                    variant="h6"
                    color="primary"
                >
                    FitPal @ NK, Copyright 2022, All Rights Reserved
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
