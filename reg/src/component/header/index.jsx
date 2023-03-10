import Nkar from '../../assets/n.jpg'
import './style.scss'

import {useGlobalContext} from "../../context.jsx";
import { useEffect, useState } from 'react';
import { GetUsers } from '../../Platform/api';

export const Header = () =>{
    
    const {btn, products,setProducts, setBtn} = useGlobalContext()
    const [user, setUser] = useState([products.pop()])

    useEffect(()=>{
        
         Get()
    },[])
 
    const Get = async () =>{
        const result = await GetUsers()
        if(result){
            setUser(result.data.pop())
        }
    }
   
    
    return (
        <div className="header">
        <div className="header_img">
        {btn && user.file? <img src={user.file} alt="Nkar"/>:<img src={Nkar} alt="Nkar"/>}
        </div>
            {user && btn ? 
            <div><h2>{user.firstName} {user.lastName}</h2>
            <p>{user.position}</p></div> :
            <div><h2>Name Surname</h2>
            <p>Position</p></div>
            }            
        </div>
    );
}


