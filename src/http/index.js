import axios from "axios";

const service = axios.create({
    baseURL:'', // api 的 base_url
    timeout: 500000 
  });
  
  service.interceptors.request.use(
    config => {
      
    console.log(config,'config');
      return config;
    },
    error => {
      
      return Promise.reject(error);
    }
  );
  
  service.interceptors.response.use(

    response => {
      const res = response.data;
      
        return res;
      
    },
    error => {
     
      return Promise.reject(error);
    }
  );
  
  export default service;