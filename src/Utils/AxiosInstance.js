import Axios from 'axios';

const BASE_URL = 'https://5fc9346b2af77700165ae514.mockapi.io/simpsons';

const axiosInstance = Axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
});

export default axiosInstance;
