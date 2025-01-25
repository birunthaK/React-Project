import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
const SignUp = () => {
  const [email, setEmail] = useState("");
      
  const [npassword, setNpassword] = useState("");
  const [cpassword,setCpassword]=useState('')
  const [error,setError]=useState('')

  const handleSignup = (e) => {
    e.preventDefault();
   
    if(npassword===cpassword){
setError('Passwords matched sucessfully')
// alert(`Signup successful!\nEmail: ${email}`);
    }
    else{
      setError("Password doesn't match")
    }
  };
 
  return(
    <div className="signup-container">
    <div className="sign">
    <h1>SignUp</h1>
    <form onSubmit={handleSignup}>
      <div className="form">
        <div>
          <input type='text'
          placeholder='Name'
          required/>
        </div>
      <div><input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      /></div>
      <div><input
        type="password"
        placeholder="New Password"
        value={npassword}
        required
        onChange={(e) => setNpassword(e.target.value)}
      /></div>
      <div><input
        type="password"
        placeholder=" Repeat Password"
        value={cpassword}
        onChange={(e)=>setCpassword(e.target.value)}
        required
        /></div>
        <p>{error}</p>
      <button type="submit">SignUp</button>
      <div className="signup">
       <p>Already have a Account?</p><hr/>
<Link to='/login' state={{cpassword}}><button>Login Here</button></Link>
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

export default SignUp