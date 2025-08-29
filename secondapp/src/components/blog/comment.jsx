import { useEffect, useRef } from "react";

export function Comment(props){
    let cref= useRef();
    return (
        <div>
            <h3>Comment</h3>
            <input type="text" ref={cref}></input>
            <button onClick={()=>props.add(cref)}>Add</button>
        </div>
    )
}