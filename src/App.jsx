import React, { useState } from "react";
import NavBar from "./components/navBars/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Signup from "./components/signup/signup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Myorder from "./pages/Myorders/Myorder";
 
const App = () => {
  
  const [loginState, setLoginState] = useState(false);
  const [signUpState, setSignUpState] = useState(false);
  return (
    <>

      <div class="app">

        {loginState && <Login setLoginState={setLoginState} setSignUpState={setSignUpState} />}
        {signUpState && <Signup setSignUpState={setSignUpState} setLoginState={setLoginState} />}
        <ToastContainer position="top-right" autoClose={3000} />
        <NavBar loginState={loginState} setLoginState={setLoginState} />
        <Routes>
          <Route
            path="/"
            element={
              <Home loginState={loginState} setLoginState={setLoginState} />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myorder" element={<Myorder/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};
export default App;
