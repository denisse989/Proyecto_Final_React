import axios from 'axios';
export const getEvents = async () => {
    const response = await axios.get('http://localhost:1337/api/events?populate=*');
    return response.data;
}