import { useState } from "react";
import './style.scss';
import {useGlobalContext} from "../../context";
import {useNavigate} from "react-router";
import { PostUsers } from "../../Platform/api";

export const Form = ()=>{
    const navigate = useNavigate()

    const [inputs] = useState([
        {   name: 'firstName',
            label: 'First Name'
        },
        {   name: 'lastName',
            label: 'Last Name'
        },
        {   name: 'position',
            label: 'Position'
        },
        {   name: 'email',
            label: 'Email'
        },
        {   name: 'phoneNumber',
            label: 'Phone Number'
        },
        {   name: 'age',
            label: 'Age'
        },
        
])
    const {profile,setProfile, products, setProducts, setBtn} = useGlobalContext();

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

    const confirm  = (e) =>{
        e.preventDefault();
        
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
        }else {
            let match = profile.lastName.match(/[A-Z]([a-z]{1,})/);
            if(match){
                if(match[0] !== profile.lastName){
                    errors.lastName = "Last Name is Required *";
                    valid = false;
                }
        }else{
            errors.lastName ="Last Name is Required *";
            valid = false;
            }
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
        if(!profile.file){
            errors.file = "Please choose file *";
            valid = false;
        }
        
        if(true){
            setProducts([...products, profile])
            Users()
            // localStorage.setItem('newProd', JSON.stringify(products));
            
            setProfile({
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
            setBtn(true)
            navigate("/products")

        }   
        setError(errors);

    }
    
    const Users = async ()=>{
        const result = await PostUsers(profile)
        if(result){
            // console.log("resulr:" ,result.data)
            setProducts([...products, result.data]);
            // localStorage.setItem("id",result.data._id)
        }else{
            console.log("Error")
        }
    }

// const addProd = ()=>{
//     confirm()
//     if(confirm()){
//        setProducts([...products, profile]);
//        setProfile({
//         firstName : '',
//         lastName : '',
//         position : '',
//         email : '',
//         phoneNumber : '',
//         age : '',
//         gender : '',
//         dateOfBirth : '',
//         file : '',
//         btn : false
//     });
//     localStorage.setItem('newProd', products)
// }
// }

const changeFile = (e)=>{
    const fr = new FileReader()
        fr.readAsDataURL(e.target.files[0])
        fr.onload = function(event) {
            setProfile({...profile, file : event.target.result })
      };
    //   localStorage.setItem('newProd', JSON.stringify(products))

}
    return (<div className="form_section">
        <form className="form"  >
            {inputs.map((elem,index)=>{
                return <div key ={index} className="form_inputs">
                <p className={error[elem.name] ? "red" : null}>{error[elem.name] ? error[elem.name] : elem.label}</p>
                <input className={error[elem.name] ? "redBorder" : null} onChange={change} type={elem === 'Age' || elem === 'Phone Number' ? "number" : "text"} name={[elem.name]} placeholder={elem.label}/>
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
            <p className={error.file ? "red" : null}>{error.file ? error.file : 'Choose file'}</p>
            <input type="file" name="file"  accept="image/*,.png,.jpg,.web," onChange={changeFile} />
            </div>

            <button type="submit" onClick={confirm} className="form_btn">Save Changes</button>

            
        </form>
        
        </div>
    );
}