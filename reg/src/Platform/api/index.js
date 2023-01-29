import axios from "axios"

const Api = 'https://crudcrud.com/api/bc26977056e14844839de72ed4184d89/' // avelacnum enq vejum /(slesh) vor avelacnenq heto inchvor baner

export const PostUsers = (data) =>{
   return axios.post(`${Api}users`, data) // 1in arg(URL) 2rd info, 3rd konkert ur
} /// POST enq anum 

export const GetUsers = ()=>{
    return axios.get(`${Api}users`)
 }////GET enq anum 

 export const GetUser = (id)=>{
   return axios.get(`${Api}users/${id}`)
}////GET enq anum  id-ov

