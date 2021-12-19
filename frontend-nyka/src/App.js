// import {Home} from "./components/Home";
import Skin from "./components/Skin";

// import { CartPage } from "./components/CartPage";
import WowSkin from "./components/WowSkin";
// import {LoginPage } from "./components/Login/Login"
// import {Home} from "./components/Home"
 import {Payment} from './components/Payment/Payment.jsx'
import { Routes, Route } from "react-router-dom";
 import ProtectedRoute from "./components/Login/ProctedRoute";
 import { UserAuthContextProvider } from "./context/UserAuthContext";
 import {Login} from './components/Login/Login'
import { CartPage } from "./components/CartPage";
// import Checkk from './components/Login/checkk'

function App() {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route path="/payment" element={<Payment />} />
          <Route path="/details" element={<CartPage />} />
          <Route path="/skin/botique" element={<WowSkin />} />
          <Route path="/skin" element={<Skin />} />
        </Routes>
      </UserAuthContextProvider>
      {/* <WowSkin /> */}
    </div>
  );
}

export default App;
