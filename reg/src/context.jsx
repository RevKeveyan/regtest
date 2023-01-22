import {createContext, useContext, useState} from "react";


const MyContext = createContext();

const AppProvider = ({children}) =>{
    const [profile,setProfile] = useState({
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
    })

    return <MyContext.Provider value={{
        profile, setProfile
        }}>
        {children}
    </MyContext.Provider>
}

const useGlobalContext = () => {
    return useContext(MyContext)
}
export {AppProvider , useGlobalContext}