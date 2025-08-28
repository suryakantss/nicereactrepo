import { useState } from "react";

export default function Signup() {
 
    let [user,setUser] = useState({fname:'',email:''});
    

    function formChanged(e){
       setUser({...user,[e.target.name]:e.target.value});
    }

    function doSignup(){
        alert("Thanks for Signing up.." + user.fname);
    }
    return (
        <div>
            <h3>SignUp</h3>
            <div>{JSON.stringify(user)}</div>
            <div>
                <label>Full Name</label>
                <input type="text" name='fname' onChange={formChanged}></input>
            </div>
             <div>
                <label>Email </label>
                <input type="text" name='email' onChange={formChanged}></input>
            </div>
            <div>
                <button onClick={doSignup}>SignUp</button>
            </div>
        </div>
    )
}