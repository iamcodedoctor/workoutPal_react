import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RelatedVideos = ({data}) => {
  return (
    <Container sx={{ mt: 1 }}>
            <Container>
                <Grid container spacing={4} sx={{ my: 1 }}>
                    {data.contents.slice(0,3).map((item, index) => {
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
                                <a
                                target={'__blank'}
                                    style={{ textDecoration: "none" }}
                                    href={`https://youtube.com/watch?v=${item.video.videoId}`}
                                >
                                    <Card elevation={2} sx={{ maxWidth: 345, height: 330 }}>
                                        <CardMedia
                                            sx={{ width: 330, height:200 }}
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image={item.video.thumbnails[0].url}
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h6"
                                                component="div"
                                                align="center"
                                            >
                                                {item.video.title}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </a>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Container>
  )
}

export default RelatedVideos
