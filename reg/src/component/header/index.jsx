import Nkar from '../../assets/n.jpg'
import { useState } from 'react'
import './style.scss'

export const Header = () =>{

    const [name] = useState('Reva')
    const [lastNAme] = useState('Keveyan')
    const [position] = useState('No position')


    return (
        <div className="header">
        <div className="header_img">
        <img src={Nkar} alt="Nkar" />
        </div>
            <div>
            <h2>{name} {lastNAme}</h2>
            <p>{position}</p>
            </div>
            
        </div>
    );
}