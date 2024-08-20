import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': '4e985669b5msh8e39d769a006efcp1a5004jsn7437e795449b',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };