import { useState } from "react";
import './style.scss';
import {useGlobalContext} from "../../context";

export const Form = ()=>{

    const [inputs] = useState(['First Name','Last Name','Position','Email','Phone Number','Age']);
    const [inputsName] = useState(['firstName','lastName','position','email','phoneNumber','age']);
    const {profile,setProfile} = useGlobalContext();

    

    const [error,setError] = useState({
        firstName : "",
        lastName : "",
        position : "",
        email : "",
        phoneNumber : "",
        age : "",
        gender : "",
        dateOfBirth : "",
        file : "",
    });

    const change = (e) =>{
        setProfile({...profile, [e.target.name] : e.target.value});
        
    }

    const confirm  = () =>{
  
        let valid = true
        const errors = {
            firstName : "",
            lastName : "",
            position : "",
            email : "",
            phoneNumber : "",
            age : "",
            gender : "",
            dateOfBirth : "",
            file : "",
           
        };

        if(!profile.firstName){
            errors.firstName = "Name is Required *";
            valid = false;
        }else {
            let match = profile.firstName.match(/[A-Z]([a-z]{1,})/);
            if(match){
            if(match[0] !== profile.firstName){
                errors.firstName = "Name is Required *";
                valid = false;
            }
        }else{
            errors.firstName = "Name is Required *";
            valid = false;
            }
           
        }


        if(!profile.lastName){
            errors.lastName = "Last Name is Required *";
            valid = false;
        }
        if(!profile.position){
            errors.position = "Position is Required *";
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

        if(!profile.phoneNumber){
            errors.phoneNumber = "Phone Number is Required *";
            valid = false;
        }else {
            let match = profile.phoneNumber.match(/374(\d{8})/);
            if(match){
            if(match[0] && match[0] !== profile.phoneNumber){
                errors.phoneNumber = "Phone Number is Required *";
                valid = false;
            }
           
        }else{
            errors.phoneNumber = "Phone Number is Required *";
                valid = false;
        }
    }



        if(!profile.age || profile.age > 100 || profile.age < 18){
            errors.age = "Age is Required *";
            valid = false;
        }
        if(!profile.gender){
            errors.gender = "Gender is Required *";
            valid = false;
        }
        if(!profile.dateOfBirth){
            errors.dateOfBirth = "Date Of Birth is Required *";
            valid = false;
        }
        

        if(valid){
            setProfile({...profile, btn : true})
            }
        setError(errors);
        return valid;


    }

    return (<div className="form_section">
        <div className="form">
            {inputs.map((elem,index)=>{
                return <div key ={index} className="form_inputs">
                <p className={error[inputsName[index]] ? "red" : null}>{error[inputsName[index]] ? error[inputsName[index]] : elem}</p>
                <input className={error[inputsName[index]] ? "redBorder" : null} onChange={change} type={elem === 'Age' || elem === 'Phone Number' ? "number" : "text"} name={inputsName[index]} placeholder={elem}/>
                </div>                
            })}
            

            <div className="form_radio" >
            <p className={error.gender ? "red" : null}>{error.gender ? error.gender : 'Gender'}</p>
            <input onChange={change} type="radio" id='Male' name="gender" value="Male"/>
            <label htmlFor="Male">Male</label>
            <input onChange={change} type="radio" id='Female' name="gender" value="Female"/>
            <label htmlFor="Female">Female</label>
            </div>

            <div className="form_inputs">
            <p className={error.dateOfBirth ? "red" : null}>{error.dateOfBirth ? error.dateOfBirth : 'Date Of Birth'}</p>
            <input className={error.dateOfBirth ? "redBorder" : null} onChange={change}  type="date" name="dateOfBirth"/>
            </div>

            <div className="form_inputs file">
            <p >Profile Image</p>
            <input type="file" name="file"/>
            </div>

            <button onClick={confirm} className="form_btn">Save Changes</button>

            
        </div>
        
        </div>
    );
}