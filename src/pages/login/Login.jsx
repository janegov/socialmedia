import "./login.scss"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Login = () => {
  const {login} = useContext(AuthContext);

const handleLogin = () => {
  login();
}
  return (
    <div className="login">
      <div className="card">
      <div className="left">
        <h1> Welcome to TravelShare</h1>
        <p>This social media was created by
          the person who likes traveling.
          If you want to share your expirience,
          good places in different countries/towns,
          or you look for these places. This social media 
          is for you.
          Please, be nice with everyone in this website
          we want to create friendly and comfortable environment
          for everyone
        </p>
        <span>If you dont have an account</span>
        <Link to="/register">
         <button>Register</button>
        </Link>
        
      </div>
      <div className="right">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
      </div>
      
    </div>
  )
}

export default Login;