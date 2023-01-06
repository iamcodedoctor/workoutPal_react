import {baseConfig} from "../configs/baseConfig"
import axios from 'axios';
const serverUrl = baseConfig.serverUrl;
const ytSearchURl = baseConfig.youtubeSearchUrl;
const rapidApiKey = baseConfig.rapidApiKey;

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

const getRelatedVideos = async (name) => {
    try {
        const options = {
            method: 'GET',
            url: `${ytSearchURl}/search`,
            params: {
                query: `exercise ${name}`,
                
              },
            headers: {
              'X-RapidAPI-Key': rapidApiKey,
              'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
            }
          };
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export { getFilterCategoris, getFilteredExercises, getExerciseById, getRelatedVideos}