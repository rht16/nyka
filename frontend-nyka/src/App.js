import {Home} from "./components/Homepage/Home";
import Skin from "./components/Skin";
import 'bootstrap/dist/css/bootstrap.min.css'

// import { CartPage } from "./components/CartPage";
import WowSkin from "./components/WowSkin";
// import {LoginPage } from "./components/Login/Login"
 import {Hairpage} from "./components/hair/Hair"
 import {Payment} from './components/Payment/Payment.jsx'
import { Routes, Route } from "react-router-dom";
 import ProtectedRoute from "./components/Login/ProctedRoute";
 import { UserAuthContextProvider } from "./context/UserAuthContext";
 import {Login} from './components/Login/Login'
import { CartPage } from "./components/CartPage";
// import Checkk from './components/Login/checkk'
import {OrderConfirmed} from './components/order/Order'

function App() {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          {/* <Route
            path="/login"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          /> */}

          <Route path="/login"><Login /></Route>
          <Route path="/" element={<Home />} />
          <Route path="/hair" element={<Hairpage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/details" element={<CartPage />} />
          <Route path="/skin/botique" element={<WowSkin />} />
          <Route path="/skin" element={<Skin />} />
          <Route path="/confirmation" element={<OrderConfirmed />}  />
        </Routes>
      </UserAuthContextProvider>
      {/* <WowSkin /> */}
    </div>
  );
}

export default App;
