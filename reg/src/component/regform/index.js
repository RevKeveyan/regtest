
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useGlobalContext } from '../../context';
import { PostUsers } from '../../Platform/api';
import './style.scss'

export const Reg = () =>{

   

    const navigate = useNavigate()
    const {profile,setProfile, products, setProducts, setGuest, setBtn} = useGlobalContext();

    const [error,setError] = useState({
        login : "",
        password : "",
        email : "",
        confirmPassword: ""
    });

    const change = (e) =>{
        setProfile({...profile, [e.target.name] : e.target.value});
        
    }

    const validation  = (e) =>{
        
        let valid = true

        const errors = {
            login : "",
            password : "",
            email : "",
            confirmPassword: ""

         
           
        };

        if(!profile.login){
            errors.login = "Name is Required *";
            valid = false;
        }

        if(!profile.password){
            errors.password = "Password is Required *";
            valid = false;
        }
        
    
        if(!profile.email){
            errors.email = "Email is Required *";
            valid = false;
        }else {
            let match = profile.email.match(/[A-z\d-_]+@[a-z]+.[a-z]{2,}/);
            if(match){
            if(match[0] && match[0] !== profile.email){
                errors.email = "Email is Required *";
                valid = false;
            }

        }else{
            errors.email = "Email is Required *";
                valid = false;
        }
           
        }   

        if(!profile.confirmPassword || profile.confirmPassword !== profile.password){
            errors.confirmPassword = "Password is wrong *";
                valid = false;
        }

       



        
       
        setError(errors);

        return true
    }
    function refreshPage() {
        window.location.reload(false);
      }
   
    const Users = async (e)=>{
        e.preventDefault(); 
        console.log(profile);
        if(validation()){
        const result = await PostUsers(profile)
        if(result){
            setProducts([...products, result.data]);

            localStorage.setItem("id",result.data._id)
            setBtn(true)
            setGuest(false)

            // refreshPage()
        }else{
            console.log("Error")
        }
    }
    }

   
    return <div className="register">
        <form onSubmit={Users}>
            <label htmlFor="login"
            className={error.login? 'red' : null}
            >{error.login ? error.login : "Login" }</label><br></br>
            <input onChange={change} id="login" type="text" name="login"  value={profile.firstName}/><br></br>
            
            <label htmlFor="email"
            className={error.email? 'red' : null}
            >{error.email ? error.email : "Eail" }</label><br></br>
            <input onChange={change} id="email" type="text" name="email" /><br></br>

            <label htmlFor="passwor"
            className={error.password? 'red' : null}
            >{error.password ? error.password : "Password" }</label><br></br>
            <input onChange={change} id="passwor" type="password" name="password" /><br></br>

            <label htmlFor="confirmPass"
            className={error.confirmPassword ? 'red' : null}
            >{error.confirmPassword ? error.confirmPassword : "Confirm Password" }</label><br></br>
            <input onChange={change} id="confirmPassword" type="password" name="confirmPassword" /><br></br>

            <button className='register_btn'>Registate</button>

        </form>
    </div>
}