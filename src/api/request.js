import axios from 'axios'
axios.defaults.baseURL = 'http://152.136.185.210:8000/api/w6'
axios.interceptors.response.use(res=>res.data)
export default function request(url,data={},method='get'){
    let p;
    if(method==='get'){
        p = axios.get(url,{
            params:data
        })
    }else{
        p = axios.post(url,data)
    }
    return p 
}