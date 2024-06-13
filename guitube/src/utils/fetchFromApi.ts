import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': '7e0172d5e5msh532035c48e7f9d7p16d200jsn9b43eaabfcd4', 
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromApi = async (url: string) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data
    }