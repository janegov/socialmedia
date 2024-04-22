import "./register.scss"
import {Link} from "react-router-dom"
const Register = () => {
  return (
    <div className="register">
      <div className="card">
      <div className="left">
        <h1>TravelShare</h1>
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
        <span>Do you have an account?</span>
        <Link to="/login">
         <button>Login</button>
        </Link>
      </div>
      <div className="right">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Username"/>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password"/>
          <input type="text" placeholder="Name"/>
          <button>Register</button>
        </form>
      </div>
      </div>
      
    </div>
  )
}

export default Register