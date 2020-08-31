import axios from 'axios';
axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:9000' : 'http://catalogue-lb-137955696.us-east-1.elb.amazonaws.com/products';
export default axios;
