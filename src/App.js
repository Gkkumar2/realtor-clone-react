import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import ForgotPassword from "./pages/ForgotPassword"
import SignIn from "./pages/Signin"
import SignUP from "./pages/SignUP"
import Offers from "./pages/Offers"
import Header from "./components/Header";
function App() {
  return (
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
  );
}

export default App;
