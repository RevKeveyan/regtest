import { Menu } from "../../component/menu"
import { Header} from "../../component/header"
import './style.scss'
import { Form } from "../../component/form"

export const Home = () =>{
    return <div className="wrapper">
    <div>
        <Menu/>
    </div>
        
    <div>
        <Header/>
        <Form/>
    </div>
        
    </div>
}