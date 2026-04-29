import { google_login } from "../0Auth/google";
import google_icon from '../assets/icons/google.png'
import './login.css'

export function Login() {  
  return (
    <>  
        <title>Login</title>

        <div className="login-container">
          <div className="login-box" onClick={google_login}>
            <img className="google-icon" src={google_icon} alt="Google Icon" />
            <span>Sign in with Google</span>
          </div>
        </div>
    </>
  )
}