import {
    Button,
    Card,
    CardContent,
    CardMedia,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { featuredItems } from "./test_exercises";

const Exercises = () => {
    const [age, setAge] = useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box>
            <Container>
                <Typography
                    sx={{ mt: 4 }}
                    align="center"
                    variant="h4"
                    color="textSecondary"
                >
                    Sort Exercises
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        mt: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                            <InputLabel id="demo-select-small">Age</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                            <InputLabel id="demo-select-small">Age</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                            <InputLabel id="demo-select-small">Age</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Button variant="contained" sx={{ minWidth: 150, mt: 1 }}>
                        Search
                    </Button>
                </Box>
            </Container>
            {/* Exercises Conatiner */}

            <Container sx={{ mt: 4 }}>
               
                <Container>
                    <Grid container spacing={4} sx={{ my: 4 }}>
                        {featuredItems.map((item, index) => {
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
                                                align='center'
                                            >
                                                {item.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>
            </Container>
        </Box>
    );
};

export default Exercises;
