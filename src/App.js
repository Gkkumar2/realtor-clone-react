import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import ForgotPassword from "./pages/ForgotPassword"
import SignIn from "./pages/Signin"
import SignUP from "./pages/SignUP"
import Offers from "./pages/Offers"
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
   <Router>
    <Header/>
    <Routes>
       < Route path ="/" element ={<Home/>}/>
       < Route path ="/Profile" element ={<Profile/>}/>
       < Route path ="/ForgotPassword" element ={<ForgotPassword/>}/>
       < Route path ="/Signin" element ={<SignIn/>}/>
       < Route path ="/SignUp" element ={<SignUP/>}/>
       < Route path ="/Offers" element ={<Offers/>}/>
    </Routes>
   </Router>
   <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  );
}

export default App;
