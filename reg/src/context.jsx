import {createContext, useContext, useState} from "react";
import Nkar from './assets/n.jpg';

const MyContext = createContext();

const AppProvider = ({children}) =>{
    const [profile, setProfile] = useState({
        firstName : '',
        lastName : '',
        position : '',
        email : '',
        phoneNumber : '',
        age : '',
        gender : '',
        dateOfBirth : '',
        file : '',
    });
    const [products, setProducts] = useState([]);
    const [btn, setBtn] = useState(false);
    const [id, setId] = useState();
            
        return (<MyContext.Provider value={{
                profile, setProfile, 
                products, setProducts,
                btn, setBtn,
                id, setId
            }}>
                {children}
                </MyContext.Provider>
    );      
}

    const useGlobalContext = () => {
        return useContext(MyContext)
}
export {AppProvider, useGlobalContext}