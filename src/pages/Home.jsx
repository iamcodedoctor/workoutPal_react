import {
    Button,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import banner from "../assets/banner.jpg";
import banner2 from "../assets/banner2.jpg";

const Home = () => {
    
    return (
        <>
            <div style={{ minHeight: "95vh" }}>
                <img
                    style={{
                        width: "100%",
                        height: "100vh",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        zIndex: "-10",
                    }}
                    src={banner}
                    alt="fit banner"
                />
            </div>
            <Container sx={{ mt: 2 }}>
                <Typography variant="h2" align="center" color="textSecondary">
                    Sweat, Smile, Repeat
                </Typography>
                <Typography
                    variant="h4"
                    align="center"
                    color="primary"
                    sx={{ mt: 2 }}
                >
                    Learn awesome exercise with FitPal
                </Typography>
            </Container>

            {/* Second Banner */}

            <Box
                sx={{
                    minHeight:'95vh',
                   backgroundSize: "cover",
                    backgroundImage: `url(${banner2})`,
                }}
            >
                <Grid container sx={{ px: 4, pb:8 }}>
                    <Grid item xs={12} md={6} sx={{ p: 4, mt:{xs:0, md:4} }}>
                        <Typography sx={{ mt: {xs:2, sm:4, md:8} }} variant="h4" color="textSecondary">
                            Fitness That Fits Into Your Lifestyle
                        </Typography>
                        <Typography sx={{ mt: 4 }} variant="h5" color="gray">
                            Explore more than 1000 unique exercises
                        </Typography>
                        <Typography sx={{ mt: 4 }} variant="h4" color="primary">
                            Be the architect of your own body with FitPal
                        </Typography>
                        <Typography
                            sx={{ fontSize: "20px", mt: 4 }}
                            color="textSecondary"
                        >
                            With FitPal you have straight and totally free
                            access to more than one thousand unique exercises.
                            One can filter exercises based on equipment, body
                            parts and the targeted muscles so that there is
                            always something for everyone, no matter if have
                            access to high tech equipment or you just have a
                            matress, you can always find suitable exercises with
                            the FitPal app.
                        </Typography>
                        <Button
                            sx={{
                                mt: 4,
                            }}
                            variant='contained'
                        >
                            Browse Exercises
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ p:0 }}></Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Home;
