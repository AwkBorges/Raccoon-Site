import axios from 'axios';

const apiStatus = axios.create({

    baseURL:'http://localhost:3000/'

});

export default apiStatus;