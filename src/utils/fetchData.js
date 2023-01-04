export const exerciseOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key":"c542ad92b4msh4704c9a1339ab3bp118276jsn932ff34dd11a",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};

export const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};
