// import {Home} from "./components/Home";
//import Skin from "./components/Skin";
//import { Route } from "react-router-dom";
//import { CartPage } from "./components/CartPage";
//import WowSkin from "./components/WowSkin";

<<<<<<< HEAD
// import {Home} from "./components/Home"
import {Payment} from './components/Payment/Payment.jsx'
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/Login/ProctedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import {Login} from './components/Login/Login'

// import Checkk from './components/Login/checkk'
function App() {
  return (
<div>
  {/* <Checkk /> */}
<UserAuthContextProvider>
=======
import { Home } from "./components/Home"
import { Payment } from './components/Payment/Payment.jsx'
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/Login/ProctedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Login } from './components/Login/Login'
import { CartPage } from "./CartPage"

function App() {
  return (
    <div>
      {/* {/* <UserAuthContextProvider>
>>>>>>> 1036a7f658d92861b1b657ee291ce10b1b905532
            <Routes>
              <Route
                path="/payment"
                element={
                  <ProtectedRoute>
                    <Payment />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              {/* <Route path="/signup" element={<Signup />} /> */}
      {/* </Routes> */}
      {/* // </UserAuthContextProvider> */}
      <CartPage />

    </div>
  );
}

export default App;
