import {createContext, useContext, useState} from "react";

const MyContext = createContext();

const AppProvider = ({children}) =>{
    const [profile, setProfile] = useState({
        firstName : '',
        lastName : '',
        position : '',
        password : '',
        confirmPassword : '',
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
    const [guest, setGuest] = useState(true)
            
        return (<MyContext.Provider value={{
                profile, setProfile, 
                products, setProducts,
                btn, setBtn,
                id, setId,
                guest, setGuest
            }}>
                {children}
                </MyContext.Provider>
    );      
}

    const useGlobalContext = () => {
        return useContext(MyContext)
}
export {AppProvider, useGlobalContext}