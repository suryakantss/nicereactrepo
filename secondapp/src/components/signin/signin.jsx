import { useState } from "react"
import { SignInService } from "./signin.service";

export default function SignIn() {
    let [login,setLogin] = useState('');
    let [password,setPassword] = useState('');
    let [msg,setMsg] = useState('');
    
    
    function lchange(e){
            setLogin(e.target.value);
    }
    function pchange(e){
            setPassword(e.target.value);
        
    }
    function doSignIn(){
       if(SignInService.check(login,password))
            setMsg('Welcome ' + login);
        else
            setMsg('Invalid login/password')
    }

    return (
        <div>
            <h3>SignIn</h3>
            <div>
                <label>Login</label>
                <input type="text" name='login' onChange={lchange}></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name='password' onChange={pchange}></input>
            </div>
            <div>{msg}</div>
            <div>
                <button onClick={doSignIn}>SignIn</button>
            </div>

        </div>
    )
}