import axios from 'axios';
import Helpers from '@/helpers/helpers';
const api = axios.create({
    baseURL:'http://lar-ecommerce.local/api/',
    headers:{
        'Authorization' : 'Bearer ' + Helpers.getToken(),
        'Content-Type':'application/json'
    }
});
export default api;
