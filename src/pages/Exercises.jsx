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
import { useEffect, useState } from "react";
import {
    getFilterCategoris,
    getFilteredExercises,
} from "../services/ExerciseService";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Exercises = () => {
    
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(null);
    const [exercises, setExercises] = useState([]);
    const [filterCategories, setFilterCategories] = useState(null);
    const [filterOptions, setFilterOptions] = useState({
        bodyPart: "",
        equipment: "",
        target: "",
    });

    const handleFilter = async () => {
        setPage(1);
        const response = await getFilteredExercises({ ...filterOptions });
        setExercises(response.data.exercises);
        setCount(response.data.count);
    };

    const handlePageChange = (e, p) => {
        setPage(p);
    };

    useEffect(() => {
        const getExercises = async () => {
            const response = await getFilteredExercises({
                ...filterOptions,
                page,
            });
            setExercises(response.data.exercises);
            setCount(response.data.count);
        };
        getExercises();
    }, [page]);

    useEffect(() => {
        const getCategories = async () => {
            const response = await getFilterCategoris();
            setFilterCategories(response.data);
        };

        getCategories();
    }, []);

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
                            <InputLabel id="demo-select-small">
                                {"Body Part"}
                            </InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={filterOptions.bodyPart}
                                label="Body Part"
                                onChange={(e) =>
                                    setFilterOptions({
                                        ...filterOptions,
                                        bodyPart: e.target.value,
                                    })
                                }
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {filterCategories &&
                                    filterCategories.bodyParts.map(
                                        (item, index) => {
                                            return (
                                                <MenuItem
                                                    key={index}
                                                    value={item}
                                                >
                                                    {item}
                                                </MenuItem>
                                            );
                                        }
                                    )}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                            <InputLabel id="demo-select-small">
                                Equipment
                            </InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={filterOptions.equipment}
                                label="Equipments"
                                onChange={(e) =>
                                    setFilterOptions({
                                        ...filterOptions,
                                        equipment: e.target.value,
                                    })
                                }
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {filterCategories &&
                                    filterCategories.equipments.map(
                                        (item, index) => {
                                            return (
                                                <MenuItem
                                                    key={index}
                                                    value={item}
                                                >
                                                    {item}
                                                </MenuItem>
                                            );
                                        }
                                    )}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                            <InputLabel id="demo-select-small">
                                Target Muscle
                            </InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={filterOptions.target}
                                label="Target Muscle"
                                onChange={(e) =>
                                    setFilterOptions({
                                        ...filterOptions,
                                        target: e.target.value,
                                    })
                                }
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {filterCategories &&
                                    filterCategories.targets.map(
                                        (item, index) => {
                                            return (
                                                <MenuItem
                                                    key={index}
                                                    value={item}
                                                >
                                                    {item}
                                                </MenuItem>
                                            );
                                        }
                                    )}
                            </Select>
                        </FormControl>
                    </Box>
                    <Button
                        onClick={handleFilter}
                        variant="contained"
                        sx={{ minWidth: 150, mt: 1 }}
                    >
                        Search
                    </Button>
                </Box>
            </Container>
            {/* Exercises Conatiner */}

            <Container sx={{ mt: 4 }}>
                <Container>
                    <Grid container spacing={4} sx={{ my: 4 }}>
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
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>
            </Container>
            <Container
                sx={{
                    my: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Stack spacing={2}>
                    <Pagination
                        count={Math.floor(count / 12)}
                        shape="rounded"
                        page={page}
                        onChange={handlePageChange}
                    />
                </Stack>
            </Container>
        </Box>
    );
};

export default Exercises;
