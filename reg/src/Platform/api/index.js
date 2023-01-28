import axios from "axios"

const Api = 'https://crudcrud.com/api/21a65683d6314d5995dd87c940e9977c/' // avelacnum enq vejum /(slesh) vor avelacnenq heto inchvor baner

export const PostUsers = (data) =>{
   return axios.post(`${Api}users`, data) // 1in arg(URL) 2rd info, 3rd konkert ur
} /// POST enq anum 

export const GetUsers = ()=>{
    return axios.get(`${Api}users`)
 }////GET enq anum 

