import {React} from "react";
import {Login_nav} from "./Login_nav"
import {Login_main} from "./Login_main"
import { Cart } from "./cart";
import './login_main.css'


 export const Login=()=>{
  

    return(

        <div className="main-box">
          <Login_nav/>
          <br />
          <Login_main />
          <Cart />
        </div>
    )

}






// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { logIn, googleSignIn } = useUserAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await logIn(email, password);
//       navigate("/home");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleGoogleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       await googleSignIn();
//       navigate("/home");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <>
//       <div className="p-4 box">
//         <h2 className="mb-3">Firebase Auth Login</h2>
//         {error && <Alert variant="danger">{error}</Alert>}
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Control
//               type="email"
//               placeholder="Email address"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>

//           <div className="d-grid gap-2">
//             <Button variant="primary" type="Submit">
//               Log In
//             </Button>
//           </div>
//         </Form>
//         <hr />
//         <div>
//           <GoogleButton
//             className="g-btn"
//             type="dark"
//            
//           />
//         </div>
//       </div>
//       <div className="p-4 box mt-3 text-center">
//         Don't have an account? <Link to="/signup">Sign up</Link>
//       </div>
//     </>
//   );
// };

// export default Login;

