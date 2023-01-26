import {useGlobalContext} from "../../context.jsx";
import Nkar from '../../assets/n.jpg'
import "./style.scss"
export const Products = ()=>{
    const {products,setProducts} = useGlobalContext();
    localStorage.setItem('newProd', JSON.stringify(products))

    const productsArr = JSON.parse(localStorage.getItem('newProd'));
   

return <div className="cards">
   
    { productsArr.length !== 0 ? productsArr.map((elem,index)=>{
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
   { console.log(productsArr)}
</div>

}