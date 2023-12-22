import axios from "axios";

const $api = axios.create({

})

export const URL = "http://172.16.16.121:3000/api/v1"

// $api.interceptors.request.use(config => {
//     const authorization = `Bearer ${localStorage.getItem("token")}`.split('"').map((elem) => {
//         if (elem !== '"') {
//             return elem;
//         }
//     }).join("");
//
//     config.headers.Authorization = authorization;
//     return config
// })



export default $api
