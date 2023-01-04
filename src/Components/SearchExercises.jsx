import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const SearchExercises = () => {

    const [search, setSearch] = useState("")

    const handleSearch = async () => {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

        console.log(exercisesData);
    }

    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
                mt: 4,
            }}
        >
            <TextField
                id="outlined-basic"
                label="Search Exercises"
                variant="outlined"
                size="small"
                sx={{ minWidth: { xs: "200px", md: "500px" } }}
                value={search}
                onChange={(e) => setSearch(e.target.value.toLocaleLowerCase()) }
            />
            <Button onClick={handleSearch} variant="contained">Search</Button>
        </Container>
    );
};

export default SearchExercises;
