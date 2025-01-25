import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
import '../CSS/Login.css'

import { Link } from 'react-router-dom'

const Login = () => {
  const location=useLocation()
  const {cpassword}=location.state||{cpassword:"No data passed"}
  console.log(cpassword)
  const [email, setEmail] = useState("");
      
    const [password, setPassword] = useState("");
      const [message,setMessage]=useState('')
  
    const handleLogin = (e) => {
      e.preventDefault();
      // alert(`Login successful!\nEmail: ${email}`);
      if(password===cpassword){
setMessage("Password Match")
      }
      else{
      setMessage("Password does't match")
      }
    };
  return (
    <div className="login-container">
    <div className="login">
    <h1>Login Page</h1>
    <form onSubmit={handleLogin}>
      <div className="form">
      <div><input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      /></div>
      <div><input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      /></div>
      <p>{message}</p>
      <button type="submit">Login</button>
      <div className="signup">
       <p>Forgotten Password?</p><hr/>
<Link to='/signup'><button>Create New Account</button></Link>
     </div>
      </div>
      <div class="page">
      <span>Create a page for a celebrity,brand or business</span>
      </div>
    </form>
  </div>
  </div>
  
  )
}

export default Login