import { useState } from "react";
import './style.scss';

export const Menu = () =>{

    const [menu] = useState(['Dashboard', 'Products']);


    return (
    <div className="left_menu">
        <ul className="menu">
            {menu.map((elem, index)=>{
                return <li key ={index} className="menu_list">{elem}</li>
            })}
        </ul>
    </div>
    );
}