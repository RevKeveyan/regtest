import { useState } from "react";
import './style.scss'
export const Form = ()=>{

    const [inputs] = useState(['First Name','Last Name','Position','Email','Phone Number','Age'])
    const [inputsName] = useState(['firstName','lastName','position','email','phoneNumber','age'])

    const [form] = useState({
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
    });

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
            form[e.target.name] = e.target.value;
        
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

        if(!form.firstName){
            errors.firstName = "Name is Required *";
            valid = false;
        }
        if(!form.lastName){
            errors.lastName = "Last Name is Required *";
            valid = false;
        }
        if(!form.position){
            errors.position = "Position is Required *";
            valid = false;
        }
        if(!form.email){
            errors.email = "Email is Required *";
            valid = false;
        }else {
            let match = form.email.match(/[A-z\d-_]+@[a-z]+.[a-z]{2,}/);
            if(match[0] && match[0] !== form.email){
                errors.email = "Email is Required *";
                valid = false;
            }
           
        }   

        if(!form.phoneNumber){
            errors.phoneNumber = "Phone Number is Required *";
            valid = false;
        }else {
            let match = form.phoneNumber.match(/374(\d{9})/);
            if(match[0] && match[0] !== form.phoneNumber){
                errors.phoneNumber = "Phone Number is Required *";
                valid = false;
            }
           
        }



        if(!form.age){
            errors.age = "Age is Required *";
            valid = false;
        }
        if(!form.gender){
            errors.gender = "Gender is Required *";
            valid = false;
        }
        if(!form.dateOfBirth){
            errors.dateOfBirth = "Date Of Birth is Required *";
            valid = false;
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