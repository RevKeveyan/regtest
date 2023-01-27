import {useGlobalContext} from "../../context.jsx";
import { useState } from "react";
import { GetUsers } from "../../Platform/api/index.js";
import { useEffect } from "react";
import Nkar from '../../assets/n.jpg'
import "./style.scss"
import { Menu } from "../../component/menu/index.jsx";
export const Products = () =>{

    const {products, setProducts,setUser, user} = useGlobalContext();
    

    useEffect(()=>{
       
        // console.log('products:', products);
        // if(products.length === 0 && JSON.parse(localStorage.getItem('newProd')))
        // setProducts([...products, ...JSON.parse(localStorage.getItem('newProd'))])
        Get()
    },[setProducts])


    const Get = async ()=>{
        // console.log(id)
        const result = await GetUsers()
        if(result){
            setProducts([...result.data])
        }
    }
    

return (<div className="products">
    <div className="left_menu">
        <Menu/>
    </div>

    <div className="cards">
   
    {products.length !== 0 ? products.map((elem,index)=>{
        return ( <div className="card" key ={index}>
                    <div className="card__img">
                    <img src={elem.file ? elem.file: Nkar} alt={elem.name + ' ' + elem.lastName} />
                    </div>
                    <div>
                        <h2>{elem.firstName + ' ' + elem.lastName}</h2>
                        <ul className="card_list">
                            <li><span>Position:</span> <span className="right">{elem.position}</span></li>
                            <li><span>Phone:</span> <span className="right">{'+'+ elem.phoneNumber}</span></li>
                            <li><span>Email:</span> <span className="right">{elem.email}</span></li>
                            <li><span>Age:</span> <span className="right">{elem.age}</span></li>
                            <li><span>Date of Birth:</span> <span className="right">{elem.dateOfBirth}</span></li>
                        </ul>
                    </div>
            </div>
            );
    }): <h2 className="nothing">Nothing in here</h2>  }

</div>
</div>)
}