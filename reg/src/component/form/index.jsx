import { useState } from "react";
import './style.scss'
import { useContext } from "react";
import {MyContext} from  "../../page/Home"
export const Form = ()=>{

    const [inputs] = useState(['First Name','Last Name','Position','Email','Phone Number','Age'])
    const [inputsName] = useState(['firstName','lastName','position','email','phoneNumber','age'])

    const context = useContext(MyContext);

    // const [form] = useState({
    //     firstName : '',
    //     lastName : '',
    //     position : '',
    //     email : '',
    //     phoneNumber : '',
    //     age : '',
    //     gender : '',
    //     dateOfBirth : '',
    //     file : '',
    //     btn : false
    // });

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
        context[e.target.name] = e.target.value;
        
    }

    const confirm  = () =>{
        console.log('====================================');
        console.log(context);
        console.log('====================================');
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

        if(!context.firstName){
            errors.firstName = "Name is Required *";
            valid = false;
        }else {
            let match = context.firstName.match(/[A-Z]([a-z]{1,})/);
            if(match){
            if(match[0] !== context.firstName){
                errors.firstName = "Name is Required *";
                valid = false;
            }
        }else{
            errors.firstName = "Name is Required *";
            valid = false;
            }
           
        }


        if(!context.lastName){
            errors.lastName = "Last Name is Required *";
            valid = false;
        }
        if(!context.position){
            errors.position = "Position is Required *";
            valid = false;
        }
        if(!context.email){
            errors.email = "Email is Required *";
            valid = false;
        }else {
            let match = context.email.match(/[A-z\d-_]+@[a-z]+.[a-z]{2,}/);
            if(match){
            if(match[0] && match[0] !== context.email){
                errors.email = "Email is Required *";
                valid = false;
            }

        }else{
            errors.email = "Email is Required *";
                valid = false;
        }
           
        }   

        if(!context.phoneNumber){
            errors.phoneNumber = "Phone Number is Required *";
            valid = false;
        }else {
            let match = context.phoneNumber.match(/374(\d{8})/);
            if(match){
            if(match[0] && match[0] !== context.phoneNumber){
                errors.phoneNumber = "Phone Number is Required *";
                valid = false;
            }
           
        }else{
            errors.phoneNumber = "Phone Number is Required *";
                valid = false;
        }
    }



        if(!context.age || context.age > 100 || context.age < 18){
            errors.age = "Age is Required *";
            valid = false;
        }
        if(!context.gender){
            errors.gender = "Gender is Required *";
            valid = false;
        }
        if(!context.dateOfBirth){
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