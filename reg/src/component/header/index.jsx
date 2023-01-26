import Nkar from '../../assets/n.jpg'
import './style.scss'
import {useGlobalContext} from "../../context.jsx";

export const Header = () =>{
    const {btn, products} = useGlobalContext()
    const {firstName, position, lastName,file} = products[products.length - 1]?products[products.length - 1] : ['nothing']
    return (
        <div className="header">
        <div className="header_img">
        {file && btn? <img src={file} alt="Nkar"/>:<img src={Nkar} alt="Nkar"/>}
        </div>
            {btn ?
            <div><h2>{firstName} {lastName}</h2>
            <p>{position}</p></div> :
            <div><h2>Name Surname</h2>
            <p>Position</p></div>
            }            
        </div>
    );
}