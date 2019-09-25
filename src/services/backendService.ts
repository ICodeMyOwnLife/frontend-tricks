import Axios from 'axios';

const backendService = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default backendService;
