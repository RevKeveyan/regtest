import { Menu } from "../../component/menu"
import { Header} from "../../component/header"
import { Form } from "../../component/form"

import './style.scss'



export const Home = () =>{

    
    return <div className="wrapper">
    <div className="left_menu">
        <Menu/>
    </div>
        
    <div>
   
        <Header/>
        <Form/>
        
    </div>
        
    </div>
}