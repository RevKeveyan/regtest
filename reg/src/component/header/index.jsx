import Nkar from '../../assets/n.jpg'
import { useState } from 'react'
import './style.scss'
import {MyContext} from  "../../page/Home"
import { useContext } from "react";

export const Header = () =>{

    const profile = useContext(MyContext);


    
    return (
        <div className="header">
        <div className="header_img">
        <img src={Nkar} alt="Nkar" />
        </div>
            <div>
            <h2>{profile.firstName} {profile.lastName}</h2>
            <p>{profile.position}</p>
            </div>
            
        </div>
    );
}