import { Home } from "./page/Home";
import { Products } from "./page/products/products.jsx";
import {Routes,Route} from "react-router-dom";
import { Guest } from "./component/GuestPage";
import { AppComp } from "./component/AppComponent";
import { Reg } from "./component/regform";


function App() {
  return (
    // <Guest/>
    <div>
       {/* <Routes>
        
          <Route path="/sign_up" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/*" element={<Home />}/>
      </Routes> */}
      <AppComp/>
    </div>
  );
}

export default App;
