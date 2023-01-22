import Nkar from '../../assets/n.jpg'
import './style.scss'
import {useGlobalContext} from "../../context.jsx";

export const Header = () =>{
    const {profile} = useGlobalContext()



    
    return (
        <div className="header">
        <div className="header_img">
        <img src={Nkar} alt="Nkar" />
        </div>

            
            {profile.btn ?
            <div><h2>{profile.firstName} {profile.lastName}</h2>
            <p>{profile.position}</p></div> :
            <div><h2>Name Surname</h2>
            <p>Position</p></div>
            }            
        </div>
    );
}