import { useState } from "react";
import {NavLink} from "react-router-dom";
import './style.scss';

export const Menu = () =>{

    const [menu] = useState(['Dashboard', 'Profiles', 'Sign Up']);
    const [path] = useState(['dashboard', 'products', 'sign_up']);



    return (
    <div className="left_menu">
        <ul className="menu">
            {menu.map((elem, index)=>{
                return <li key ={index} className="menu_list"><NavLink to={'/'+path[index]}>{elem}</NavLink></li>
            })}
        </ul>
    </div>
    );
}