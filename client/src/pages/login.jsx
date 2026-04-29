import { user_login } from "../api/user_login.js"

export function Login() {  
    async function handleLogin() { 
        const result = await user_login();
        console.log(result);
    }

  return (
    <>
        <h1>Login</h1>
        <button onClick={() => handleLogin()}>Login with Google</button>
    </>
  )
}