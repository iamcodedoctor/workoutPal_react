import {Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Details, ExerciseGrid, RelatedVideos} from "../Components";
import {getExerciseById, getFilteredExercises, getRelatedVideos,} from "../services/ExerciseService";

const ExerciseDetail = () => {
    const {id} = useParams();
    const [exerciseDetails, setExerciseDetails] = useState(null);
    const [similarBodyPartExercises, setSimilarBodyPartExercises] =
        useState(null);
    const [similarTargetExercises, setSimilarTargetExercises] = useState(null);
    const [realtedVideos, setRelatedVideos] = useState(null);


    useEffect(() => {
        const getExerciseDetails = async () => {
            const response = await getExerciseById(id);
            const {bodyPart, target} = response.data;
            setExerciseDetails(response.data);

            const response1 = await getFilteredExercises({
                bodyPart,
                limit: 3,
            });
            setSimilarBodyPartExercises(response1.data.exercises);

            const response2 = await getFilteredExercises({target, limit: 3});
            setSimilarTargetExercises(response2.data.exercises);

            const response3 = await getRelatedVideos(response.data.name);
            setRelatedVideos(response3)
        };

        getExerciseDetails();
    }, [id]);

    return (
        <>
            {
                exerciseDetails && (
                    <>
                        <Container>

                            <Details exerciseDetails={exerciseDetails}/>

                        </Container>
                        <Container sx={{mb:8}}>
                            <Container>
                                <Typography variant='h4'>
                                    Videos related to {exerciseDetails.name}
                                </Typography>
                                {
                                    realtedVideos && (
                                        <RelatedVideos data={realtedVideos}/>
                                    )
                                }
                                <Typography sx={{mt: 8}} variant="h3" color="primary">
                                    Similar Exercises
                                </Typography>
                                <Typography
                                    sx={{mt: 4}}
                                    variant="h4"
                                    color="textSecondary"
                                >
                                    Similar exercises for {exerciseDetails.bodyPart}
                                </Typography>
                                {similarBodyPartExercises && (
                                    <ExerciseGrid exercises={similarBodyPartExercises}/>
                                )}
                                <Typography
                                    sx={{mt: 12}}
                                    variant="h4"
                                    color="textSecondary"
                                >
                                    Similar exercises that target{" "}
                                    {exerciseDetails.target}
                                </Typography>
                                {similarTargetExercises && (
                                    <ExerciseGrid exercises={similarTargetExercises}/>
                                )}
                            </Container>
                        </Container>
                    </>
                )
            }


        </>
    );
};

export default ExerciseDetail;
