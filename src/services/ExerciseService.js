import {baseConfig} from "../configs/baseConfig"
import axios from 'axios';
const serverUrl = baseConfig.serverUrl;

const getFilterCategoris = async () => {
    try {
        const response = await axios.get(`${serverUrl}/exercise/distinct`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const getFilteredExercises = async ({bodyPart, equipment, target, page, limit}) => {
    try {
        page = (page-1) || 0;
        limit = limit || 12;
        if(!bodyPart) {
            bodyPart = ''
        }
        if(!equipment) {
            equipment = ''
        }
        if(!target) {
            target = ''
        }
        const response = await axios.get(`${serverUrl}/exercise/filter?bodyPart=${bodyPart}&equipment=${equipment}&target=${target}&page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
} 

const getExerciseById = async (id) =>{
    try {

        const response = await axios.get(`${serverUrl}/exercise/${id}`);
        return response.data;

    } catch (error) {
        console.log(error)
    }
}

export { getFilterCategoris, getFilteredExercises, getExerciseById}