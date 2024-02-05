import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import ForgotPassword from "./pages/ForgotPassword"
import SignIn from "./pages/SignIn"
import SignUP from "./pages/SignUP"
import Offers from "./pages/Offers"
function App() {
  return (
   <Router>
    <Routes>
       < Route path ="/" element ={<Home/>}/>
       < Route path ="/Profile" element ={<Profile/>}/>
       < Route path ="/ForgotPassword" element ={<ForgotPassword/>}/>
       < Route path ="/SignIn" element ={<SignIn/>}/>
       < Route path ="/SignUp" element ={<SignUP/>}/>
       < Route path ="/Offers" element ={<Offers/>}/>
    </Routes>
   </Router>
  );
}

export default App;
