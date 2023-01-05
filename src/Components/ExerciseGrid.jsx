import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExerciseGrid = ({exercises}) => {
    return (
        <Container sx={{ mt: 1 }}>
            <Container>
                <Grid container spacing={4} sx={{ my: 1 }}>
                    {exercises.map((item, index) => {
                        return (
                            <Grid
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                item
                                key={index}
                                xs={12}
                                sm={6}
                                md={6}
                                lg={4}
                            >
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={`/exerciseDetails/${item._id}`}
                                >
                                    <Card elevation={2} sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            sx={{ minHeight: 350 }}
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image={item.gifUrl}
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h6"
                                                component="div"
                                                align="center"
                                            >
                                                {item.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Container>
    );
};

export default ExerciseGrid;
