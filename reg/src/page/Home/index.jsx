import { Menu } from "../../component/menu"
import { Header} from "../../component/header"
import './style.scss'
import { Form } from "../../component/form"
import { createContext, useContext } from "react";


const MyContext = createContext('Test');

export const Home = () =>{
    return <div className="wrapper">
    <div>
        <Menu/>
    </div>
        
    <div>
    <MyContext.Provider value = {{
        firstName : '',
        lastName : '',
        position : '',
        email : '',
        phoneNumber : '',
        age : '',
        gender : '',
        dateOfBirth : '',
        file : '',
        btn : false
    }}>
        <Header/>
        <Form/>
    </MyContext.Provider>
        
    </div>
        
    </div>
}
export {MyContext}