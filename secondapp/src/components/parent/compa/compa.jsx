import { useRef } from "react"
export function CompA(props){
    let tref= useRef();
   
    return (
        <div>
        <h3>CompA</h3>
        <label>Text :</label>
        <input type="text" name='txt' ref={tref}></input>
        <button onClick={()=> props.process(tref.current.value)}>Send</button>
        </div>
    )
}