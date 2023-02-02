import { Route, Routes } from "react-router-dom"
import { Home } from "../../page/Home"
import { Products } from "../../page/products/products"

export const User = () => {


  return  <div>
    <Routes>
     
       <Route path="/sign_up" element={<Home />}/>
       <Route path="/products" element={<Products />}/>
       <Route path="/*" element={<Home />}/>
   </Routes>
 </div>
  
}