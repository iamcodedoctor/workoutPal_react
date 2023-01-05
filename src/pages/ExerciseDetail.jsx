import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Details, ExerciseGrid } from "../Components";
import {
    getExerciseById,
    getFilteredExercises,
} from "../services/ExerciseService";

const ExerciseDetail = () => {
    const { id } = useParams();
    const [exerciseDetails, setExerciseDetails] = useState(null);
    const [similarBodyPartExercises, setSimilarBodyPartExercises] =
        useState(null);
    const [similarTargetExercises, setSimilarTargetExercises] = useState(null);

    useEffect(() => {
        const getExerciseDetails = async () => {
            const response = await getExerciseById(id);
            const { bodyPart, target } = response.data;
            setExerciseDetails(response.data);

            const response1 = await getFilteredExercises({
                bodyPart,
                limit: 3,
            });
            setSimilarBodyPartExercises(response1.data.exercises);

            const response2 = await getFilteredExercises({ target, limit: 3 });
            setSimilarTargetExercises(response2.data.exercises);
        };

        getExerciseDetails();
    }, [id]);

    return (
        <>
            <Container>
                {exerciseDetails && (
                    <Details exerciseDetails={exerciseDetails} />
                )}
            </Container>
            <Container>
                <Container>
                    <Typography sx={{ mt: 4 }} variant="h3" color="primary">
                        Similar Exercises
                    </Typography>
                    {exerciseDetails && (
                        <Typography
                            sx={{ mt: 4 }}
                            variant="h4"
                            color="textSecondary"
                        >
                            Similar exercises for {exerciseDetails.bodyPart}
                        </Typography>
                    )}
                    {similarBodyPartExercises && (
                        <ExerciseGrid exercises={similarBodyPartExercises} />
                    )}
                    {exerciseDetails && (
                        <Typography
                            sx={{ mt: 12 }}
                            variant="h4"
                            color="textSecondary"
                        >
                            Similar exercises that target{" "}
                            {exerciseDetails.target}
                        </Typography>
                    )}
                    {similarTargetExercises && (
                        <ExerciseGrid exercises={similarTargetExercises} />
                    )}
                </Container>
            </Container>
        </>
    );
};

export default ExerciseDetail;
