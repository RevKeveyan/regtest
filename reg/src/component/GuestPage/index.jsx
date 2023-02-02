import Nkar from '../../assets/n.jpg'
import './style.scss'
import { useState } from 'react'
import { GetUser } from '../../Platform/api'
import { useGlobalContext } from '../../context'
import { useEffect } from 'react'
import { useNavigate } from 'react-router';

export const Guest = () =>{

    // useEffect(()=>{
    //     refreshPage()
    // },[setGuest])
    const navigate = useNavigate()
    const [user ,setUser] = useState({
        firstName: "",
        password: "",
    })
    const {setGuest,setProfile,profile} = useGlobalContext();
    const [valid, setValid] = useState(true)

//    const onInput = (e) =>{
//         setUser({...user, [e.target.name]: e.target.value})
        
//     }

const login = () =>{
    // console.log('user',user);
    // console.log('profile',profile);

    // if(user.firsName !== '' && user.password !== ''){
    //     Get()
        
    // }else{
    //     setValid(false)
    // }
    Get()

    
}

function refreshPage() {
    window.location.reload(false);
  }

const Get = async ()=>{
    const result = await GetUser(user.password)
    console.log("RS",result.data)
    if(result.data && result.data.firstName === user.firstName){

        console.log('hamynkav');
        setGuest(false)

    }else{

        console.log('chhamynkav', result.data.firstName===user.firstName);
        setValid(false)
        
    }


}

    const reg = () =>{
        setProfile({...profile, ...user})
        navigate('/registration')
        console.log(profile)
    }
    const change = (e) =>{
        setUser({...user, [e.target.name] : e.target.value});
        
    }

    return (<div className="login">
        <div className='login_img'> 
        <img src={Nkar} alt="Profile" />
        </div>
        <label className={valid ? null : "red"}htmlFor="username">Login/Email</label><br></br>
        <input onChange={change} type="text" id="username" name="firstName"/><br></br>
        <label className={valid ? null : "red"} htmlFor="password">Password</label><br></br>
        <input  onChange={change} type="text" id="password"  name="password"/>
        <div className="btns">
                <button onClick={login} className="btns_left">sign in</button>
                <button onClick={reg} className="btns_rihjt">sign up</button>
        </div>
    </div>
        
    );
}