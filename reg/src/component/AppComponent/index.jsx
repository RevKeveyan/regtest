import { Route, Routes } from "react-router-dom"
import { useGlobalContext } from "../../context"
import { Home } from "../../page/Home"
import { Products } from "../../page/products/products"
import { Guest } from "../GuestPage"
import { Reg } from "../regform"
import { User } from "../userPage"

export const AppComp = () => {
   const {guest} = useGlobalContext()

    return (   <div>
        {guest ? <><Routes>
        
        <Route path="/guest" element={< Guest/>}/>
        <Route path="/registration" element={<Reg />}/>
        <Route path="/*" element={< Guest/>}/>
    </Routes>
    </> :<><Routes>
        
        <Route path="/sign_up" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/*" element={<Home />}/>
    </Routes>
    </>}
        </div>)

}