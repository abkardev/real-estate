import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        
        headers: {
            'X-RapidAPI-Key': '5e62698e5bmsh09bbf73b87f4991p1a03d2jsnd2078789a6d6',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }    
    });
    return data;
    
}
