import axios from "axios"

const Api = 'https://crudcrud.com/api/b5a4f6afb1e34845a80f5682239f9b6d/' // avelacnum enq vejum /(slesh) vor avelacnenq heto inchvor baner

export const PostUsers = (data) =>{
   return axios.post(`${Api}users`, data) // 1in arg(URL) 2rd info, 3rd konkert ur
} /// POST enq anum

export const GetUsers = ()=>{
    return axios.get(`${Api}users`)
 }////GET enq anum 

