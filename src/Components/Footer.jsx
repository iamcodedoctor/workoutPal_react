import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

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
                        <Typography variant="body1" color="textSecondary">
                            Exercises
                        </Typography>
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
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur, ex. Iusto dolor, necessitatibus
                            aliquid harum dolore corporis voluptas ullam iure.
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
                            sx={{ mt: 2 }}
                            variant="body1"
                            color="textSecondary"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur, ex. Iusto dolor, necessitatibus
                            aliquid harum dolore corporis voluptas ullam iure.
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
