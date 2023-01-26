import { Home } from "./page/Home";
import { Products } from "./page/products/products.jsx";
import {Routes,Route} from "react-router-dom";



function App() {
  return (
    <div>
       <Routes>
       
          <Route path="/sign_up" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/*" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
