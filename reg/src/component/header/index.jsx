import Nkar from '../../assets/n.jpg'
import './style.scss'
import {useGlobalContext} from "../../context.jsx";

export const Header = () =>{
    const {profile} = useGlobalContext()
    const {firstName, position, lastName} = profile

    
    return (
        <div className="header">
        <div className="header_img">
        {profile.file? <img src={URL.createObjectURL(profile.file)} alt="Nkar"/>:<img src={Nkar} alt="Nkar"/>}
        </div>

            
            {profile.btn ?
            <div><h2>{firstName} {lastName}</h2>
            <p>{position}</p></div> :
            <div><h2>Name Surname</h2>
            <p>Position</p></div>
            }            
        </div>
    );
}