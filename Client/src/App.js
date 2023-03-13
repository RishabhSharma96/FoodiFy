import HomePage from "./displays/HomePage";
import SignUp from "./displays/SignUp"; 
import MyOrder from "./displays/MyOrders"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"   
import Login from "./displays/Login";
import { CartProvider } from "./Components/ContextReducer";
import Cart from "./displays/Cart";
import Loader from "./Components/Loader";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>

            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/createuser" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/orders" element={ < MyOrder />} />
            <Route exact path="*" element={ < ErrorPage />} />

          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
