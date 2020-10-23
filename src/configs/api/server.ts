import axios from 'axios';

const initialize = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default initialize;
